import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";
import { isIndexableEnvironment } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Preview and development deployments must never be crawled or indexed.
  if (!isIndexableEnvironment()) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl };
}
