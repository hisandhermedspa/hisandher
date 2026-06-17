import Link from "next/link";
import { Phone, MapPin, CalendarCheck } from "lucide-react";
import { business, navigation, hours } from "@/data";
import { legalDocs } from "@/data/legal";

// Lucide dropped its brand glyphs, so these are inline.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

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
                Med Spa + Academy
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
              Locations
            </h3>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 flex items-center gap-3 text-sm font-medium text-gold-light transition-colors hover:text-cream"
            >
              <CalendarCheck className="h-4 w-4 shrink-0 text-gold-light" />
              Book on Fresha
            </a>
            <ul className="space-y-5">
              {business.locations.map((loc) => (
                <li key={loc.name}>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/80">
                    {loc.name}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-start gap-3 text-sm text-sand/60 transition-colors hover:text-cream"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                    <span>
                      {loc.street}
                      <br />
                      {loc.city}, {loc.province}
                    </span>
                  </a>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="mt-2 flex items-center gap-3 text-sm text-sand/60 transition-colors hover:text-cream"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-light" />
                    {loc.phone}
                  </a>
                  {(loc.instagram || loc.facebook) && (
                    <div className="mt-3 flex gap-3">
                      {loc.instagram && (
                        <a
                          href={loc.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${loc.name} on Instagram`}
                          className="text-gold-light transition-colors hover:text-cream"
                        >
                          <InstagramIcon className="h-4 w-4" />
                        </a>
                      )}
                      {loc.facebook && (
                        <a
                          href={loc.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${loc.name} on Facebook`}
                          className="text-gold-light transition-colors hover:text-cream"
                        >
                          <FacebookIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-sand/10 py-8 text-xs text-sand/40 md:flex-row md:justify-between">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/${doc.slug}`}
                className="transition-colors hover:text-cream"
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
