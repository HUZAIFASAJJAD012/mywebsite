import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { gigs } from "@/content/gigs";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(process.env.SITE_LAST_MODIFIED ?? "2026-08-25");
  // The articles index really changes whenever an article is added or updated, so use the newest article date.
  const articlesLastModified = new Date(articles.reduce((latest, article) => (article.updatedAt > latest ? article.updatedAt : latest), ""));
  const corePages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1, images: [`${siteUrl}/myprofile.png`] },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "yearly", priority: .9, images: [`${siteUrl}/myprofile.png`] },
    { url: `${siteUrl}/projects`, lastModified, changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/articles`, lastModified: articlesLastModified, changeFrequency: "weekly", priority: .8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: .7 },
    { url: `${siteUrl}/privacy`, lastModified: new Date("2026-11-18"), changeFrequency: "yearly", priority: .3 },
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

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: .8,
  }));

  return [...corePages, ...servicePages, ...projectPages, ...articlePages];
}
