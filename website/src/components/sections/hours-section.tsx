"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { business, hours, isOpenNow } from "@/data";

export function HoursSection() {
  const status = isOpenNow();

  return (
    <Section bg="gold" padding="lg">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Hours */}
        <div>
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl font-light text-espresso md:text-4xl">
            Hours & Location
          </h2>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/50 px-4 py-1.5">
            <span
              className={`h-2 w-2 rounded-full ${status.open ? "bg-green-600" : "bg-red-500"}`}
            />
            <span className="text-xs font-medium text-espresso">
              {status.message}
            </span>
          </div>

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

        {/* Right: Contact card */}
        <div className="flex flex-col justify-center">
          <div className="rounded-sm bg-white p-8 shadow-xl shadow-espresso/5 md:p-10">
            <h3 className="font-serif text-2xl font-light text-espresso">
              Get in Touch
            </h3>
            <p className="mt-2 text-sm text-taupe">
              Ready to book your consultation? We&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href={`tel:${business.phoneRaw}`}
                className="group flex items-start gap-4 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
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

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-taupe">
                    Book Via
                  </p>
                  <p className="mt-1 font-serif text-lg text-espresso">
                    Fresha · Text · Call
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
