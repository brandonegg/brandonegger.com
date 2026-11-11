import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add new routes here as pages are created.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
