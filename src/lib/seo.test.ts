import { afterEach, describe, expect, it, vi } from "vitest";
import { articles } from "../content/articles";
import { baseOpenGraph, isIndexableEnvironment, shouldLoadAdSense, toIsoDateTime } from "./seo";
import robots from "../app/robots";
import sitemap from "../app/sitemap";

afterEach(() => vi.unstubAllEnvs());

describe("indexing by environment", () => {
  it("indexes production and local builds, but not Vercel previews or development", () => {
    expect(isIndexableEnvironment("production")).toBe(true);
    expect(isIndexableEnvironment(undefined)).toBe(true);
    expect(isIndexableEnvironment("preview")).toBe(false);
    expect(isIndexableEnvironment("development")).toBe(false);
  });

  it("serves a crawlable robots.txt with a sitemap in production", () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const result = robots();
    expect(result.rules).toContainEqual(expect.objectContaining({ userAgent: "*", allow: "/" }));
    expect(result.sitemap).toMatch(/\/sitemap\.xml$/);
    // Never block assets or pages needed for rendering.
    expect(JSON.stringify(result.rules)).not.toContain("_next");
  });

  it("explicitly allows AI search and assistant crawlers, still excluding the API", () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const rules = robots().rules as { userAgent: string | string[]; allow?: string; disallow?: string }[];
    const ai = rules.find((rule) => Array.isArray(rule.userAgent));
    expect(ai?.userAgent).toEqual(expect.arrayContaining(["OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"]));
    expect(ai).toMatchObject({ allow: "/", disallow: "/api/" });
  });

  it("blocks all crawling on preview deployments", () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });
});

describe("shared SEO helpers", () => {
  it("keeps the site name and locale in Open Graph defaults", () => {
    expect(baseOpenGraph.siteName).toBe("Huzaifa Sajjad");
    expect(baseOpenGraph.locale).toBe("en_US");
  });

  it("adds a timezone to date-only values and leaves full timestamps alone", () => {
    expect(toIsoDateTime("2026-11-24")).toBe("2026-11-24T00:00:00+05:00");
    expect(toIsoDateTime("2026-11-24T09:30:00Z")).toBe("2026-11-24T09:30:00Z");
    expect(Number.isNaN(Date.parse(toIsoDateTime("2026-11-24")))).toBe(false);
  });
});

describe("sitemap", () => {
  const entries = sitemap();

  it("lists every article once with its real update date", () => {
    for (const article of articles) {
      const matches = entries.filter((entry) => entry.url.endsWith(`/articles/${article.slug}`));
      expect(matches, article.slug).toHaveLength(1);
      expect(new Date(matches[0].lastModified as Date).toISOString().slice(0, 10)).toBe(article.updatedAt);
    }
  });

  it("dates the articles index by the newest article", () => {
    const newest = articles.map((article) => article.updatedAt).sort().at(-1);
    const index = entries.find((entry) => entry.url.endsWith("/articles"));
    expect(new Date(index?.lastModified as Date).toISOString().slice(0, 10)).toBe(newest);
  });

  it("has no duplicate URLs", () => {
    const urls = entries.map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("AdSense script gating", () => {
  it("stays off unless explicitly enabled", () => {
    expect(shouldLoadAdSense(undefined, "production")).toBe(false);
    expect(shouldLoadAdSense("false", "production")).toBe(false);
    expect(shouldLoadAdSense("", "production")).toBe(false);
  });

  it("loads only when enabled on production or a local production build", () => {
    expect(shouldLoadAdSense("true", "production")).toBe(true);
    expect(shouldLoadAdSense(" true ", undefined)).toBe(true);
    expect(shouldLoadAdSense("true", "preview")).toBe(false);
  });
});
