import { Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { reviews, reviewsSummary } from "@/data";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-gold text-gold`} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section bg="cream" padding="lg">
      <Reveal>
        <SectionHeader
          eyebrow="Client Love"
          title="Rated 4.8 Across the GTA"
          description="Real reviews from real clients across our two Greater Toronto Area locations."
        />
      </Reveal>

      {/* Rating summary badge */}
      <Reveal>
        <div className="mx-auto mb-12 flex w-fit items-center gap-4 rounded-sm border border-sand/20 bg-white px-8 py-5 shadow-sm shadow-espresso/5">
          <span className="font-serif text-5xl font-light text-espresso">
            {reviewsSummary.rating}
          </span>
          <div>
            <Stars className="h-5 w-5" />
            <p className="mt-1.5 text-xs uppercase tracking-widest text-taupe">
              Rated on Google
            </p>
          </div>
        </div>
      </Reveal>

      {/* Review cards */}
      <Reveal animation="reveal-stagger">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-sm border border-sand/20 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-espresso/5"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-taupe">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-sand/15 pt-4">
                <p className="font-serif text-base text-espresso">{review.name}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-taupe">
                  <span className="rounded-full bg-gold/10 px-2.5 py-0.5 uppercase tracking-wide text-gold">
                    {review.treatment}
                  </span>
                  {review.badge && <span className="text-sand">{review.badge}</span>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 text-center">
          <LinkButton
            href={reviewsSummary.url}
            variant="outline"
            size="lg"
            rounded="full"
          >
            Read all reviews on Google
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
