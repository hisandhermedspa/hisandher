import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-sm border border-sand/30 bg-white p-6 md:p-8",
        hover &&
          "transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso/5 hover:border-gold/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-sm border border-white/30 p-6 md:p-8 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
