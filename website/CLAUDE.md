# His & Her Med Spa + Academy — Website

> Single source of truth for all engineering conventions and content architecture.

## Project Overview

Medical spa and aesthetics academy website for His & Her Med Spa + Academy (formerly His & Her Beauty Bar), located in Whitby, Ontario. Serves the GTA and Durham Region. Bookings are handled exclusively on Fresha — every booking CTA links to `business.bookingUrl`; the site itself never takes bookings. Hours and the service menu mirror the Fresha listing (prices intentionally omitted — they live on Fresha).

**Stack:** Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS 4 · Vercel  
**Architecture:** Static site with typed data layer — no database, no CMS.

## Directory Structure

```
website/
├── src/
│   ├── app/              # Next.js App Router pages and API routes
│   │   ├── layout.tsx    # Root layout (fonts, header, footer, metadata)
│   │   ├── page.tsx      # Homepage
│   │   ├── services/     # /services page
│   │   ├── team/         # /team page
│   │   ├── academy/      # /academy page
│   │   ├── contact/      # /contact page + ContactForm client component
│   │   └── api/contact/  # Contact form API route (POST)
│   ├── components/
│   │   ├── ui/           # Primitives: Button, Section, SectionHeader, Card
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Page sections: Hero, ServicesPreview, etc.
│   ├── data/             # ⭐ CONTENT SOURCE OF TRUTH — all business content
│   │   ├── index.ts      # Barrel export
│   │   ├── business.ts   # Name, phone, address, CTA
│   │   ├── services.ts   # All services with categories
│   │   ├── team.ts       # Team members
│   │   ├── hours.ts      # Operating hours + isOpenNow()
│   │   ├── academy.ts    # Courses and academy info
│   │   └── navigation.ts # Nav items
│   └── lib/
│       └── utils.ts      # cn() utility (clsx + tailwind-merge)
```

## Content Model — The Data Layer

**All site content lives in `src/data/`.** Components never hardcode business content.

To add a new service: add an object to the `services` array in `src/data/services.ts`.  
To add a team member: add an object to the `team` array in `src/data/team.ts`.  
To add a course: add an object to `academy.courses` in `src/data/academy.ts`.  

Every data file exports TypeScript types. Components consume typed data — no `any`, no untyped props.

### Canonical Types

- `Service` — slug, name, category, tagline, description, startingPrice, duration, featured
- `ServiceCategory` — "injectables" | "skin" | "body" | "facials" | "laser" | "wellness"
- `TeamMember` — name, title, credentials, languages, bio, image
- `DayHours` — day, hours, open
- `Course` — slug, name, description, icon
- `NavItem` — label, href

## Design System

**Brand palette** (defined in `globals.css` @theme):
- cream (#FAF7F2) — primary background
- espresso (#1A110A) — primary text, dark sections
- gold (#B8926A) — accent, CTAs, highlights
- rose (#C4A18E) — secondary warm accent
- taupe (#8A7A6E) — body text
- sand (#C4B5A5) — muted text, borders

**Typography:**
- Serif: Playfair Display (headings) — `font-serif`
- Sans: DM Sans (body) — `font-sans`

**Component patterns:**
- `<Section bg="cream|white|espresso|gold" padding="sm|md|lg|xl">` — page section wrapper
- `<SectionHeader eyebrow title description align dark />` — consistent section headers
- `<Button variant="primary|gold|outline|ghost|cream" size="sm|md|lg|xl" />` — buttons
- `<LinkButton href="..." />` — same variants, renders as Next.js Link
- `<Card hover />` — bordered card with hover effect

## Coding Conventions

### TypeScript

- `strict: true` with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns`
- No `any`, no `as unknown as`, no `@ts-ignore`
- No non-null assertions (`!`)
- Guard clauses over nested conditionals
- Prefer `??` over `||` for nullish coalescing

### Component Patterns

- Server Components by default. Only add `"use client"` when you need hooks/events.
- Import from `@/data` for content, `@/components/ui` for primitives, `@/lib/utils` for utilities.
- Pages export `metadata` for SEO. Every page has title and description.
- Sections are separate components in `components/sections/`.

### Styling

- Tailwind utility classes only. No CSS modules, no styled-components.
- Use `cn()` for conditional/merged classes.
- Animations defined in `globals.css` and applied via utility classes.
- Design: luxurious, editorial, generous whitespace, serif headlines with sans body text.

## SEO Strategy

Every page has:
- Unique `<title>` via Next.js `metadata` export
- `description` meta tag with location keywords (Whitby, Durham Region, GTA)
- Static generation (SSG) for all pages — pre-rendered HTML
- Semantic heading hierarchy (one `h1` per page)

Target keywords: med spa Whitby, botox Durham Region, medical esthetician Whitby, aesthetics academy GTA

## Deployment

- **Host:** Vercel
- **Build:** `next build` (static export, API routes as serverless functions)
- **Contact form:** `/api/contact` — Zod-validated, currently logs (TODO: wire email delivery)

## Adding Features (Common Tasks)

### Add a new service
1. Add object to `services` array in `src/data/services.ts`
2. It auto-appears on homepage (if `featured: true`) and services page

### Add a team member
1. Add object to `team` array in `src/data/team.ts`
2. Add photo to `public/team/`
3. Auto-appears on homepage and team page

### Add an academy course
1. Add object to `academy.courses` in `src/data/academy.ts`
2. Auto-appears on homepage academy section and academy page

### Add a new page
1. Create `src/app/[slug]/page.tsx`
2. Export `metadata` for SEO
3. Add to `navigation` array in `src/data/navigation.ts`
