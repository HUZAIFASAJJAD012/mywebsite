import type { MetadataRoute } from "next";
import { gigs } from "@/content/gigs";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(process.env.SITE_LAST_MODIFIED ?? "2026-08-10");
  const paths = ["", "/projects", "/gigs", "/about", "/contact", ...gigs.map((gig) => `/services/${gig.slug}`), ...projects.map((project) => `/projects/${project.slug}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/gigs" || path.startsWith("/services/") ? "monthly" as const : "yearly" as const,
    priority: path === "" ? 1 : path === "/gigs" ? .9 : path.startsWith("/services/") ? .8 : .7,
  }));
}
