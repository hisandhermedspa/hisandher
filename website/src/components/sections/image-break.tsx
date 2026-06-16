import { FullBleedImage } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

interface ImageBreakProps {
  src: string | null;
  alt: string;
  quote?: string;
  attribution?: string;
}

export function ImageBreak({ src, alt, quote, attribution }: ImageBreakProps) {
  return (
    <FullBleedImage
      src={src}
      alt={alt}
      height="h-[40vh] md:h-[50vh]"
      overlay
      overlayClass="bg-espresso/60"
      className="parallax-bg"
    >
      {quote && (
        <Reveal animation="reveal-scale">
          <div className="max-w-2xl text-center">
            <div className="mx-auto mb-4 h-px w-12 bg-gold-light/40" />
            <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-cream/90 md:text-3xl lg:text-4xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
            {attribution && (
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-light/60">
                — {attribution}
              </p>
            )}
            <div className="mx-auto mt-4 h-px w-12 bg-gold-light/40" />
          </div>
        </Reveal>
      )}
    </FullBleedImage>
  );
}
