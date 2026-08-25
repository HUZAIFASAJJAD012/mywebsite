import { describe, expect, it } from "vitest";
import { gigs } from "./gigs";

describe("gig content", () => {
  it("provides unique, indexable service records with valid pricing labels", () => {
    expect(new Set(gigs.map(({ slug }) => slug)).size).toBe(gigs.length);
    for (const gig of gigs) {
      if (gig.startingPrice !== undefined) expect(gig.startingPrice).toBeGreaterThan(0);
      else expect(gig.priceLabel).toBe("Custom quote");
      expect(gig.searchTitle.length).toBeGreaterThan(20);
      expect(gig.searchDescription.length).toBeGreaterThan(80);
      expect(gig.searchTerms.length).toBeGreaterThanOrEqual(3);
      expect(gig.deliverables.length).toBeGreaterThanOrEqual(4);
      expect(gig.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("contains the core commercial service architecture with valid internal references", () => {
    const slugs = new Set(gigs.map(({ slug }) => slug));
    for (const slug of ["full-stack-development", "web-development", "small-business-websites", "nextjs-development", "backend-api-development", "mobile-app-development", "ecommerce-development", "ai-automation", "mvp-development"]) {
      expect(slugs.has(slug)).toBe(true);
    }
    for (const gig of gigs) {
      for (const relatedSlug of gig.relatedSlugs ?? []) expect(slugs.has(relatedSlug)).toBe(true);
    }
  });
});
