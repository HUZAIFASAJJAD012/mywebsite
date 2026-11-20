import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ArticleBlocks } from "@/components/articles/article-body";
import { ContactCta } from "@/components/layout/contact-cta";
import { articleReadingMinutes, articles, articleWordCount, getArticle } from "@/content/articles";
import { gigs } from "@/content/gigs";
import { profile, siteUrl } from "@/content/profile";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = getArticle(slug);
  if (!article) return {};
  const url = `/articles/${slug}`;
  return {
    title: { absolute: article.seoTitle },
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: profile.name, url: `${siteUrl}/about` }],
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.seoTitle, description: article.description, url, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, authors: [`${siteUrl}/about`], section: article.category, tags: article.keywords },
    twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getArticle(slug); if (!article) notFound();
  const url = `${siteUrl}/articles/${article.slug}`;
  const relatedServices = article.relatedServiceSlugs.map((serviceSlug) => gigs.find((gig) => gig.slug === serviceSlug)).filter((gig): gig is NonNullable<typeof gig> => Boolean(gig));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      url,
      mainEntityOfPage: url,
      image: `${url}/opengraph-image`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: "en",
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      wordCount: articleWordCount(article),
      author: { "@id": `${siteUrl}/#person`, name: profile.name, url: `${siteUrl}/about` },
      publisher: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    createBreadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Articles", url: `${siteUrl}/articles` },
      { name: article.title, url },
    ]),
    ...(article.faqs.length ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: article.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }] : []),
  ];

  return (
    <>
      <article className="article">
        <header className="case-hero article-hero"><div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Articles", href: "/articles" }, { label: article.title }]} />
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="section-copy reading-width">{article.excerpt}</p>
          <p className="article-meta">
            By <Link href="/about" rel="author">{profile.name}</Link>
            <span aria-hidden="true">·</span><time dateTime={article.publishedAt}>{dateFormat.format(new Date(article.publishedAt))}</time>
            {article.updatedAt !== article.publishedAt ? <><span aria-hidden="true">·</span>Updated <time dateTime={article.updatedAt}>{dateFormat.format(new Date(article.updatedAt))}</time></> : null}
            <span aria-hidden="true">·</span>{articleReadingMinutes(article)} min read
          </p>
        </div></header>
        <div className="container article-layout">
          <nav className="article-toc" aria-label="Table of contents">
            <strong>On this page</strong>
            <ol>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}<li><a href="#faq">Frequently asked questions</a></li></ol>
          </nav>
          <div className="article-content">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2 id={`${section.id}-heading`}>{section.heading}</h2>
                <ArticleBlocks blocks={section.blocks} />
              </section>
            ))}
            <section id="faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading">Frequently asked questions</h2>
              <div className="article-faq">{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
            </section>
            <aside className="article-author" aria-label="About the author">
              <strong>About the author</strong>
              <p>{profile.name} is a {profile.shortTitle.toLowerCase()} building websites, web applications, mobile apps and AI-assisted workflows for clients worldwide. <Link href="/about">Read more about Huzaifa</Link>.</p>
            </aside>
            {relatedServices.length ? (
              <section aria-labelledby="related-services-heading">
                <h2 id="related-services-heading">Related services</h2>
                <div className="case-service-links">{relatedServices.map((service) => <Link className="text-link" href={`/services/${service.slug}`} key={service.slug}>{service.title}<ArrowRight size={15} aria-hidden="true" /></Link>)}</div>
              </section>
            ) : null}
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ContactCta eyebrow="Build with AI" title="Planning an AI-powered feature?" copy="Share the workflow or product you have in mind. I’ll help identify a practical, reliable starting point." href="/contact?service=ai-automation" context={article.slug} />
    </>
  );
}
