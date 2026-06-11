/**
 * Image registry — every image the site needs, in one place.
 *
 * When real photos arrive:
 * 1. Drop them in public/images/
 * 2. Update the `src` path here
 * 3. The entire site updates automatically
 *
 * Recommended dimensions noted for each slot.
 */

export interface ImageSlot {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  placeholder: "gradient" | "initials";
}

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Spa still life — cream towels, orchid, and warm golden light",
    width: 1448,
    height: 1086,
    placeholder: "gradient" as const,
  },

  about: {
    src: null,
    alt: "Styled arrangement of spa towels, serums, and botanicals",
    width: 1200,
    height: 800,
    placeholder: "gradient" as const,
  },

  serviceBreak: {
    src: "/images/service-break.jpg",
    alt: "Medical aesthetics still life — serum vials, syringe, and gold tray",
    width: 1536,
    height: 1024,
    placeholder: "gradient" as const,
  },

  academyBreak: {
    src: "/images/academy-break.jpg",
    alt: "Hands-on injection training on a practice pad at His & Her Academy",
    width: 1536,
    height: 1024,
    placeholder: "gradient" as const,
  },

  academyTraining: {
    src: "/images/academy-training.jpg",
    alt: "Student taking notes beside clinical training instruments",
    width: 1536,
    height: 1024,
    placeholder: "gradient" as const,
  },

  contactSide: {
    src: "/images/contact-side.jpg",
    alt: "Storefront of His & Her Med Spa on Brock Street South, Whitby",
    width: 1086,
    height: 1448,
    placeholder: "gradient" as const,
  },

  services: {
    botox: {
      src: "/images/services/botox.jpg",
      alt: "Botox cosmetic treatment close-up",
      width: 600,
      height: 400,
    },
    "dermal-fillers": {
      src: "/images/services/dermal-fillers.jpg",
      alt: "Dermal filler lip treatment close-up",
      width: 600,
      height: 400,
    },
    "prp-therapy": {
      src: "/images/services/prp-therapy.jpg",
      alt: "Golden platelet-rich plasma vials prepared for PRP therapy",
      width: 600,
      height: 400,
    },
    "iv-vitamin-therapy": {
      src: "/images/services/iv-vitamin-therapy.jpg",
      alt: "IV vitamin therapy drip close-up",
      width: 600,
      height: 400,
    },
    hydrafacial: {
      src: "/images/services/hydrafacial.jpg",
      alt: "HydraFacial skin treatment close-up",
      width: 600,
      height: 400,
    },
    "body-contouring": {
      src: "/images/services/body-contouring.jpg",
      alt: "Non-invasive body contouring treatment close-up",
      width: 600,
      height: 400,
    },
    microneedling: {
      src: "/images/services/microneedling.jpg",
      alt: "Microneedling pen device with serums",
      width: 600,
      height: 400,
    },
    facials: {
      src: "/images/services/facials.jpg",
      alt: "Medical-grade facial treatment close-up",
      width: 600,
      height: 400,
    },
    "skin-treatments": {
      src: "/images/services/skin-treatments.jpg",
      alt: "Advanced skin treatment serum application close-up",
      width: 600,
      height: 400,
    },
    "chemical-peels": {
      src: "/images/services/chemical-peels.jpg",
      alt: "Chemical peel application close-up",
      width: 600,
      height: 400,
    },
    "hair-restoration": {
      src: "/images/services/hair-restoration.jpg",
      alt: "Scalp examination for men's hair restoration",
      width: 600,
      height: 400,
    },
    massage: {
      src: "/images/services/massage.jpg",
      alt: "Therapeutic back massage at His & Her Med Spa",
      width: 600,
      height: 400,
    },
    waxing: {
      src: "/images/services/waxing.jpg",
      alt: "Professional waxing treatment close-up",
      width: 600,
      height: 400,
    },
    "laser-hair-removal": {
      src: "/images/services/laser-hair-removal.jpg",
      alt: "Laser hair removal along a man's jawline",
      width: 600,
      height: 400,
    },
  },

  // No team portraits — the practitioners asked not to appear on the
  // site (privacy / conflict of interest). Team sections are photo-free.
} as const;

/**
 * Image slots checklist (for client handoff):
 *
 * HERO & AMBIANCE
 * Rule: NO interiors/venue shots — AI images must not depict "our store"
 * (we have no real interior photos; fake ones would mislead visitors).
 * Only styled still lifes and tight treatment close-ups.
 * - hero: Full-width hero background (1920×1080) — dark still life, subject right, text-safe left
 * - about: Styled spa flat-lay/still life (1200×800)
 * - serviceBreak: Full-width divider (1920×600) — still-life band, subject centered vertically
 * - academyBreak: Full-width divider (1920×600) — tight training close-up, no room visible
 * - contactSide: REAL storefront photo (800×1000 portrait)
 *
 * SERVICES (600×400 each — keys must match the service slugs)
 * - all 14 services covered
 *
 * TEAM — intentionally none (privacy request from the practitioners)
 */
