"use client";

import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold/8 to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal animation="reveal-scale">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Your Journey Starts Here
          </span>
          <h2 className="font-serif text-3xl font-light leading-tight text-cream md:text-4xl lg:text-5xl">
            Ready to Look and Feel{" "}
            <span className="italic text-gold-light">Your Best?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sand/60">
            Book a free consultation with our team. We&apos;ll create a personalized
            treatment plan designed around your unique goals.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <LinkButton
              href={business.primaryCta.href}
              variant="gold"
              size="xl"
              rounded="full"
            >
              {business.primaryCta.label}
            </LinkButton>
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-sand/60 transition-colors hover:text-cream"
            >
              Or call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
