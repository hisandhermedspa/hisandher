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
  body: "Body Contouring",
  facials: "Facials",
  laser: "Laser Treatments",
  wellness: "Wellness",
};

export const services: Service[] = [
  {
    slug: "botox",
    name: "Botox",
    category: "injectables",
    tagline: "Smooth fine lines for a refreshed, youthful look",
    description:
      "Botox injections precisely target dynamic wrinkles — forehead lines, crow's feet, and frown lines — to deliver a naturally smooth, refreshed appearance. Results typically appear within days and last three to four months.",
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
    featured: true,
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    category: "body",
    tagline: "Sculpt and define without surgery",
    description:
      "Non-invasive body contouring treatments target stubborn fat deposits and tighten skin, helping you achieve a more sculpted silhouette without downtime or surgery.",
    startingPrice: null,
    duration: null,
    featured: true,
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
