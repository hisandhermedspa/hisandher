import { NextResponse } from "next/server";
import { z } from "zod/v4";
import { business } from "@/data";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.email(),
  phone: z.string().min(7).max(20),
  interest: z.string().optional(),
  message: z.string().max(5000).optional(),
  // Honeypot — real users never fill this hidden field; bots do.
  // Accept any value here so a filled honeypot passes validation and
  // is then silently dropped below (a 400 would leak the trap).
  company: z.string().max(200).optional(),
});

type ContactData = z.infer<typeof contactSchema>;

// Until the domain is verified in Resend, the From address must be
// onboarding@resend.dev and mail can only go to the account owner's
// inbox (the business Gmail) — which is exactly the recipient we want.
// Once hisandhermedspa.ca is verified, set CONTACT_FROM_EMAIL to
// something like "His & Her Med Spa <noreply@hisandhermedspa.ca>".
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "His & Her Med Spa <onboarding@resend.dev>";

// Email clients strip CSS variables, so the notification HTML needs
// literal hex. These mirror the site palette tokens (globals.css) —
// keep them in sync if the brand colors change.
const EMAIL_COLORS = {
  ink: "#0B0B0C", // --color-espresso
  gold: "#C0A062", // --color-gold
  muted: "#6A6A70", // --color-taupe
} as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmail(data: ContactData) {
  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Interested in", data.interest ?? "—"],
    ["Message", data.message ?? "—"],
  ];

  const html = `
    <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;color:${EMAIL_COLORS.ink};">
      <h2 style="font-weight:300;border-bottom:2px solid ${EMAIL_COLORS.gold};padding-bottom:8px;">
        New website inquiry
      </h2>
      <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px 8px 0;color:${EMAIL_COLORS.muted};vertical-align:top;white-space:nowrap;">${label}</td>
            <td style="padding:8px 0;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="font-family:Arial,sans-serif;font-size:12px;color:${EMAIL_COLORS.muted};margin-top:24px;">
        Sent from hisandhermedspa.ca — reply to this email to respond directly to the sender.
      </p>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  return { html, text };
}

export async function POST(request: Request) {
  let data: ContactData;
  try {
    const body: unknown = await request.json();
    data = contactSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Honeypot tripped — silently accept so bots get no signal.
  if (data.company) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No key configured (e.g. local dev) — don't lose the submission,
    // just log it instead of failing the request.
    console.warn(
      "RESEND_API_KEY not set — logging contact submission instead of emailing:",
      { name: data.name, email: data.email, interest: data.interest }
    );
    return NextResponse.json({ success: true });
  }

  const { html, text } = buildEmail(data);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [business.email],
        reply_to: data.email,
        subject: `New inquiry from ${data.name}${data.interest ? ` — ${data.interest}` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
