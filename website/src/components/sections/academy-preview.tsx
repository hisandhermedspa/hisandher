"use client";

import { Sparkles, Target, Syringe, Droplets, Flower2, HeartPulse } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { academy } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  syringe: <Syringe className="h-5 w-5" />,
  droplets: <Droplets className="h-5 w-5" />,
  flower2: <Flower2 className="h-5 w-5" />,
  "heart-pulse": <HeartPulse className="h-5 w-5" />,
};

export function AcademyPreview() {
  return (
    <Section bg="espresso" padding="lg" className="texture-noise relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <Reveal>
        <SectionHeader
          eyebrow="The Academy"
          title="Launch Your Career in Aesthetics"
          description={academy.description}
          dark
        />
      </Reveal>

      <Reveal animation="reveal-stagger">
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academy.courses.map((course) => (
            <div
              key={course.slug}
              className="group rounded-sm border border-sand/10 bg-white/5 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-gold-light transition-all duration-500 group-hover:border-gold/40 group-hover:text-gold-light group-hover:shadow-lg group-hover:shadow-gold/10 group-hover:scale-110">
                {iconMap[course.icon]}
              </div>
              <h3 className="font-serif text-lg font-light text-cream">
                {course.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/60">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 text-center">
          <LinkButton href="/academy" variant="gold" size="lg" rounded="full">
            Explore Academy Programs
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
