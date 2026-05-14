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
    src: null,
    alt: "His & Her Beauty Bar — luxury med spa interior",
    width: 1920,
    height: 1080,
    placeholder: "gradient" as const,
  },

  about: {
    src: null,
    alt: "Welcoming reception area at His & Her Beauty Bar",
    width: 1200,
    height: 800,
    placeholder: "gradient" as const,
  },

  serviceBreak: {
    src: null,
    alt: "Treatment room at His & Her Beauty Bar",
    width: 1920,
    height: 600,
    placeholder: "gradient" as const,
  },

  academyBreak: {
    src: null,
    alt: "Hands-on training at His & Her Academy",
    width: 1920,
    height: 600,
    placeholder: "gradient" as const,
  },

  contactSide: {
    src: null,
    alt: "Interior of His & Her Beauty Bar",
    width: 800,
    height: 1000,
    placeholder: "gradient" as const,
  },

  services: {
    botox: {
      src: null,
      alt: "Botox treatment at His & Her Beauty Bar",
      width: 600,
      height: 400,
    },
    "dermal-fillers": {
      src: null,
      alt: "Dermal filler treatment",
      width: 600,
      height: 400,
    },
    "prp-therapy": {
      src: null,
      alt: "PRP therapy session",
      width: 600,
      height: 400,
    },
    microneedling: {
      src: null,
      alt: "Microneedling treatment",
      width: 600,
      height: 400,
    },
    facials: {
      src: null,
      alt: "Medical-grade facial treatment",
      width: 600,
      height: 400,
    },
    "body-contouring": {
      src: null,
      alt: "Body contouring session",
      width: 600,
      height: 400,
    },
  },

  team: {
    mariyam: {
      src: null,
      alt: "Mariyam Rasoli — Owner, His & Her Beauty Bar",
      width: 600,
      height: 800,
    },
    christina: {
      src: null,
      alt: "Christina Payatakis — Owner, His & Her Beauty Bar",
      width: 600,
      height: 800,
    },
  },
} as const;

/**
 * Image slots checklist (for client handoff):
 *
 * HERO & AMBIANCE
 * - hero: Full-width hero background (1920×1080) — spa interior, treatment detail, or lifestyle
 * - about: Spa reception/interior (1200×800)
 * - serviceBreak: Full-width divider (1920×600) — treatment close-up or spa detail
 * - academyBreak: Full-width divider (1920×600) — training/education scene
 * - contactSide: Vertical interior shot (800×1000)
 *
 * SERVICES (600×400 each)
 * - botox, dermal-fillers, prp-therapy, microneedling, facials, body-contouring
 *
 * TEAM (600×800 each, portrait orientation)
 * - mariyam, christina
 *
 * Total: 13 images needed
 */
