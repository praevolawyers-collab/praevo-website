import type { MetadataRoute } from "next";
import { firm, areas } from "@/content/site";
import { articles, topics } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/expertise", "/clients-from-india", "/our-people", "/fees", "/book", "/contact", "/collaborate", "/insights", "/legal/privacy", "/legal/disclaimer", "/legal/costs", "/legal/terms"];
  return [...pages, ...areas.map((a) => `/expertise/${a.slug}`), ...articles.map((a) => `/insights/${a.slug}`), ...topics.map((t) => `/insights/topic/${t.slug}`)].map((p) => ({ url: `${firm.url}${p}`, lastModified: new Date() }));
}
