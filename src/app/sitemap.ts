import type { MetadataRoute } from "next";
import { gigs } from "@/content/gigs";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(process.env.SITE_LAST_MODIFIED ?? "2026-08-25");
  const corePages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1, images: [`${siteUrl}/myprofile.png`] },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "yearly", priority: .9, images: [`${siteUrl}/myprofile.png`] },
    { url: `${siteUrl}/projects`, lastModified, changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/gigs`, lastModified, changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: .7 },
  ];
  const servicePages: MetadataRoute.Sitemap = gigs.map((gig) => ({
    url: `${siteUrl}/services/${gig.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: .8,
  }));
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: .8,
    images: project.coverImage ? [`${siteUrl}${project.coverImage}`] : undefined,
  }));

  return [...corePages, ...servicePages, ...projectPages];
}
