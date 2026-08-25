import { describe, expect, it } from "vitest";
import { featuredProjects, projects } from "./projects";

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
});
