export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "note"; text: string };

export type ArticleSection = { id: string; heading: string; blocks: ArticleBlock[] };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "claude-ai-for-web-development",
    title: "Claude AI for web development: a practical guide",
    seoTitle: "Claude AI for Web Development: A Practical Guide (2026)",
    description:
      "What Claude AI is, how Claude Code and the Claude API work, and how businesses can use Claude safely to build websites, web apps and automations in 2026.",
    excerpt:
      "A plain-English guide to Claude AI for business owners and developers: the apps, the models, the API, real web development use cases and the guardrails that keep it reliable.",
    category: "AI & development",
    keywords: [
      "Claude AI",
      "Claude AI for web development",
      "Claude Code",
      "Claude API",
      "Anthropic Claude",
      "AI web development",
      "AI automation for business",
    ],
    publishedAt: "2026-11-18",
    updatedAt: "2026-11-18",
    sections: [
      {
        id: "what-is-claude-ai",
        heading: "What is Claude AI?",
        blocks: [
          { type: "p", text: "Claude is a family of AI models built by Anthropic. You can talk to it in a chat app, let it work inside a code editor, or connect it to your own software through an API. It can read and write text and code, analyse images and PDFs, follow detailed instructions and use tools that you give it." },
          { type: "p", text: "For web development, that means Claude can help at almost every stage of a project: planning features, writing and reviewing code, producing tests and documentation, and powering AI features inside the finished website or app." },
          { type: "note", text: "AI tools change quickly. Model names and features in this guide are accurate as of November 2026 — always check Anthropic’s official documentation before making a purchasing or architecture decision." },
        ],
      },
      {
        id: "ways-to-use-claude",
        heading: "The three main ways to use Claude",
        blocks: [
          { type: "ol", items: [
            "Claude apps — the chat experience on the web, desktop and mobile. Useful for research, writing, planning and quick questions.",
            "Claude Code — an AI coding assistant that works directly with a project’s files. It runs in the terminal, in IDE extensions such as VS Code and JetBrains, in a desktop app and on the web, and can read code, edit files and run commands with the developer’s permission.",
            "The Claude API — the developer platform for building Claude into your own product, such as a support assistant, a document-processing workflow or a content tool.",
          ] },
          { type: "p", text: "Business owners usually meet Claude through the apps. Developers use Claude Code to build faster, and the API when a product itself needs AI capabilities." },
        ],
      },
      {
        id: "claude-models",
        heading: "Claude models explained",
        blocks: [
          { type: "p", text: "Anthropic offers several model tiers so that you can balance capability, speed and cost:" },
          { type: "ul", items: [
            "Opus — the flagship tier for complex reasoning, large codebases and agentic work. Claude Opus 5.5 is the current Opus model.",
            "Sonnet — a strong balance of speed and capability for everyday coding and business tasks. Claude Sonnet 5.5 is the current Sonnet model.",
            "Haiku — the fastest and most affordable tier, well suited to high-volume tasks such as classification and short replies. Claude Haiku 5.5 is the current Haiku model.",
            "Fable — Anthropic’s most capable widely released model for the most demanding long-running work, priced above Opus.",
          ] },
          { type: "p", text: "Current models support very large context windows, so they can work with long documents or substantial parts of a codebase in a single request. For most website and web-app features, the right choice is the least expensive model that reliably meets the quality bar for that specific task." },
        ],
      },
      {
        id: "web-development-use-cases",
        heading: "How Claude helps in web development",
        blocks: [
          { type: "p", text: "Used well, Claude is an accelerator for an experienced developer — not a replacement for engineering judgment. Practical uses include:" },
          { type: "ul", items: [
            "Scaffolding pages, components and API routes in frameworks such as Next.js and React.",
            "Refactoring older code and explaining unfamiliar parts of a codebase.",
            "Writing unit tests and finding edge cases before release.",
            "Reviewing pull requests for bugs, accessibility problems and security issues.",
            "Drafting documentation, README files and handover notes.",
            "Improving technical SEO: metadata, structured data, sitemaps and internal linking.",
            "Converting designs or written requirements into a first working version that is then refined by hand.",
          ] },
          { type: "p", text: "The biggest gains usually come from clear instructions, well-organised project files and a habit of checking every result with linting, type-checking, tests and a production build." },
        ],
      },
      {
        id: "claude-api-features",
        heading: "Building AI features with the Claude API",
        blocks: [
          { type: "p", text: "When a website or app needs AI inside the product, the Claude API provides the building blocks. The most useful features for business software include:" },
          { type: "ul", items: [
            "Tool use — Claude can call functions you define, such as looking up an order or searching a knowledge base.",
            "Structured outputs — responses that follow a JSON schema, which makes them safe to store and process.",
            "Vision and PDF input — extracting information from images, invoices, forms and documents.",
            "Prompt caching — reusing repeated context to reduce cost and response time.",
            "Message batches — processing large volumes of non-urgent requests at a lower price.",
            "Server tools such as web search, which let Claude look up current information.",
          ] },
          { type: "p", text: "Common business projects built on these features include customer support assistants, lead qualification, document data extraction, internal knowledge search and content workflows with human approval. See my [AI automation service](/services/ai-automation) for how these projects are planned and delivered." },
        ],
      },
      {
        id: "nextjs-example",
        heading: "Example: calling Claude from a Next.js route",
        blocks: [
          { type: "p", text: "Here is a minimal server-side example using Anthropic’s official TypeScript SDK (`@anthropic-ai/sdk`). The API key stays on the server in an environment variable and is never exposed to the browser." },
          { type: "code", language: "ts", code: `// app/api/summarise/route.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from the environment

export async function POST(request: Request) {
  const { text } = await request.json();

  const response = await client.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    messages: [
      { role: "user", content: \`Summarise this for a busy customer:\\n\\n\${text}\` },
    ],
  });

  const summary = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\\n");

  return Response.json({ summary });
}` },
          { type: "p", text: "A production version would add input validation, rate limiting, error handling, logging and a clear limit on how much text a visitor can submit." },
        ],
      },
      {
        id: "risks-and-guardrails",
        heading: "Risks and guardrails",
        blocks: [
          { type: "p", text: "AI features are only valuable when they are dependable. Before launching anything built with or on Claude, put these guardrails in place:" },
          { type: "ul", items: [
            "Review and test all AI-generated code before it reaches production.",
            "Never place API keys, passwords or private customer data in prompts or client-side code.",
            "Validate model output before saving it or acting on it, ideally with structured outputs and a schema.",
            "Keep a human approval step for consequential actions such as payments, refunds or account changes.",
            "Treat content from websites, emails and uploaded files as untrusted data to protect against prompt injection.",
            "Monitor usage and set spending limits so that costs stay predictable.",
          ] },
        ],
      },
      {
        id: "getting-started",
        heading: "How to get started",
        blocks: [
          { type: "ol", items: [
            "Pick one repetitive, well-defined task — for example, answering common questions or extracting data from documents.",
            "Write down what a good result looks like and collect a handful of real examples to test against.",
            "Build a small prototype with the Claude API and measure quality, speed and cost.",
            "Add validation, logging and human review, then launch to a limited group first.",
            "Improve the prompt and workflow using real feedback before expanding.",
          ] },
          { type: "p", text: "If you would like help planning or building a Claude-powered website feature, an automation or a full product, [get in touch](/contact) or explore my [full-stack development service](/services/full-stack-development)." },
        ],
      },
    ],
    faqs: [
      { question: "Is Claude AI free to use?", answer: "Anthropic offers a free tier of the Claude apps with usage limits, and paid plans with higher limits and more features. The Claude API is billed per token used, with prices that vary by model." },
      { question: "What is the difference between Claude and Claude Code?", answer: "Claude is the AI model and chat assistant. Claude Code is a coding tool that uses Claude to work directly with a software project’s files, run commands and make changes with the developer’s permission." },
      { question: "Can Claude build a complete website on its own?", answer: "Claude can produce a large share of the code for a website, but a reliable production site still needs an experienced developer to define requirements, review the code, test it, handle security and deploy it properly." },
      { question: "Which Claude model should I use for my project?", answer: "Start with the model that meets your quality bar at the lowest cost. Opus suits complex reasoning and coding, Sonnet balances speed and capability, and Haiku is best for fast, high-volume tasks. Test with real examples before deciding." },
      { question: "Is it safe to use Claude with business data?", answer: "It can be, when the integration is designed carefully: keep keys on the server, send only the data the task needs, review Anthropic’s data and retention policies for your plan, and add validation and human review where decisions matter." },
    ],
    relatedServiceSlugs: ["ai-automation", "full-stack-development", "nextjs-development"],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articleText(article: Article) {
  return [
    article.title,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.blocks.flatMap((block) => ("items" in block ? block.items : block.type === "code" ? [] : [block.text])),
    ]),
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
}

export function articleWordCount(article: Article) {
  return articleText(article).split(/\s+/).filter(Boolean).length;
}

export function articleReadingMinutes(article: Article) {
  return Math.max(1, Math.round(articleWordCount(article) / 220));
}
