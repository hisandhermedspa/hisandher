import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ImageBreak } from "@/components/sections/image-break";
import { Testimonials } from "@/components/sections/testimonials";
import { TeamPreview } from "@/components/sections/team-preview";
import { AcademyPreview } from "@/components/sections/academy-preview";
import { HoursSection } from "@/components/sections/hours-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { images } from "@/data/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ImageBreak
        src={images.serviceBreak.src}
        alt={images.serviceBreak.alt}
        quote="Confidence isn't about perfection — it's about feeling like the best version of yourself"
      />
      <TeamPreview />
      <Testimonials />
      <AcademyPreview />
      <ImageBreak
        src={images.academyBreak.src}
        alt={images.academyBreak.alt}
        quote="Where knowledge meets artistry — train with the best"
      />
      <HoursSection />
      <CtaBanner />
    </>
  );
}
