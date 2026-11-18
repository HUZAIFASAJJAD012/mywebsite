import { describe, expect, it } from "vitest";
import { featuredProjects, projects } from "./projects";
import { gigs } from "./gigs";

describe("project content", () => {
  it("uses unique slugs and valid external URLs", () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length);
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.responsibilities.length).toBeGreaterThan(0);
      const liveUrl = project.liveUrl;
      if (liveUrl) expect(() => new URL(liveUrl)).not.toThrow();
    }
  });

  it("keeps the verified projects featured on the homepage", () => {
    expect(featuredProjects.map(({ slug }) => slug)).toEqual([
      "al-khalifa-signature",
      "luex-healthcare",
      "hollywood-nutritions",
    ]);
  });

  it("includes the Pigs Can Fly interactive project", () => {
    expect(projects).toContainEqual(expect.objectContaining({
      slug: "pigs-can-fly",
      liveUrl: "https://coin-website-fawn.vercel.app/",
      coverImage: "/project6.png",
      status: "live",
    }));
  });

  it("includes the Kairos and ORBIT concept projects with local covers", () => {
    for (const [slug, liveUrl, coverImage] of [
      ["kairos", "https://site2-ten-virid.vercel.app/", "/kairos-cover.png"],
      ["orbit", "https://website-one-pi-three.vercel.app/", "/orbit-cover.jpg"],
    ]) {
      expect(projects).toContainEqual(expect.objectContaining({ slug, liveUrl, coverImage, status: "live" }));
    }
  });

  it("links every case study only to existing service pages", () => {
    const serviceSlugs = new Set(gigs.map(({ slug }) => slug));
    for (const project of projects) {
      expect(project.seoTitle?.length).toBeGreaterThan(20);
      for (const serviceSlug of project.serviceSlugs ?? []) expect(serviceSlugs.has(serviceSlug)).toBe(true);
    }
  });
});
