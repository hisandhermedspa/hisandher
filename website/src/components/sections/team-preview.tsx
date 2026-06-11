"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/data";

export function TeamPreview() {
  return (
    <Section bg="cream" padding="lg">
      <Reveal>
        <SectionHeader
          eyebrow="Meet the Team"
          title="Expert Hands, Genuine Care"
          description="Led by passionate practitioners who believe in honest guidance, personalized treatments, and results that enhance — never alter — your natural beauty."
        />
      </Reveal>

      <Reveal animation="reveal-stagger">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-sm bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-espresso/8 md:p-10"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/20 bg-gradient-to-br from-cream via-gold/10 to-rose-light/20 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-lg group-hover:shadow-gold/10">
                <span className="font-serif text-3xl font-light italic text-gold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-espresso">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold">
                {member.title} · {member.credentials}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-taupe italic">
                &ldquo;{member.bio}&rdquo;
              </p>
              {member.languages.length > 1 && (
                <p className="mt-3 text-xs text-sand">
                  Speaks {member.languages.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 text-center">
          <LinkButton href="/team" variant="outline" size="lg" rounded="full">
            Learn More About Us
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
