"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, business } from "@/data";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass border-b border-sand/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-light tracking-tight text-espresso md:text-2xl">
            His <span className="italic text-gold">&</span> Her
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
            Beauty Bar & Academy
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm tracking-wide text-mocha transition-colors hover:text-espresso after:absolute after:inset-x-4 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-mocha transition-colors hover:text-espresso"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <LinkButton href="/contact" variant="gold" size="sm" rounded="full">
            Book Now
          </LinkButton>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-espresso"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-sand/20",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-6 py-4 bg-cream">
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
              className="w-full"
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
