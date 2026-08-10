import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/profile";
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return ["", "/projects", "/gigs", "/about", "/contact", ...projects.map((project) => `/projects/${project.slug}`)].map((path) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: path === "" || path === "/gigs" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : path === "/gigs" ? .9 : .7 })); }
