"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, business } from "@/data";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-sand/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "bg-cream/90 backdrop-blur-2xl",
        scrolled && "shadow-sm shadow-espresso/5"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
          scrolled ? "py-3" : "py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-light tracking-tight text-espresso md:text-2xl">
            His <span className="italic text-gold">&</span> Her
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
            Beauty Bar & Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm tracking-wide text-mocha transition-colors duration-300 hover:text-espresso after:absolute after:inset-x-4 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-mocha transition-colors duration-300 hover:text-espresso"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <LinkButton
            href="/contact"
            variant="gold"
            size="sm"
            rounded="full"
            className="shimmer-hover"
          >
            Book Now
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 text-espresso lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 border-t border-sand/20 bg-cream px-6 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-sm px-4 py-3 text-sm font-medium tracking-wide text-mocha transition-colors hover:bg-gold/5 hover:text-espresso"
            >
              {item.label}
            </Link>
          ))}
          <div className="pb-2 pt-4">
            <LinkButton
              href="/contact"
              variant="gold"
              size="lg"
              className="w-full shimmer-hover"
              onClick={() => setMobileOpen(false)}
            >
              Book a Free Consultation
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
