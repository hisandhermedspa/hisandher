export const business = {
  name: "His & Her Beauty Bar And Academy",
  shortName: "His & Her",
  tagline: "Your #1 Durham Region Med Spa",
  positioning:
    "Advanced aesthetic treatments designed to help you look refreshed, confident, and radiant.",
  phone: "647-222-3605",
  phoneRaw: "6472223605",
  email: "info@hisandherbeautybar.ca",
  address: {
    street: "216 Brock St South",
    city: "Whitby",
    province: "ON",
    postalCode: "",
    full: "216 Brock St South, Whitby, ON",
  },
  serviceArea: "GTA & Durham Region",
  primaryCta: {
    label: "Book a Free Consultation",
    href: "/contact",
  },
  bookingMethods: ["Fresha", "Text or Call"],
} as const;

export type Business = typeof business;
