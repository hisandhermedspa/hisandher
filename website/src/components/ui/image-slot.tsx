import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  initials?: string;
}

export function ImageSlot({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  gradientFrom = "from-mocha/30",
  gradientVia = "via-gold/10",
  gradientTo = "to-rose-light/20",
  overlay = false,
  overlayOpacity = "bg-espresso/40",
  initials,
}: ImageSlotProps) {
  if (src) {
    const sizeProps = fill
      ? { fill: true as const, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" }
      : { width, height };

    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-105",
            fill && "absolute inset-0"
          )}
          {...sizeProps}
        />
        {overlay && (
          <div className={cn("absolute inset-0", overlayOpacity)} />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        gradientFrom,
        gradientVia,
        gradientTo,
        className
      )}
      style={!fill ? { aspectRatio: `${width}/${height}` } : undefined}
    >
      {/* Subtle texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, var(--pattern-gold-line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {initials ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/20 bg-white/50 backdrop-blur-sm">
              <span className="font-serif text-3xl font-light text-gold">
                {initials}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-mocha">
              Image
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
        </div>
      )}
    </div>
  );
}

export function FullBleedImage({
  src,
  alt,
  height = "h-[50vh]",
  overlay = true,
  overlayClass = "bg-espresso/50",
  children,
  className,
}: {
  src: string | null;
  alt: string;
  height?: string;
  overlay?: boolean;
  overlayClass?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", height, className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-mocha/40 via-espresso-soft/30 to-gold/10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--pattern-gold-line) 1px, transparent 1px), linear-gradient(90deg, var(--pattern-gold-line) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      )}
      {overlay && <div className={cn("absolute inset-0", overlayClass)} />}
      {children && (
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          {children}
        </div>
      )}
    </div>
  );
}
