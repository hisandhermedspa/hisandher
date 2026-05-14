import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "cream" | "white" | "espresso" | "gold";
  padding?: "sm" | "md" | "lg" | "xl";
}

const bgClasses = {
  cream: "bg-cream",
  white: "bg-white",
  espresso: "bg-espresso text-cream",
  gold: "bg-gradient-to-br from-gold/10 via-cream to-rose-light/20",
};

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
};

export function Section({
  children,
  className,
  id,
  bg = "cream",
  padding = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(bgClasses[bg], paddingClasses[padding], "relative", className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        "mb-12 md:mb-16"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em]",
            dark ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl",
          dark ? "text-cream" : "text-espresso"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-sand" : "text-taupe"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
