import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { business, hours } from "@/data";
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

// Local-SEO structured data — mirrors the live business facts
// (address, hours, Fresha booking page).
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  description: business.positioning,
  url: siteUrl,
  image: `${siteUrl}/images/contact-side.jpg`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.province,
    postalCode: business.address.postalCode,
    addressCountry: "CA",
  },
  areaServed: business.serviceArea,
  priceRange: "$$",
  sameAs: [business.bookingUrl],
  openingHoursSpecification: hours.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day.day,
    opens: `${String(day.openHour).padStart(2, "0")}:00`,
    closes: `${String(day.closeHour).padStart(2, "0")}:00`,
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
