import Link from "next/link";
import type { ReactNode } from "react";
import type { ArticleBlock } from "@/content/articles";

const inlinePattern = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));
    const [, label, href, code, strong] = match;
    if (strong) nodes.push(<strong key={index}>{strong}</strong>);
    else if (code) nodes.push(<code key={index}>{code}</code>);
    else if (href.startsWith("/")) nodes.push(<Link key={index} href={href}>{label}</Link>);
    else nodes.push(<a key={index} href={href} target="_blank" rel="noopener noreferrer">{label}</a>);
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}

export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "p":
        return <p key={index}><InlineText text={block.text} /></p>;
      case "note":
        return <p className="article-note" key={index}><InlineText text={block.text} /></p>;
      case "ul":
        return <ul key={index}>{block.items.map((item) => <li key={item}><InlineText text={item} /></li>)}</ul>;
      case "ol":
        return <ol key={index}>{block.items.map((item) => <li key={item}><InlineText text={item} /></li>)}</ol>;
      case "code":
        return <pre className="article-code" key={index} tabIndex={0} aria-label={`${block.language} code example`}><code>{block.code}</code></pre>;
    }
  });
}
