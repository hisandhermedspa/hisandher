import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { business } from "@/data";
import { images } from "@/data/images";

export function Hero() {
  const heroImg = images.hero;

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-espresso">
      {/* Background image or premium gradient fallback */}
      {heroImg.src ? (
        <>
          <Image
            src={heroImg.src}
            alt={heroImg.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/40" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-soft/90 to-mocha/80" />
          {/* Decorative warm glow orbs */}
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-rose/10 to-transparent blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
        </>
      )}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,146,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,146,106,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-in-up mb-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light animate-float" />
              {business.serviceArea}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-200 font-serif text-5xl font-light leading-[1.05] text-cream md:text-6xl lg:text-7xl xl:text-8xl">
            Where Beauty
            <br />
            Meets{" "}
            <span className="italic text-gold-light">Expertise</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-base leading-relaxed text-sand/70 md:text-lg md:leading-relaxed">
            {business.positioning}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row">
            <LinkButton href="/contact" variant="gold" size="xl" rounded="full">
              {business.primaryCta.label}
            </LinkButton>
            <LinkButton
              href="/services"
              variant="outline-light"
              size="xl"
              rounded="full"
            >
              Explore Services
            </LinkButton>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up animation-delay-800 mt-16 flex flex-wrap items-center gap-8 border-t border-sand/10 pt-8">
            <div>
              <p className="font-serif text-3xl font-light text-gold-light">2</p>
              <p className="text-xs uppercase tracking-widest text-sand/50">Expert Owners</p>
            </div>
            <div className="h-8 w-px bg-sand/10" />
            <div>
              <p className="font-serif text-3xl font-light text-gold-light">6+</p>
              <p className="text-xs uppercase tracking-widest text-sand/50">Treatments</p>
            </div>
            <div className="h-8 w-px bg-sand/10" />
            <div>
              <p className="font-serif text-3xl font-light text-gold-light">7</p>
              <p className="text-xs uppercase tracking-widest text-sand/50">Days a Week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand/30">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-sand/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
