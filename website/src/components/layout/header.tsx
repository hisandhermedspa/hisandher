"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollHeader } from "@/lib/use-animate-on-scroll";
import { navigation, business } from "@/data";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useScrollHeader();

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] header-transparent group/header"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 py-5 [[data-scrolled=true]_&]:py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-light tracking-tight transition-colors duration-500 text-cream [[data-scrolled=true]_&]:text-espresso md:text-2xl">
            His <span className="italic text-gold-light [[data-scrolled=true]_&]:text-gold">&</span> Her
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 text-sand/60 [[data-scrolled=true]_&]:text-taupe">
            Beauty Bar & Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 text-cream/80 hover:text-cream [[data-scrolled=true]_&]:text-mocha [[data-scrolled=true]_&]:hover:text-espresso after:absolute after:inset-x-4 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 text-sm transition-colors duration-300 text-cream/70 hover:text-cream [[data-scrolled=true]_&]:text-mocha [[data-scrolled=true]_&]:hover:text-espresso"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <LinkButton href="/contact" variant="gold" size="sm" rounded="full" className="shimmer-hover">
            Book Now
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 transition-colors duration-300 text-cream [[data-scrolled=true]_&]:text-espresso"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-6 py-4 bg-cream/95 backdrop-blur-xl border-t border-sand/20">
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
          <div className="pt-4 pb-2">
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
