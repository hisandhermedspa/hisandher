export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  startingPrice: string | null;
  duration: string | null;
  featured: boolean;
}

export type ServiceCategory =
  | "injectables"
  | "skin"
  | "body"
  | "facials"
  | "laser"
  | "wellness";

export const categoryLabels: Record<ServiceCategory, string> = {
  injectables: "Injectables",
  skin: "Skin Treatments",
  body: "Body",
  facials: "Facials",
  laser: "Laser Treatments",
  wellness: "Wellness & IV Therapy",
};

// Service menu mirrors the Fresha booking page. Prices intentionally
// omitted — they live on Fresha and change there.
export const services: Service[] = [
  {
    slug: "botox",
    name: "Botox",
    category: "injectables",
    tagline: "Smooth fine lines for a refreshed, youthful look",
    description:
      "Botox and Dysport injections precisely target dynamic wrinkles — forehead lines, crow's feet, and frown lines — to deliver a naturally smooth, refreshed appearance. Results typically appear within days and last three to four months.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "injectables",
    tagline: "Restore volume and enhance your natural contours",
    description:
      "Hyaluronic acid–based fillers restore lost volume and sculpt facial contours — lips, cheeks, jawline, and under-eyes — for balanced, natural-looking results that complement your unique features.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "iv-vitamin-therapy",
    name: "IV & Vitamin Therapy",
    category: "wellness",
    tagline: "Replenish and glow from the inside out",
    description:
      "From energizing vitamin injections to glutathione and customized IV drips, our wellness therapies replenish nutrients, support immunity, and restore your natural glow from within.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    category: "wellness",
    tagline: "Restore thicker, healthier-looking hair",
    description:
      "Targeted PRP and growth-factor treatments stimulate dormant follicles to encourage natural regrowth — a non-surgical approach to thinning hair for both men and women.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "massage",
    name: "Massage Therapy",
    category: "wellness",
    tagline: "Release tension, restore balance",
    description:
      "Therapeutic and relaxation massage tailored to your needs — easing muscle tension, improving circulation, and giving your body the reset it deserves.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "prp-therapy",
    name: "PRP Therapy",
    category: "skin",
    tagline: "Harness your body's own healing power",
    description:
      "Platelet-Rich Plasma therapy uses your own blood's growth factors to stimulate collagen production, improve skin texture, reduce scarring, and promote hair restoration — a fully natural rejuvenation approach.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    category: "skin",
    tagline: "Trigger your skin's natural renewal process",
    description:
      "Controlled micro-injuries stimulate your skin's collagen and elastin production, improving texture, minimizing pores, reducing acne scars, and evening out skin tone for a radiant complexion.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "skin-treatments",
    name: "Advanced Skin Treatments",
    category: "skin",
    tagline: "Target pigmentation, scarring, and signs of aging",
    description:
      "Customized clinical protocols for acne scars, pigmentation, uneven tone, skin brightening, and anti-aging — combining advanced modalities to reveal smoother, more even, glowing skin.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    category: "skin",
    tagline: "Resurface for renewed, even-toned skin",
    description:
      "Professional-grade chemical peels gently exfoliate damaged outer layers to soften fine lines, fade pigmentation and acne marks, and reveal fresher, brighter skin.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    category: "facials",
    tagline: "Cleanse, extract, and hydrate in one treatment",
    description:
      "The award-winning HydraFacial deep-cleans, gently exfoliates, and floods skin with hydrating serums — instant radiance with zero downtime.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "facials",
    name: "Medical-Grade Facials",
    category: "facials",
    tagline: "Deep cleansing meets clinical results",
    description:
      "Our medical-grade facials go beyond surface-level pampering. Customized to your skin type and concerns, each treatment combines clinical-strength products with expert technique for visible, lasting improvement.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    category: "body",
    tagline: "Sculpt and define without surgery",
    description:
      "Non-invasive treatments that target stubborn fat, tighten skin, and support your weight-loss and body-shaping goals — a more sculpted silhouette without downtime or surgery.",
    startingPrice: null,
    duration: null,
    featured: true,
  },
  {
    slug: "waxing",
    name: "Waxing",
    category: "body",
    tagline: "Smooth, professional hair removal",
    description:
      "Full-body waxing performed with professional-grade products and a gentle touch — clean, lasting results that keep skin calm and smooth.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "laser",
    tagline: "Smooth, lasting hair-free skin",
    description:
      "Advanced laser technology targets hair at the root for long-lasting smoothness on face and body — quick sessions with minimal discomfort, personalized to your skin and hair type.",
    startingPrice: null,
    duration: null,
    featured: false,
  },
];

export function getServicesByCategory(): Record<ServiceCategory, Service[]> {
  const grouped = {} as Record<ServiceCategory, Service[]>;
  for (const service of services) {
    if (!grouped[service.category]) {
      grouped[service.category] = [];
    }
    grouped[service.category].push(service);
  }
  return grouped;
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
