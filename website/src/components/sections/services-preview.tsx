import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ImageSlot } from "@/components/ui/image-slot";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturedServices } from "@/data";
import { images } from "@/data/images";

export function ServicesPreview() {
  const featured = getFeaturedServices();

  return (
    <Section bg="white" padding="lg">
      <Reveal>
        <SectionHeader
          eyebrow="Our Services"
          title="Treatments Tailored to You"
          description="From injectables and IV therapy to body contouring, every treatment is personalized to enhance your natural beauty with precision and care."
        />
      </Reveal>

      <Reveal animation="reveal-stagger">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const serviceImg =
              images.services[service.slug as keyof typeof images.services];

            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative overflow-hidden rounded-sm border border-sand/20 bg-cream/30 transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white hover:shadow-2xl hover:shadow-espresso/8"
              >
                {/* Service image */}
                <div className="overflow-hidden">
                  <ImageSlot
                    src={serviceImg?.src ?? null}
                    alt={serviceImg?.alt ?? service.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full transition-transform duration-700 group-hover:scale-105"
                    gradientFrom={
                      i % 3 === 0
                        ? "from-gold/15"
                        : i % 3 === 1
                          ? "from-rose/15"
                          : "from-mocha/15"
                    }
                    gradientVia="via-cream-dark/20"
                    gradientTo="to-cream/10"
                  />
                </div>

                <div className="p-6 md:p-8">
                  {/* Gold accent line */}
                  <div className="mb-4 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />

                  <h3 className="font-serif text-xl font-light text-espresso">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-taupe line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-espresso transition-all duration-300 group-hover:gap-4 group-hover:text-gold">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 text-center">
          <LinkButton href="/services" variant="outline" size="lg" rounded="full">
            View All Services
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
