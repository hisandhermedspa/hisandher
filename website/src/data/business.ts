// Bookings happen exclusively on Fresha — every "book" CTA points here.
const freshaBookingUrl =
  "https://www.fresha.com/a/his-her-med-spa-academy-whitby-216-brock-street-south-iwclfoa1";

export const business = {
  name: "His & Her Med Spa + Academy",
  shortName: "His & Her",
  // The brand line painted on the storefront windows.
  tagline: "Elevate Your Confidence. Enhance Your Natural Beauty.",
  positioning:
    "From IV therapy and injectables to advanced skin and body treatments — personalized aesthetic care that helps you look refreshed, confident, and radiant.",
  phone: "647-513-5749",
  phoneRaw: "6475135749",
  email: "hisandhermedspa@gmail.com",
  address: {
    street: "216 Brock St South",
    city: "Whitby",
    province: "ON",
    postalCode: "L1N 4K1",
    full: "216 Brock St South, Whitby, ON L1N 4K1",
  },
  serviceArea: "GTA & Durham Region",
  bookingUrl: freshaBookingUrl,
  primaryCta: {
    label: "Book an Appointment",
    href: freshaBookingUrl,
  },
} as const;

export type Business = typeof business;
