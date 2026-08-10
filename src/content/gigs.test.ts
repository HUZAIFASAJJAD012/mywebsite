import { describe, expect, it } from "vitest";
import { gigs } from "./gigs";

describe("gig content", () => {
  it("provides unique, indexable service records with approved starting prices", () => {
    expect(new Set(gigs.map(({ slug }) => slug)).size).toBe(gigs.length);
    for (const gig of gigs) {
      expect(gig.startingPrice).toBeGreaterThan(0);
      expect(gig.searchTitle.length).toBeGreaterThan(20);
      expect(gig.searchDescription.length).toBeGreaterThan(80);
      expect(gig.searchTerms.length).toBeGreaterThanOrEqual(3);
      expect(gig.deliverables.length).toBeGreaterThanOrEqual(4);
      expect(gig.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });
});
