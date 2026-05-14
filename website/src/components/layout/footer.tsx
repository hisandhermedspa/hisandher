import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { business, navigation, hours } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-sand/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex flex-col">
              <span className="font-serif text-2xl font-light text-cream">
                His <span className="italic text-gold-light">&</span> Her
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-sand/60">
                Beauty Bar & Academy
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sand/60">
              {business.positioning}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-sand/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              Hours
            </h3>
            <ul className="space-y-2">
              {hours.map((day) => (
                <li
                  key={day.day}
                  className="flex justify-between text-sm text-sand/60"
                >
                  <span>{day.day.slice(0, 3)}</span>
                  <span>{day.open ? day.hours.replace(" AM", "a").replace(" PM", "p").replace(" – ", "–") : "Closed"}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-3 text-sm text-sand/60 transition-colors hover:text-cream"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-sand/60 transition-colors hover:text-cream"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                  <span>
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.province}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-sand/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span>Mon–Fri 10–8 · Sat 11–6 · Sun 11–4</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10 py-8 text-center text-xs text-sand/40">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
