"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setState({
        status: "success",
        message: "Thank you! We'll be in touch within 24 hours.",
      });
      e.currentTarget.reset();
    } catch {
      setState({
        status: "error",
        message: "Something went wrong. Please call or text us instead.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-sm border border-gold/20 bg-gold/5 p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-gold" />
        <h3 className="font-serif text-2xl font-light text-espresso">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-taupe">{state.message}</p>
        <button
          type="button"
          onClick={() => setState({ status: "idle", message: "" })}
          className="mt-6 text-xs uppercase tracking-widest text-gold hover:text-espresso"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-sm border border-sand/30 bg-cream/30 px-4 py-3 text-sm text-espresso placeholder:text-sand transition-all duration-200 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from people, catches spam bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs uppercase tracking-widest text-taupe"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs uppercase tracking-widest text-taupe"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs uppercase tracking-widest text-taupe"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="mb-1.5 block text-xs uppercase tracking-widest text-taupe"
        >
          I&apos;m Interested In
        </label>
        <select id="interest" name="interest" className={inputClasses}>
          <option value="consultation">Free Consultation</option>
          <option value="botox">Botox</option>
          <option value="fillers">Dermal Fillers</option>
          <option value="iv-vitamin-therapy">IV & Vitamin Therapy</option>
          <option value="hydrafacial">HydraFacial</option>
          <option value="prp">PRP Therapy</option>
          <option value="microneedling">Microneedling</option>
          <option value="facials">Facials</option>
          <option value="skin-treatments">Advanced Skin Treatments</option>
          <option value="chemical-peels">Chemical Peels</option>
          <option value="laser-hair-removal">Laser Hair Removal</option>
          <option value="hair-restoration">Hair Restoration</option>
          <option value="body-contouring">Body Contouring</option>
          <option value="waxing">Waxing</option>
          <option value="massage">Massage Therapy</option>
          <option value="academy">Academy Enrollment</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs uppercase tracking-widest text-taupe"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your goals or questions..."
          className={inputClasses + " resize-y"}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-accent">{state.message}</p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        rounded="full"
        className="w-full sm:w-auto"
        disabled={state.status === "submitting"}
      >
        {state.status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
