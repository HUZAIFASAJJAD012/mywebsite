import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { getProject } from "@/content/projects";
import { Reveal } from "@/components/motion/reveal";

export function ProductShowcase() {
  const product = getProject("lynvado");

  if (!product) return null;

  return (
    <Reveal>
      <article className="product-showcase">
        <div className="product-showcase-main">
          <div className="product-preview">
            {product.coverImage ? (
              <Image
                src={product.coverImage}
                alt="Lynvado public media downloader interface"
                fill
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 58vw"
              />
            ) : null}
            <span className="product-live"><i /> Live product</span>
          </div>
          <div className="product-showcase-copy">
            <span className="project-kicker">Independent product · Media utility</span>
            <h3>{product.title}</h3>
            <p>{product.summary}</p>
            <div className="tag-list">
              {product.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
            <div className="product-actions">
              {product.liveUrl ? (
                <a className="button button-primary" href={product.liveUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="project_live_click" data-analytics-context={product.slug}>
                  Open Lynvado <ExternalLink size={16} />
                </a>
              ) : null}
              <Link className="button" href={`/projects/${product.slug}`}>
                View case study <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        {product.highlights ? (
          <div className="product-highlights" aria-label="Lynvado product highlights">
            {product.highlights.map((highlight) => (
              <div key={highlight}><Check size={16} aria-hidden="true" /><span>{highlight}</span></div>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}
