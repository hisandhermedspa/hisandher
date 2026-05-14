import type { Metadata } from "next";
import {
  Sparkles,
  Target,
  Syringe,
  Droplets,
  Flower2,
  HeartPulse,
  GraduationCap,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { academy, business } from "@/data";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Hands-on aesthetics certification courses — body contouring, microneedling, Botox, fillers, facials, and PRP. Train with experienced practitioners in Durham Region.",
};

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
  syringe: <Syringe className="h-6 w-6" />,
  droplets: <Droplets className="h-6 w-6" />,
  flower2: <Flower2 className="h-6 w-6" />,
  "heart-pulse": <HeartPulse className="h-6 w-6" />,
};

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-soft/90 to-mocha/80" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-gold/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-5 w-5 text-gold-light" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              His & Her Academy
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            {academy.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/60 md:text-lg">
            {academy.description}
          </p>
          <div className="mt-8">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm uppercase tracking-widest text-gold-light transition-all hover:bg-gold/20"
            >
              <Phone className="h-4 w-4" />
              Call to Enroll — {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <Section bg="white" padding="lg">
        <SectionHeader
          eyebrow="Certification Programs"
          title="What You Can Learn"
          description="Hands-on training taught by experienced practitioners. Each course combines theory with practical, supervised application."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {academy.courses.map((course, i) => (
            <div
              key={course.slug}
              className="group relative overflow-hidden rounded-sm border border-sand/20 bg-cream/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-xl hover:shadow-espresso/5"
            >
              <span className="absolute right-6 top-6 font-serif text-5xl font-light text-sand/10 transition-colors group-hover:text-gold/10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:shadow-lg group-hover:shadow-gold/10">
                {iconMap[course.icon]}
              </div>

              <h3 className="font-serif text-xl font-light text-espresso">
                {course.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {course.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold">
                Inquire now
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why train with us */}
      <Section bg="cream" padding="lg">
        <SectionHeader
          eyebrow="Why His & Her Academy"
          title="Training That Sets You Apart"
        />
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Hands-On Learning",
              text: "Practice on real clients under expert supervision — not just theory and mannequins.",
            },
            {
              title: "Industry Experts",
              text: "Learn from practitioners who actively treat clients every day.",
            },
            {
              title: "Small Class Sizes",
              text: "Personalized attention ensures you leave confident and competent.",
            },
            {
              title: "Career Support",
              text: "Guidance on building your practice, from business setup to client acquisition.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 h-px w-8 bg-gold" />
              <h3 className="font-serif text-lg font-light text-espresso">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Enrollment CTA */}
      <Section bg="espresso" padding="lg" className="bg-noise">
        <div className="mx-auto max-w-2xl text-center">
          <GraduationCap className="mx-auto mb-4 h-8 w-8 text-gold-light" />
          <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-base text-sand/60">
            {academy.enrollmentProcess}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <LinkButton href={`tel:${business.phoneRaw}`} variant="gold" size="xl" rounded="full">
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              size="xl"
              rounded="full"
              className="!border-cream/40 !text-cream hover:!bg-cream hover:!text-espresso"
            >
              Send a Message
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
