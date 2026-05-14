import { NextResponse } from "next/server";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.email(),
  phone: z.string().min(7).max(20),
  interest: z.string().optional(),
  message: z.string().max(5000).optional(),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Send email notification (e.g. Resend, SendGrid, or Vercel email)
    // For now, log the submission — replace with real email delivery
    console.info("Contact form submission:", {
      name: data.name,
      email: data.email,
      interest: data.interest,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
