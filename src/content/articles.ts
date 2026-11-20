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
    slug: "nextjs-vs-wordpress-business-website",
    title: "Next.js vs WordPress for business websites: which should you choose?",
    seoTitle: "Next.js vs WordPress for Business Websites (2026 Guide)",
    description:
      "Next.js vs WordPress compared for business websites: speed, SEO, security, cost, editing and scalability, with a clear checklist to choose the right platform.",
    excerpt:
      "An honest comparison of Next.js and WordPress for business owners: how each one handles speed, SEO, security, content editing, cost and growth, and when a headless setup gives you both.",
    category: "Web development",
    keywords: [
      "Next.js vs WordPress",
      "WordPress vs Next.js",
      "best platform for business website",
      "Next.js for business websites",
      "headless WordPress",
      "fast business website",
      "Core Web Vitals",
      "hire Next.js developer",
    ],
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-20",
    sections: [
      {
        id: "quick-answer",
        heading: "The quick answer",
        blocks: [
          { type: "p", text: "Choose **WordPress** when you need a simple content site or blog that your team will edit every day, you want to install ready-made plugins, and your budget is small. Choose **Next.js** when speed, search performance, security, custom features or future growth into a web application matter more than installing plugins." },
          { type: "p", text: "Many growing businesses end up with a third option: a **headless** setup, where WordPress (or another content management system) is used only for editing content and Next.js renders the fast public website. The rest of this guide explains the trade-offs so that you can make the decision with confidence." },
          { type: "note", text: "There is no single best platform for every business. The right choice depends on who edits the site, which features you need, your budget and how much the website contributes to sales." },
        ],
      },
      {
        id: "what-they-are",
        heading: "What are WordPress and Next.js?",
        blocks: [
          { type: "p", text: "[WordPress](https://wordpress.org/) is an open-source content management system (CMS) written in PHP. It gives you an admin dashboard, themes for the design and a huge plugin library for features such as forms, SEO and online stores. According to [W3Techs](https://w3techs.com/technologies/details/cm-wordpress), it powers more than 40% of all websites, which makes it the most widely used CMS in the world." },
          { type: "p", text: "[Next.js](https://nextjs.org/) is an open-source React framework maintained by Vercel. Instead of themes and plugins, a developer builds the website as a modern web application with full control over the design, the data and the performance. Pages can be generated in advance as static files, rendered on the server, or a mix of both, which is a big reason Next.js sites tend to load quickly." },
          { type: "p", text: "In short: WordPress is a ready-made product that you configure, while Next.js is a professional toolkit that a developer uses to build exactly what your business needs." },
        ],
      },
      {
        id: "speed-and-core-web-vitals",
        heading: "Speed and Core Web Vitals",
        blocks: [
          { type: "p", text: "Website speed affects both visitors and search rankings. Google measures real-world experience with [Core Web Vitals](https://web.dev/articles/vitals): **Largest Contentful Paint (LCP)** should be 2.5 seconds or less, **Interaction to Next Paint (INP)** 200 milliseconds or less, and **Cumulative Layout Shift (CLS)** 0.1 or less." },
          { type: "ul", items: [
            "**WordPress** can be fast, but every theme, page builder and plugin adds code. Good results usually need careful hosting, caching plugins and ongoing tuning, and a site often slows down as more plugins are added.",
            "**Next.js** includes performance features out of the box: static generation, automatic code splitting, image optimisation with the `next/image` component, font optimisation and global CDN delivery when hosted on platforms such as Vercel.",
          ] },
          { type: "p", text: "In practice, a well-built Next.js site reaches good Core Web Vitals scores more easily and keeps them as it grows, because only the code each page needs is sent to the browser." },
        ],
      },
      {
        id: "seo",
        heading: "SEO: which platform ranks better?",
        blocks: [
          { type: "p", text: "Neither platform ranks a website by itself. Google ranks helpful content, a clear site structure, good page experience and trustworthy signals such as quality backlinks. What differs is how much work it takes to get the technical SEO right." },
          { type: "ul", items: [
            "**WordPress** makes on-page SEO easy for non-technical users with plugins such as Yoast SEO or Rank Math, which manage titles, descriptions and sitemaps from the dashboard.",
            "**Next.js** gives a developer precise control over every technical detail: server-rendered HTML that search engines can read immediately, the built-in Metadata API for titles and social previews, generated `sitemap.xml` and `robots.txt` files, canonical URLs and structured data (JSON-LD) that helps Google understand your business, services and articles.",
          ] },
          { type: "p", text: "Google’s own [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) is a good reference for the fundamentals that matter on either platform. If you want help with the technical side, see my [SEO services](/services/seo-services)." },
        ],
      },
      {
        id: "security-and-maintenance",
        heading: "Security and maintenance",
        blocks: [
          { type: "p", text: "Because WordPress is so popular, it is a frequent target for automated attacks. Most WordPress security problems come from outdated plugins and themes, weak admin passwords and poorly maintained hosting. Keeping a WordPress site safe means regular core, theme and plugin updates, backups and a security plugin or firewall." },
          { type: "p", text: "A Next.js site has a much smaller attack surface: there is no public admin login or plugin system on the website itself, and statically generated pages are simply files served from a CDN. It still needs good practice, such as keeping dependencies updated, validating form input on the server and storing secrets as environment variables, but routine maintenance is usually lighter." },
        ],
      },
      {
        id: "editing-content",
        heading: "Editing content",
        blocks: [
          { type: "p", text: "This is where WordPress shines. Its visual editor is familiar, and staff can publish posts, update pages and upload images without a developer." },
          { type: "p", text: "A Next.js site can offer the same convenience when it is connected to a headless CMS such as Sanity, Contentful, Strapi or WordPress itself. Your team edits content in a friendly dashboard and the website updates automatically. For sites whose content changes rarely, content can also live directly in the codebase, which is the fastest and most affordable option." },
        ],
      },
      {
        id: "cost",
        heading: "Cost: build, hosting and long-term ownership",
        blocks: [
          { type: "p", text: "Compare the total cost over two or three years, not just the launch price:" },
          { type: "ul", items: [
            "**Build cost:** a template-based WordPress site is usually the cheapest to launch. A custom Next.js site needs a developer from the start, so the first build typically costs more.",
            "**Hosting:** WordPress needs PHP hosting with a database. Many Next.js business websites run on Vercel or Netlify, which offer free tiers for small sites and scale as traffic grows.",
            "**Plugins and licences:** premium WordPress themes and plugins often charge yearly subscriptions. Next.js features are built into the code, without plugin licences.",
            "**Maintenance:** budget time for WordPress updates and security monitoring. A Next.js site usually needs fewer, planned updates.",
          ] },
          { type: "p", text: "For a simple brochure site, WordPress is often the most economical. For a site that drives leads or sales, faster pages and fewer maintenance problems can pay back the higher build cost. You can see my current [service pricing](/services) or [request a quote](/contact)." },
        ],
      },
      {
        id: "scalability-and-custom-features",
        heading: "Scalability and custom features",
        blocks: [
          { type: "p", text: "If your website may grow into more than a set of pages, such as customer accounts, booking, dashboards, online payments, AI features or integrations with your other software, Next.js is the stronger foundation. The same codebase can serve marketing pages and a full web application, with API routes and server-side logic built in." },
          { type: "p", text: "WordPress can be extended with custom plugins, but complex application features often become hard to maintain. For online stores, WooCommerce works well for many small shops, while a custom Next.js storefront gives more control over speed and checkout experience — the approach I used for the [NAYRO e-commerce store](/projects/nayro)." },
        ],
      },
      {
        id: "side-by-side",
        heading: "Next.js vs WordPress side by side",
        blocks: [
          { type: "ul", items: [
            "**Best for:** WordPress — blogs, simple brochure sites and teams that need plugins. Next.js — fast marketing sites, custom features, e-commerce and web applications.",
            "**Speed:** WordPress — depends on theme, plugins and hosting. Next.js — fast by default with static generation and image optimisation.",
            "**SEO:** WordPress — easy with plugins. Next.js — full technical control, including structured data.",
            "**Security:** WordPress — needs regular plugin and core updates. Next.js — smaller attack surface, no public admin.",
            "**Content editing:** WordPress — built in. Next.js — through a headless CMS or code.",
            "**Launch cost:** WordPress — lower. Next.js — higher, with fewer ongoing plugin costs.",
          ] },
        ],
      },
      {
        id: "how-to-choose",
        heading: "How to choose: a simple checklist",
        blocks: [
          { type: "p", text: "Answer these questions honestly:" },
          { type: "ol", items: [
            "Will non-technical staff publish content several times a week? If yes, you need a CMS: WordPress or Next.js with a headless CMS.",
            "Does the website bring in leads or sales, so that every second of loading time matters? If yes, lean towards Next.js.",
            "Do you need custom features such as accounts, bookings, dashboards or integrations, now or within a year? If yes, choose Next.js.",
            "Is the budget very tight and the site simple? WordPress is a sensible starting point.",
            "Do you already have a large WordPress site with a lot of content? Consider going headless instead of rebuilding from scratch.",
          ] },
        ],
      },
      {
        id: "work-with-me",
        heading: "Get help choosing and building the right website",
        blocks: [
          { type: "p", text: "I am a freelance full-stack developer who builds fast, SEO-ready business websites and web applications with Next.js. You can browse [my projects](/projects), learn about my [Next.js development service](/services/nextjs-development) and [small business websites](/services/small-business-websites), or read how I use [Claude AI in web development](/articles/claude-ai-for-web-development)." },
          { type: "p", text: "If you are still unsure which platform fits your business, [send me your project details](/contact) and I will recommend the simplest option that meets your goals." },
        ],
      },
    ],
    faqs: [
      { question: "Is Next.js better than WordPress for SEO?", answer: "Next.js gives developers more control over technical SEO and usually makes fast page speed easier to achieve, which helps page experience. WordPress is easier for non-technical users to manage with SEO plugins. Rankings ultimately depend on content quality, site structure and backlinks on either platform." },
      { question: "Is Next.js more expensive than WordPress?", answer: "A custom Next.js site usually costs more to build because it needs a developer, while a template-based WordPress site is cheaper to launch. Over time, Next.js can cost less to run because there are fewer plugin licences and less security maintenance." },
      { question: "Can I edit a Next.js website without coding?", answer: "Yes. A Next.js site can be connected to a headless CMS such as Sanity, Contentful, Strapi or WordPress, giving your team a visual dashboard to edit pages and posts without touching code." },
      { question: "What is headless WordPress?", answer: "Headless WordPress uses WordPress only as the content editor and database, while a separate front end, often built with Next.js, displays the website. You keep the familiar WordPress dashboard and gain the speed and flexibility of Next.js." },
      { question: "Should I move my WordPress site to Next.js?", answer: "Move when slow speed, security problems, plugin conflicts or missing custom features are holding the business back. If the site works well and mainly needs content updates, improving the existing WordPress site may be the better investment." },
    ],
    relatedServiceSlugs: ["nextjs-development", "small-business-websites", "seo-services"],
  },
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
          { type: "p", text: "If you would like help planning or building a Claude-powered website feature, an automation or a full product, [get in touch](/contact) or explore my [full-stack development service](/services/full-stack-development). Choosing a platform for a new site? Read [Next.js vs WordPress for business websites](/articles/nextjs-vs-wordpress-business-website)." },
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
