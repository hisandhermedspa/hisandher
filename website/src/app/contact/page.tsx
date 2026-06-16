import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail, CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { ImageSlot } from "@/components/ui/image-slot";
import { business, hours } from "@/data";
import { images } from "@/data/images";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Book online via Fresha, or send His & Her Med Spa + Academy in Whitby a message about treatments or academy enrollment — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso-soft to-espresso" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Get in Touch
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            We&apos;d Love to{" "}
            <span className="italic text-gold-light">Hear From You</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/60 md:text-lg">
            Bookings are handled online through Fresha. For questions about
            treatments or academy enrollment, send us a message — we respond
            to every one.
          </p>
          <div className="mt-8">
            <LinkButton
              href={business.bookingUrl}
              variant="gold"
              size="lg"
              rounded="full"
            >
              Book on Fresha
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <Section bg="white" padding="lg">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl font-light text-espresso">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-taupe">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <ImageSlot
              src={images.contactSide.src}
              alt={images.contactSide.alt}
              width={images.contactSide.width}
              height={images.contactSide.height}
              className="rounded-sm"
            />
            <div className="mt-8 rounded-sm bg-cream p-8 md:p-10">
              <h3 className="font-serif text-xl font-light text-espresso">
                Other Ways to Reach Us
              </h3>

              <div className="mt-8 space-y-8">
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
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

                <a
                  href={`tel:${business.phoneRaw}`}
                  className="group flex items-start gap-4"
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
                  href={`mailto:${business.email}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-taupe">
                      Email
                    </p>
                    <p className="mt-1 font-serif text-lg text-espresso">
                      {business.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
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
                      Hours
                    </p>
                    <div className="mt-2 space-y-1">
                      {hours.map((day) => (
                        <div
                          key={day.day}
                          className="flex justify-between gap-4 text-sm text-mocha"
                        >
                          <span>{day.day.slice(0, 3)}</span>
                          <span className="text-taupe">
                            {day.open ? day.hours : "Closed"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
