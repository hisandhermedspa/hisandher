/**
 * Canonical site URL — single source of truth for metadata, sitemap,
 * robots, and structured data.
 *
 * Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL — set this to the custom domain once decided
 * 2. URL — provided automatically by Netlify at build time
 * 3. localhost fallback for local dev
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000";
