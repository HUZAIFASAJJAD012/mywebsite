import { describe, expect, it } from "vitest";
import { articleReadingMinutes, articleText, articles, getArticle } from "./articles";
import { gigs } from "./gigs";
import { projects } from "./projects";

describe("articles", () => {
  it("uses unique, URL-safe slugs", () => {
    const slugs = articles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("keeps search titles and descriptions within snippet-friendly lengths", () => {
    for (const article of articles) {
      expect(article.seoTitle.length).toBeLessThanOrEqual(65);
      expect(article.description.length).toBeGreaterThanOrEqual(70);
      expect(article.description.length).toBeLessThanOrEqual(165);
    }
  });

  it("has unique section anchors, valid dates and existing related services", () => {
    for (const article of articles) {
      const ids = article.sections.map((section) => section.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(ids).not.toContain("faq");
      expect(Number.isNaN(Date.parse(article.publishedAt))).toBe(false);
      expect(article.updatedAt >= article.publishedAt).toBe(true);
      for (const slug of article.relatedServiceSlugs) expect(gigs.some((gig) => gig.slug === slug)).toBe(true);
      expect(articleReadingMinutes(article)).toBeGreaterThan(0);
    }
  });

  it("links only to pages that exist on the site", () => {
    const routes = new Set([
      "/", "/about", "/contact", "/projects", "/services", "/articles", "/privacy",
      ...gigs.map((gig) => `/services/${gig.slug}`),
      ...projects.map((project) => `/projects/${project.slug}`),
      ...articles.map((article) => `/articles/${article.slug}`),
    ]);
    for (const article of articles) {
      for (const [, href] of articleText(article).matchAll(/\]\((\/[^)#?]*)/g)) expect(routes, `${article.slug} links to ${href}`).toContain(href);
    }
  });

  it("finds articles by slug", () => {
    expect(getArticle("claude-ai-for-web-development")?.title).toMatch(/Claude AI/);
    expect(getArticle("missing")).toBeUndefined();
  });
});
