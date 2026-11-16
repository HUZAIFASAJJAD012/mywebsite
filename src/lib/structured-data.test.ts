import { describe, expect, it } from "vitest";
import { personJsonLd, profilePageJsonLd, websiteJsonLd } from "./structured-data";

describe("identity structured data", () => {
  it("uses one canonical person identity with verified public profiles", () => {
    expect(personJsonLd.name).toBe("Huzaifa Sajjad");
    expect(personJsonLd.alternateName).toBe("HuzaifaSajjad");
    expect(personJsonLd.sameAs).toContain("https://github.com/huzaifasajjad012");
    expect(personJsonLd.sameAs).toContain("https://www.freelancer.com/u/huzaifasajjad12");
    expect(personJsonLd.sameAs).not.toContain(undefined);
  });

  it("connects the website and dedicated about profile page", () => {
    expect(websiteJsonLd.publisher).toEqual({ "@id": personJsonLd["@id"] });
    expect(profilePageJsonLd.mainEntity).toEqual({ "@id": personJsonLd["@id"] });
    expect(profilePageJsonLd.url).toMatch(/\/about$/);
    expect(profilePageJsonLd.primaryImageOfPage).toEqual({ "@id": personJsonLd.image["@id"] });
    expect(personJsonLd.image.contentUrl).toMatch(/\/myprofile\.png$/);
  });
});
