"use client";

import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-scale" | "reveal-left" | "reveal-right" | "reveal-stagger";
  delay?: string;
}

export function Reveal({
  children,
  className,
  animation = "reveal",
  delay,
}: RevealProps) {
  const ref = useAnimateOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(animation, className)}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
