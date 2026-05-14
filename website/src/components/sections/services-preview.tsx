import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { getFeaturedServices } from "@/data";

export function ServicesPreview() {
  const featured = getFeaturedServices();

  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        eyebrow="Our Services"
        title="Treatments Tailored to You"
        description="From injectables to body contouring, every treatment is personalized to enhance your natural beauty with precision and care."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group relative overflow-hidden rounded-sm border border-sand/20 bg-cream/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-xl hover:shadow-espresso/5"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Number */}
            <span className="absolute right-6 top-6 font-serif text-4xl font-light text-sand/20 transition-colors duration-500 group-hover:text-gold/20">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Gold accent line */}
            <div className="mb-6 h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />

            <h3 className="font-serif text-xl font-light text-espresso">
              {service.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold">
              {service.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-taupe line-clamp-3">
              {service.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-espresso transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <LinkButton href="/services" variant="outline" size="lg" rounded="full">
          View All Services
        </LinkButton>
      </div>
    </Section>
  );
}
