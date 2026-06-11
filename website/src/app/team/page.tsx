import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { business, team } from "@/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team at His & Her Med Spa + Academy — experienced holistic health practitioners and medical estheticians in Whitby, Durham Region.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso-soft to-espresso" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-rose/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Our Team
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            Passionate Practitioners,{" "}
            <span className="italic text-gold-light">Real Results</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/60 md:text-lg">
            Our team combines clinical expertise with a genuine passion for
            helping you look and feel your most confident self.
          </p>
        </div>
      </section>

      {/* Team members */}
      <Section bg="white" padding="lg">
        <div className="mx-auto max-w-5xl space-y-24">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:![direction:ltr]" : ""}`}
            >
              {/* Portrait placeholder */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-br from-cream-dark via-gold/10 to-rose-light/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/20 bg-white/60">
                      <span className="font-serif text-4xl font-light text-gold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-mocha/50">
                      Photo Coming Soon
                    </p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-gold/20" />
              </div>

              {/* Bio */}
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  {member.title}
                </span>
                <h2 className="mt-2 font-serif text-3xl font-light text-espresso md:text-4xl">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-mocha">{member.credentials}</p>

                <div className="mt-6 h-px w-12 bg-gold" />

                <blockquote className="mt-6 text-base leading-relaxed text-taupe italic">
                  &ldquo;{member.bio}&rdquo;
                </blockquote>

                {member.languages.length > 1 && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-sand">
                      Languages
                    </p>
                    <div className="mt-2 flex gap-2">
                      {member.languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-sand/30 px-3 py-1 text-xs text-mocha"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values section */}
      <Section bg="cream" padding="lg">
        <SectionHeader
          eyebrow="Our Approach"
          title="What We Believe"
          description="Every decision we make is guided by these principles."
        />
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Honest Guidance",
              text: "We recommend only what you need — never upselling, always transparent about expectations and results.",
            },
            {
              title: "Personalized Care",
              text: "No two faces are alike. Every treatment plan is custom-built around your unique anatomy and goals.",
            },
            {
              title: "Natural Results",
              text: "We enhance, never alter. Our goal is for people to notice you look refreshed — not that you had work done.",
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto mb-4 h-px w-8 bg-gold" />
              <h3 className="font-serif text-xl font-light text-espresso">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="espresso" padding="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">
            Meet Us in Person
          </h2>
          <p className="mt-4 text-base text-sand/60">
            The best way to experience our care is to visit. Book a free
            consultation — no pressure, just honest advice.
          </p>
          <div className="mt-8">
            <LinkButton
              href={business.bookingUrl}
              variant="gold"
              size="xl"
              rounded="full"
            >
              Book a Free Consultation
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
