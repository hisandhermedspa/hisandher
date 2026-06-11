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
  },

  team: {
    mariyam: {
      src: null,
      alt: "Mariyam Rasoli — Owner, His & Her Med Spa",
      width: 600,
      height: 800,
    },
    christina: {
      src: null,
      alt: "Christina Payatakis — Medical Esthetician, His & Her Med Spa",
      width: 600,
      height: 800,
    },
  },
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
 * SERVICES (600×400 each — must match the FEATURED service slugs)
 * - botox, dermal-fillers, iv-vitamin-therapy, prp-therapy, hydrafacial, body-contouring
 *
 * TEAM (600×800 each, portrait orientation)
 * - mariyam, christina
 *
 * Total: 13 images needed
 */
