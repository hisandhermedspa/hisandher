import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TeamPreview } from "@/components/sections/team-preview";
import { AcademyPreview } from "@/components/sections/academy-preview";
import { HoursSection } from "@/components/sections/hours-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TeamPreview />
      <AcademyPreview />
      <HoursSection />
      <CtaBanner />
    </>
  );
}
