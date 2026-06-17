// Bookings happen exclusively on Fresha — every "book" CTA points here.
const freshaBookingUrl =
  "https://www.fresha.com/a/his-her-med-spa-academy-whitby-216-brock-street-south-iwclfoa1";

export interface Location {
  name: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  full: string;
  phone: string;
  phoneRaw: string;
  instagram?: string;
  facebook?: string;
}

// Whitby is the primary (booking) location.
const whitby: Location = {
  name: "Whitby",
  street: "216 Brock St South",
  city: "Whitby",
  province: "ON",
  postalCode: "L1N 4K1",
  full: "216 Brock St South, Whitby, ON L1N 4K1",
  phone: "647-222-3605",
  phoneRaw: "6472223605",
  instagram: "https://www.instagram.com/hisandhermedspa",
  facebook: "https://www.facebook.com/share/1E3qYKC3KA/",
};

const mississauga: Location = {
  name: "Mississauga",
  street: "3045 Hurontario St",
  city: "Mississauga",
  province: "ON",
  postalCode: "L5A 2G9",
  full: "3045 Hurontario St, Mississauga, ON L5A 2G9",
  phone: "647-513-5749",
  phoneRaw: "6475135749",
  instagram: "https://www.instagram.com/bossbeautybaracademy",
  facebook: "https://www.facebook.com/share/1GpRa2bL5y/",
};

// Two GTA locations. Whitby is listed first (primary).
export const locations: Location[] = [whitby, mississauga];

const primary = whitby;

export const business = {
  name: "His & Her Med Spa + Academy",
  shortName: "His & Her",
  // The brand line painted on the storefront windows.
  tagline: "Elevate Your Confidence. Enhance Your Natural Beauty.",
  positioning:
    "From IV therapy and injectables to advanced skin and body treatments — personalized aesthetic care that helps you look refreshed, confident, and radiant.",
  // Primary location (Whitby), kept flat for convenience + structured data.
  phone: primary.phone,
  phoneRaw: primary.phoneRaw,
  email: "hisandhermedspa@gmail.com",
  address: {
    street: primary.street,
    city: primary.city,
    province: primary.province,
    postalCode: primary.postalCode,
    full: primary.full,
  },
  locations,
  serviceArea: "Greater Toronto Area",
  bookingUrl: freshaBookingUrl,
  primaryCta: {
    label: "Book an Appointment",
    href: freshaBookingUrl,
  },
} as const;

export type Business = typeof business;
