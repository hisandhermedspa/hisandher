import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-espresso text-cream hover:bg-espresso-soft shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        gold: "bg-gold text-white hover:bg-gold-light hover:text-espresso shadow-lg hover:shadow-xl hover:-translate-y-0.5 shimmer-hover",
        outline:
          "border-2 border-espresso/20 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
        "outline-light":
          "border-2 border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-espresso",
        ghost:
          "text-espresso hover:bg-espresso/5",
        cream:
          "bg-cream text-espresso hover:bg-cream-dark",
      },
      size: {
        sm: "h-9 px-4 text-xs uppercase tracking-widest",
        md: "h-11 px-6 text-sm uppercase tracking-widest",
        lg: "h-14 px-10 text-sm uppercase tracking-widest",
        xl: "h-16 px-12 text-base uppercase tracking-widest",
      },
      rounded: {
        default: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  className,
  variant,
  size,
  rounded,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant,
  size,
  rounded,
  href,
  children,
  onClick,
}: LinkButtonProps) {
  const extra: { onClick?: () => void } = {};
  if (onClick) {
    extra.onClick = onClick;
  }

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...extra}
    >
      {children}
    </Link>
  );
}

export { buttonVariants };
