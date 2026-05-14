import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { services, categoryLabels, getServicesByCategory } from "@/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of medical spa treatments — Botox, dermal fillers, microneedling, PRP therapy, facials, and body contouring in Whitby, Durham Region.",
};

export default function ServicesPage() {
  const grouped = getServicesByCategory();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso-soft to-espresso" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Our Treatments
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            Services Designed for{" "}
            <span className="italic text-gold-light">Your Goals</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/60 md:text-lg">
            Every treatment is personalized. We listen first, then craft a plan
            that enhances your natural beauty with precision and care.
          </p>
        </div>
      </section>

      {/* Services by category */}
      {(Object.entries(grouped) as [keyof typeof categoryLabels, typeof services][]).map(
        ([category, categoryServices], groupIdx) => (
          <Section
            key={category}
            bg={groupIdx % 2 === 0 ? "white" : "cream"}
            padding="lg"
            id={category}
          >
            <SectionHeader
              eyebrow={categoryLabels[category]}
              title={categoryLabels[category]}
              align="left"
            />

            <div className="grid gap-6 md:grid-cols-2">
              {categoryServices.map((service) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="group rounded-sm border border-sand/20 bg-white p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-espresso/5 scroll-mt-24"
                >
                  <div className="mb-4 h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
                  <h3 className="font-serif text-2xl font-light text-espresso">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-taupe">
                    {service.description}
                  </p>
                  {(service.startingPrice ?? service.duration) && (
                    <div className="mt-4 flex gap-4 text-xs uppercase tracking-widest text-mocha">
                      {service.startingPrice && (
                        <span>From {service.startingPrice}</span>
                      )}
                      {service.duration && <span>{service.duration}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )
      )}

      {/* CTA */}
      <Section bg="espresso" padding="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="mt-4 text-base text-sand/60">
            Book a free consultation and we&apos;ll create a personalized plan
            together.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" variant="gold" size="xl" rounded="full">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
