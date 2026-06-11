"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { business, hours, isOpenNow } from "@/data";

export function HoursSection() {
  // Computed after mount so the badge reflects the visitor's "now",
  // not the moment the page was statically generated.
  const [status, setStatus] = useState<{ open: boolean; message: string } | null>(null);

  useEffect(() => {
    setStatus(isOpenNow());
  }, []);

  return (
    <Section bg="gold" padding="lg">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Hours */}
        <Reveal animation="reveal-left">
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Visit Us
            </span>
            <h2 className="font-serif text-3xl font-light text-espresso md:text-4xl">
              Hours & Location
            </h2>

            {status && (
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/50 px-4 py-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${status.open ? "bg-green-600" : "bg-red-500"}`}
                />
                <span className="text-xs font-medium text-espresso">
                  {status.message}
                </span>
              </div>
            )}

            <div className="mt-8 space-y-3">
              {hours.map((day) => (
                <div
                  key={day.day}
                  className="flex items-center justify-between border-b border-espresso/5 pb-3"
                >
                  <span className="text-sm font-medium text-espresso">
                    {day.day}
                  </span>
                  <span className="text-sm text-mocha">
                    {day.open ? day.hours : "Closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Contact card */}
        <Reveal animation="reveal-right">
          <div className="flex flex-col justify-center">
            <div className="rounded-sm bg-white p-8 shadow-xl shadow-espresso/5 md:p-10">
              <h3 className="font-serif text-2xl font-light text-espresso">
                Get in Touch
              </h3>
              <p className="mt-2 text-sm text-taupe">
                Bookings are online via Fresha. Questions? Call or text —
                we&apos;d love to hear from you.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="group flex items-start gap-4 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-taupe">
                      Call or Text
                    </p>
                    <p className="mt-1 font-serif text-lg text-espresso">
                      {business.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold/20">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-taupe">
                      Visit Us
                    </p>
                    <p className="mt-1 font-serif text-lg text-espresso">
                      {business.address.street}
                    </p>
                    <p className="text-sm text-taupe">
                      {business.address.city}, {business.address.province}
                    </p>
                  </div>
                </a>

                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold/20">
                    <CalendarCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-taupe">
                      Book Online
                    </p>
                    <p className="mt-1 font-serif text-lg text-espresso">
                      Fresha — instant confirmation
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
