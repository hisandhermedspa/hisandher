import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { team } from "@/data";

export function TeamPreview() {
  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        eyebrow="Meet the Founders"
        title="Expert Hands, Genuine Care"
        description="Led by two passionate owners who believe in honest guidance, personalized treatments, and results that enhance — never alter — your natural beauty."
      />

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative overflow-hidden rounded-sm bg-white"
          >
            {/* Image placeholder with elegant gradient */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-mocha/20 via-gold/10 to-rose-light/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-gold/20 bg-white/60">
                    <span className="font-serif text-2xl font-light text-gold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mocha/60">
                    Photo Coming Soon
                  </p>
                </div>
              </div>
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="p-6">
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
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <LinkButton href="/team" variant="outline" size="lg" rounded="full">
          Learn More About Us
        </LinkButton>
      </div>
    </Section>
  );
}
