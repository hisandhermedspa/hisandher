import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { business, hours, reviewsSummary } from "@/data";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: `${business.name} | ${business.address.city}, Durham Region`,
    template: `%s | ${business.name}`,
  },
  description: `${business.tagline} Med spa & aesthetics academy in ${business.address.city}, ON — serving the ${business.serviceArea}.`,
  keywords: [
    "med spa Whitby",
    "medical spa Durham Region",
    "botox Whitby",
    "dermal fillers Durham",
    "microneedling Whitby",
    "beauty academy Durham Region",
    "aesthetics training GTA",
    "PRP therapy Whitby",
    "body contouring Durham",
    "medical esthetician Whitby",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: business.name,
  },
};

// Local-SEO structured data — one node per location, both sharing the
// same hours. (Self-serving aggregate ratings aren't shown by Google for
// LocalBusiness, so the rating lives only in the on-page testimonials.)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": business.locations.map((loc) => ({
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#${loc.name.toLowerCase()}`,
    name: `${business.name} — ${loc.name}`,
    description: business.positioning,
    url: siteUrl,
    image: `${siteUrl}/images/contact-side.jpg`,
    telephone: loc.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.province,
      postalCode: loc.postalCode,
      addressCountry: "CA",
    },
    areaServed: business.serviceArea,
    priceRange: "$$",
    sameAs: [business.bookingUrl, reviewsSummary.url, loc.instagram, loc.facebook].filter(
      Boolean
    ),
    // Both locations keep the same hours.
    openingHoursSpecification: hours.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.day,
      opens: `${String(day.openHour).padStart(2, "0")}:00`,
      closes: `${String(day.closeHour).padStart(2, "0")}:00`,
    })),
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
