import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { business } from "@/data";
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
  title: {
    default: `${business.shortName} Beauty Bar & Academy | ${business.address.city} Med Spa`,
    template: `%s | ${business.shortName} Beauty Bar & Academy`,
  },
  description: `${business.positioning} Located in ${business.address.city}, serving the ${business.serviceArea}. ${business.tagline}.`,
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
    title: `${business.shortName} Beauty Bar & Academy | ${business.tagline}`,
    description: business.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
