import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";
import { isIndexableEnvironment } from "@/lib/seo";

/**
 * AI search and assistant crawlers are named explicitly so the intent is clear: they may read the
 * public site, so the pages can be found and cited in AI answers. Each group must repeat the
 * /api/ rule, because a crawler follows only the most specific group that matches it.
 * Training-only crawlers (GPTBot, Google-Extended, Applebot-Extended) are allowed too; move them
 * to a `disallow: "/"` group here if you ever decide to opt out of model training.
 */
export const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  // Preview and development deployments must never be crawled or indexed.
  if (!isIndexableEnvironment()) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
