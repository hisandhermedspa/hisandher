import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { legalDocs } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/team", "/academy", "/contact"];
  const legal = legalDocs.map((doc) => `/${doc.slug}`);

  return [...pages, ...legal].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : legal.includes(route) ? 0.3 : 0.8,
  }));
}
