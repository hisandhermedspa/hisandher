import { Section, SectionHeader } from "@/components/ui/section";
import { ImageSlot } from "@/components/ui/image-slot";
import { LinkButton } from "@/components/ui/button";
import { team } from "@/data";
import { images } from "@/data/images";

const teamImageKeys: Record<string, keyof typeof images.team> = {
  "Mariyam Rasoli": "mariyam",
  "Christina Payatakis": "christina",
};

export function TeamPreview() {
  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        eyebrow="Meet the Founders"
        title="Expert Hands, Genuine Care"
        description="Led by two passionate owners who believe in honest guidance, personalized treatments, and results that enhance — never alter — your natural beauty."
      />

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {team.map((member) => {
          const imgKey = teamImageKeys[member.name];
          const memberImg = imgKey ? images.team[imgKey] : undefined;

          return (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-sm bg-white"
            >
              {/* Portrait image */}
              <ImageSlot
                src={memberImg?.src ?? null}
                alt={memberImg?.alt ?? member.name}
                width={600}
                height={800}
                className="aspect-[3/4] w-full"
                initials={member.name.charAt(0)}
                gradientFrom="from-mocha/20"
                gradientVia="via-gold/10"
                gradientTo="to-rose-light/30"
              />

              {/* Bottom gradient fade into content */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" style={{ bottom: "auto", top: "calc(75% - 8rem)" }} />

              <div className="relative p-6">
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
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <LinkButton href="/team" variant="outline" size="lg" rounded="full">
          Learn More About Us
        </LinkButton>
      </div>
    </Section>
  );
}
