import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articleReadingMinutes, articles } from "@/content/articles";
import { profile, siteUrl } from "@/content/profile";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

const title = "Articles on Web Development & AI | Huzaifa Sajjad";
const description = "Practical articles by Huzaifa Sajjad on full-stack web development, Next.js, AI tools such as Claude, automation and building reliable digital products.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/articles" },
  openGraph: { title, description, url: "/articles", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function ArticlesPage() {
  const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${siteUrl}/articles#blog`,
      name: `${profile.name} — Articles`,
      description,
      url: `${siteUrl}/articles`,
      author: { "@id": `${siteUrl}/#person` },
      blogPost: sorted.map((article) => ({ "@id": `${siteUrl}/articles/${article.slug}#article` })),
    },
    createBreadcrumbJsonLd([{ name: "Home", url: siteUrl }, { name: "Articles", url: `${siteUrl}/articles` }]),
  ];

  return (
    <>
      <header className="page-hero"><div className="container">
        <span className="eyebrow">Articles</span>
        <h1>Notes on building better products.</h1>
        <p>Practical guides on web development, AI tools and automation — written for business owners and developers.</p>
      </div></header>
      <section className="section-tight"><div className="container article-list">
        {sorted.map((article) => (
          <article className="capability-card article-card" key={article.slug}>
            <span className="project-kicker">{article.category} · {articleReadingMinutes(article)} min read</span>
            <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.excerpt}</p>
            <div className="article-card-footer">
              <time dateTime={article.publishedAt}>{dateFormat.format(new Date(article.publishedAt))}</time>
              <Link className="text-link" href={`/articles/${article.slug}`} aria-label={`Read: ${article.title}`}>Read article <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
