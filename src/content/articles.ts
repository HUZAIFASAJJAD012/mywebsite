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
          { type: "p", text: "I am a freelance full-stack developer who builds fast, SEO-ready business websites and web applications with Next.js. You can browse [my projects](/projects), learn about my [Next.js development service](/services/nextjs-development) and [small business websites](/services/small-business-websites), read how I use [Claude AI in web development](/articles/claude-ai-for-web-development), or see [how to make money with Claude AI in 2027](/articles/make-money-with-claude-ai-2027)." },
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
          { type: "p", text: "If you would like help planning or building a Claude-powered website feature, an automation or a full product, [get in touch](/contact) or explore my [full-stack development service](/services/full-stack-development). Want to turn these skills into income? Read [how to make money with Claude AI in 2027](/articles/make-money-with-claude-ai-2027). Curious where web development is heading? Read [web development in 2027: what is changing](/articles/web-development-in-2027-what-is-changing). Running a business? See the [best AI tools for small business in 2027](/articles/best-ai-tools-for-small-business-2027). Choosing a platform for a new site? Read [Next.js vs WordPress for business websites](/articles/nextjs-vs-wordpress-business-website)." },
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
  {
    slug: "make-money-with-claude-ai-2027",
    title: "How to make money with Claude AI in 2027: 9 realistic ways",
    seoTitle: "How to Make Money With Claude AI in 2027: 9 Real Ways",
    description:
      "Nine realistic ways to earn with Claude AI in 2027: freelancing, Claude Code services, automation, API products, content and certification, with no income hype.",
    excerpt:
      "A practical, hype-free guide to earning with Claude in 2027: which skills clients actually pay for, nine business models, where to find clients, how to price your work and how to build a reputation that compounds.",
    category: "AI & development",
    keywords: [
      "make money with Claude AI",
      "how to make money with AI in 2027",
      "Claude AI side hustle",
      "Claude Code freelancing",
      "AI automation business",
      "freelance AI developer",
      "Claude API business ideas",
      "Claude Partner Network",
      "earn money with AI",
    ],
    publishedAt: "2026-11-23",
    updatedAt: "2026-11-23",
    sections: [
      {
        id: "quick-answer",
        heading: "The quick answer",
        blocks: [
          { type: "p", text: "You do not make money from Claude itself; you make money by using Claude to solve a problem that someone already pays to have solved. The most reliable routes in 2027 are **freelance development and automation work, productised AI services, and small software products** built on the Claude API. Content, teaching and consulting come next." },
          { type: "p", text: "The tool is available to everyone, so it is not the advantage. Your advantage is a skill clients trust (web development, data work, writing, operations), a niche you understand and a record of results you can show." },
          { type: "note", text: "This guide contains no income promises. Earnings depend on your skills, market, pricing and consistency, and anyone quoting guaranteed monthly figures from AI is selling you something. All product, plan and programme details are accurate as of November 2026; check the official pages before you decide." },
        ],
      },
      {
        id: "what-changes-in-2027",
        heading: "What has changed for people who earn with AI",
        blocks: [
          { type: "p", text: "Two shifts matter. First, basic output such as a generic blog post, logo or landing page has become cheap, so clients no longer pay a premium for it. Second, the demand for people who can **connect AI to a real business process reliably** has grown: integrating a model with a company’s documents, tools and approval steps, then testing and maintaining it." },
          { type: "p", text: "Anthropic itself has invested in this ecosystem. In 2026 it launched the [Claude Partner Network](https://www.anthropic.com/news/claude-partner-network) with $100 million of investment aimed at organisations that help businesses adopt Claude, and it offers role-based certifications through its Partner Academy. That is a signal that implementation skills, not just prompting, are where professional demand sits." },
        ],
      },
      {
        id: "nine-ways",
        heading: "Nine realistic ways to earn with Claude",
        blocks: [
          { type: "ol", items: [
            "**Freelance development with Claude Code.** Use an AI coding assistant to deliver websites, web apps and fixes faster, then keep the quality high with your own review. Clients pay for working, maintainable software, not for the tool. See how I use it in my [Claude AI for web development guide](/articles/claude-ai-for-web-development).",
            "**AI automation for small businesses.** Automate repetitive work such as lead qualification, support replies with human approval, document data extraction and report drafting. This is the strongest service for non-enterprise clients because the value is easy to explain: time saved per week.",
            "**Productised services.** Package one result at a fixed scope and price, for example “support-inbox triage setup” or “invoice data extraction workflow”. Fixed offers are easier to sell, deliver and repeat than open-ended consulting.",
            "**Micro-SaaS and API products.** Build a narrow tool for one audience using the Claude API, such as a contract-clause checker for freelancers or a product-description tool for a specific e-commerce niche. Add accounts, usage limits and billing, and keep model costs below what you charge.",
            "**Content and SEO publishing.** Use Claude for research, outlines and editing, but publish only material you have checked and improved with first-hand experience. Search engines reward helpful, original content; thin AI text is a risk, not a business.",
            "**Consulting and implementation audits.** Review a company’s workflows, identify the three tasks where AI saves the most time, and deliver a plan with a prototype. A paid audit is a low-risk way for a client to start working with you.",
            "**Training and workshops.** Teach teams to use Claude safely and effectively for their own jobs: prompts, privacy rules, review habits and example workflows. Corporate teams and agencies often prefer a practical half-day session to a long course.",
            "**Data cleaning, research and document processing.** Turn messy PDFs, spreadsheets and notes into structured data, summaries or reports, with a quality check on every deliverable.",
            "**Partner and certification route.** Firms that implement Claude for customers can apply to the [Claude Partner Network](https://claude.com/partners), and individuals can pursue [Anthropic’s role-based certifications](https://claude.com/blog/four-role-based-claude-certifications) to prove their skills. Verify current eligibility and requirements on those pages before you plan around them.",
          ] },
        ],
      },
      {
        id: "skills-that-pay",
        heading: "The skills clients actually pay for",
        blocks: [
          { type: "ul", items: [
            "**Problem definition:** turning a vague wish (“use AI”) into a specific task with a measurable result.",
            "**Integration:** connecting the model to websites, databases, email, spreadsheets and internal tools through APIs.",
            "**Evaluation:** building a small set of real test cases so that you can prove quality and catch regressions.",
            "**Safety and reliability:** keeping secrets on the server, validating outputs, handling prompt injection and adding human approval for important actions.",
            "**Cost control:** choosing the cheapest model that meets the quality bar, caching repeated context and setting usage limits.",
            "**Communication:** explaining what the system can and cannot do, in plain language.",
          ] },
          { type: "p", text: "If you can already build websites and apps, you have a head start. A fast, search-friendly front end plus a dependable AI back end is a combination many small businesses cannot assemble alone; it is the kind of work behind my [AI automation](/services/ai-automation) and [full-stack development](/services/full-stack-development) services." },
        ],
      },
      {
        id: "find-clients",
        heading: "Where to find your first clients",
        blocks: [
          { type: "ul", items: [
            "**Freelance marketplaces** such as [Upwork](https://www.upwork.com/) and [Fiverr](https://www.fiverr.com/) — good for your first reviews. Choose one narrow offer instead of listing everything you can do.",
            "**Your own website,** with case studies, a clear services page and an easy way to contact you. Search traffic compounds over time; see the [Next.js vs WordPress guide](/articles/nextjs-vs-wordpress-business-website) for choosing a fast platform.",
            "**Referrals and past clients.** Ask every satisfied client for a short, honest testimonial and an introduction.",
            "**Professional communities** such as LinkedIn, GitHub and industry groups, where you share useful work rather than pitching.",
            "**Local and niche businesses** that you understand, such as clinics, shops, agencies and logistics firms, with one concrete workflow you can improve.",
          ] },
        ],
      },
      {
        id: "pricing",
        heading: "How to price AI work",
        blocks: [
          { type: "p", text: "Price on the value of the outcome and the scope you control, not on how few hours the tool saves you. If AI lets you deliver in two days what used to take two weeks, the client still receives the same result." },
          { type: "ul", items: [
            "**Fixed price per defined deliverable** for packaged services and prototypes.",
            "**Monthly retainer** for monitoring, improvements and support after launch, which smooths your income.",
            "**Usage-based pricing** for API products, with model costs tracked per customer so that margins stay healthy.",
            "**Separate model costs** in client projects: either bill API usage at cost or build a clear allowance into the retainer.",
          ] },
          { type: "p", text: "Check Anthropic’s official pricing page for current plan and API token rates before quoting, because both change. For a sense of how I scope work, see my [service pricing](/services)." },
        ],
      },
      {
        id: "seo-strategy",
        heading: "Build a search presence that brings in clients",
        blocks: [
          { type: "p", text: "A website that ranks for what clients search for is the cheapest long-term source of leads. A practical approach:" },
          { type: "ol", items: [
            "**Choose a specific topic and customer,** such as “AI automation for dental clinics”, rather than “AI services”.",
            "**Match search intent.** Write the guide, comparison or case study people expect for that query, and answer the question near the top.",
            "**Show first-hand experience:** screenshots, code, decisions and outcomes you can verify. Google’s [guidance on helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) explains why this matters.",
            "**Optimise the basics:** a unique title and meta description, one clear H1, descriptive headings, fast pages, structured data and internal links between related pages.",
            "**Measure with [Google Search Console](https://search.google.com/search-console/about)** and improve pages using the real queries they appear for.",
          ] },
          { type: "p", text: "New sites often see only a handful of impressions at first. That is normal; consistent, useful publishing and genuine links matter more than any trick." },
        ],
      },
      {
        id: "backlinks",
        heading: "Backlinks: earn them, never buy them",
        blocks: [
          { type: "p", text: "Backlinks, links from other websites to yours, remain a trust signal, but purchased or manipulative links break Google’s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) and can cause penalties. Earn them instead:" },
          { type: "ul", items: [
            "**Publish original, useful assets** that others want to cite: a checklist, template, benchmark of your own tests or a clear case study.",
            "**Contribute to open source and communities** you genuinely use; a project README or profile can legitimately point to your site.",
            "**Complete your profiles:** GitHub, LinkedIn, Freelancer, Upwork and Fiverr should all use the same name and link to your website.",
            "**Share expertise with journalists, newsletters and podcasts** that cover your niche, and write guest articles only for publications your clients read.",
            "**Fix and reclaim:** if a project or client mentions you without a link, politely ask for one.",
            "**Link internally** between your own related pages so that authority and readers flow to your service pages.",
          ] },
        ],
      },
      {
        id: "mistakes-to-avoid",
        heading: "Mistakes that stop people earning",
        blocks: [
          { type: "ul", items: [
            "**Selling the tool instead of a result.** Nobody pays for “I use AI”; they pay for hours saved or revenue gained.",
            "**Publishing unreviewed AI content,** which damages trust and search performance.",
            "**Exposing keys or private client data** in prompts or browser code.",
            "**Skipping testing.** A confident wrong answer in front of a customer costs more than the project earned.",
            "**Chasing every trend.** Pick one niche and offer, deliver it well and then expand.",
            "**Believing “get rich” promises.** Treat courses and communities that advertise income screenshots with caution.",
          ] },
        ],
      },
      {
        id: "30-day-plan",
        heading: "A 30-day plan to get started",
        blocks: [
          { type: "ol", items: [
            "**Week 1:** choose one skill, one customer type and one specific outcome. Write the offer in a single sentence.",
            "**Week 2:** build a working demo or sample project and document it with screenshots and a short case study on your website.",
            "**Week 3:** publish your offer on one marketplace and your own site, complete your professional profiles and message ten relevant businesses with a concrete suggestion for each.",
            "**Week 4:** deliver your first paid or discounted pilot, collect feedback and a testimonial, then improve the offer and set your price.",
          ] },
          { type: "p", text: "To see what business owners look for when they hire for AI work, read my guide to the [best AI tools for small business in 2027](/articles/best-ai-tools-for-small-business-2027). If you would like a developer to build the website, automation or AI feature behind your offer, [contact me](/contact) with your idea and I will suggest a practical first version." },
        ],
      },
    ],
    faqs: [
      { question: "Can you really make money with Claude AI?", answer: "Yes, but indirectly. People earn by using Claude to deliver services or products that customers already want, such as development, automation, content workflows and consulting. There is no guaranteed income, and results depend on your skills, niche and consistency." },
      { question: "What is the best way to make money with AI in 2027?", answer: "For most people the most reliable path is a skill-based service: freelance development, AI automation for small businesses or a productised workflow, with a narrow niche. Micro-SaaS products can scale further but take longer to validate." },
      { question: "Do I need to know how to code to earn with Claude?", answer: "Not always. Training, research, content editing, document processing and consulting need little or no code. Automation, API products and web development do, and coding skills let you charge more for dependable results." },
      { question: "Is it worth getting a Claude certification?", answer: "Anthropic offers role-based certifications through its Partner Academy for members of the Claude Partner Network. A certification can help prove skills to clients and partners, but real projects and references matter more. Check Anthropic’s official pages for current eligibility." },
      { question: "How do I get backlinks to my new website?", answer: "Earn them with original, useful content, genuine profiles, open-source contributions, guest articles in relevant publications and by asking people who already mention you to link. Buying links violates Google’s spam policies and can lead to penalties." },
      { question: "Is AI-generated content allowed in Google Search?", answer: "Google’s guidance says content is judged on quality and helpfulness, not on how it is produced. Using AI to create content mainly to manipulate rankings violates its spam policies, so review, fact-check and add first-hand experience to anything you publish." },
    ],
    relatedServiceSlugs: ["ai-automation", "seo-services", "full-stack-development"],
  },
  {
    slug: "best-ai-tools-for-small-business-2027",
    title: "Best AI tools for small business in 2027: how to choose and what to automate first",
    seoTitle: "Best AI Tools for Small Business in 2027: Practical Guide",
    description:
      "Which AI tools should a small business use in 2027? Compare ChatGPT, Claude, Gemini and Copilot, learn what to automate first, and avoid costly mistakes.",
    excerpt:
      "A plain-English guide for business owners: how to pick AI tools by the job they do, how ChatGPT, Claude, Gemini and Copilot differ, which tasks to automate first, what it costs, what can go wrong and a 90-day rollout plan.",
    category: "AI & business",
    keywords: [
      "best AI tools for small business",
      "AI tools for small business 2027",
      "AI for small business owners",
      "ChatGPT vs Claude vs Gemini",
      "business automation with AI",
      "AI automation for small business",
      "how to start using AI in business",
      "AI tools for business owners",
      "AI business workflow",
    ],
    publishedAt: "2026-11-24",
    updatedAt: "2026-11-24",
    sections: [
      {
        id: "quick-answer",
        heading: "The quick answer",
        blocks: [
          { type: "p", text: "Most small businesses do not need a dozen AI tools. They need **one general-purpose AI assistant** (ChatGPT, Claude, Gemini or Microsoft Copilot), **one automation tool or a small custom workflow** to connect their existing software, and **a few clear rules** about what staff may paste into AI and who reviews the output." },
          { type: "p", text: "Pick tools by the job you need done, not by the loudest headline. Start with one repetitive task that costs you real time every week, such as answering the same customer questions, writing first drafts, summarising calls or moving data between spreadsheets and your CRM. Prove that it saves time, then add the next task." },
          { type: "note", text: "AI products, plans and prices change quickly. Everything in this guide is accurate as of November 2026. Always check each vendor’s own website for current features, pricing and data-handling terms before you buy." },
        ],
      },
      {
        id: "why-now",
        heading: "Why small businesses are adopting AI",
        blocks: [
          { type: "p", text: "AI has moved from experiment to everyday tool for small firms. Intuit’s [2026 AI Impact Report](https://www.intuit.com/blog/global-stories/ai-impact-report/), based on responses from small and mid-sized businesses and QuickBooks data, found that **77% of U.S. small and mid-sized businesses report using AI regularly** as of January 2026, most often for marketing, customer service and bookkeeping." },
          { type: "p", text: "The same surveys show a gap between trying AI and using it well. In a Goldman Sachs [10,000 Small Businesses survey](https://www.goldmansachs.com/pressroom/press-releases/2026/small-businesses-embrace-ai-but-need-training-and-support-to-fully-harness-it), 93% of owners reported a positive business impact, but only 14% had fully integrated AI into core operations. Many owners also said they wanted more training and support to implement it properly." },
          { type: "p", text: "In other words, the opportunity is not simply to “use AI”. It is to connect it to real workflows, measure the result and keep people in control of important decisions. That is where most businesses are still behind, and where a careful approach gives you an advantage." },
          { type: "note", text: "Survey results differ because they measure different things, such as any AI use versus AI used to produce goods or services. Treat the percentages as a direction of travel, not a precise count." },
        ],
      },
      {
        id: "how-to-choose",
        heading: "How to choose an AI tool: five questions",
        blocks: [
          { type: "p", text: "Before comparing brands, answer these five questions. They will eliminate most of the options and save you subscription fees." },
          { type: "ol", items: [
            "**What exact job should it do?** “Help with marketing” is too vague. “Draft a weekly newsletter from my product updates in 30 minutes” is a job you can test.",
            "**What data will it touch?** Public information is low risk. Customer names, invoices, health details, contracts and passwords need strict controls, and sometimes should not be sent to a general tool at all.",
            "**What software do you already use?** If your team lives in Microsoft 365, Google Workspace, Shopify, QuickBooks or WhatsApp, a tool that plugs into them will be adopted faster than one that needs a new routine.",
            "**Who checks the output?** Every AI result needs an owner who reviews it before it reaches a customer, the tax office or your bank. If nobody has time to review, the task is not ready to automate.",
            "**What does success look like in numbers?** Hours saved per week, response time, errors avoided or leads handled. Write the baseline down before you start, so that you can tell if the tool helped.",
          ] },
          { type: "p", text: "Then run a small trial with real examples from your business. Two weeks of testing with ten real tasks tells you far more than any review article, including this one." },
        ],
      },
      {
        id: "general-assistants",
        heading: "ChatGPT, Claude, Gemini and Copilot: how they differ",
        blocks: [
          { type: "p", text: "The four best-known general assistants overlap heavily. All of them can draft and edit text, summarise documents, brainstorm, answer questions and help with spreadsheets or code. The differences that matter to a business are usually about **fit with your existing software, writing style, handling of long documents and the terms for your data**." },
          { type: "ul", items: [
            "**[ChatGPT](https://chatgpt.com/)** from OpenAI is the most widely used assistant and a common default starting point. It has a large ecosystem of add-ons and integrations, and many staff already know it, which lowers training time.",
            "**[Claude](https://claude.com/)** from Anthropic is popular for careful, longer-form writing, analysing long documents and structured work. It also powers Claude Code, a coding assistant I use in my own development work, and a developer API for building custom AI features. My [Claude AI guide](/articles/claude-ai-for-web-development) explains the apps, models and API in more detail.",
            "**[Google Gemini](https://gemini.google.com/)** is the natural choice for teams that already run on Google Workspace, because it can work alongside Gmail, Docs, Sheets and Drive.",
            "**[Microsoft Copilot](https://www.microsoft.com/microsoft-copilot)** is the natural choice for teams that live in Microsoft 365, because it works inside Word, Excel, Outlook and Teams. Microsoft’s bundles and licences change often, so confirm what your plan includes.",
          ] },
          { type: "p", text: "My honest recommendation: choose the one that matches the software your team already uses all day, test a second one on your hardest task, and do not pay for four. If you work with sensitive information, read the vendor’s data and retention terms for the exact plan you will use, because business and consumer plans are often treated differently." },
          { type: "note", text: "Independent “best AI tool” lists are frequently written for affiliate commissions. Prefer your own trial on your own tasks, and use official vendor pages for facts about features and pricing." },
        ],
      },
      {
        id: "tools-by-job",
        heading: "AI tools by business job",
        blocks: [
          { type: "p", text: "Here is where AI usually delivers value fastest in a small business, with the kind of tool to look for in each area." },
          { type: "ul", items: [
            "**Marketing and content:** first drafts of emails, product descriptions, social posts and newsletters, plus image and layout help from tools such as [Canva](https://www.canva.com/). Always edit for your own voice, check every fact and add real examples. Publishing unreviewed AI text can hurt trust and search performance.",
            "**Customer support:** a website or WhatsApp assistant that answers common questions from your own approved information, and hands difficult cases to a person. Give it a clear list of topics it may answer and make it easy to reach a human.",
            "**Sales and lead handling:** tools that summarise enquiries, score leads against your criteria, draft follow-ups and update your CRM. Keep the salesperson in charge of the relationship.",
            "**Finance and admin:** extracting data from invoices and receipts, categorising expenses, drafting reminders and preparing reports. Accounting platforms such as QuickBooks and Xero are adding AI features of their own, so check what you already pay for before buying more.",
            "**Operations and documents:** meeting transcription and summaries, searching internal policies, turning messy PDFs and spreadsheets into structured data and drafting standard operating procedures.",
            "**Research:** AI search and research assistants such as [Perplexity](https://www.perplexity.ai/) or the research modes inside the assistants above, always followed by checking the cited sources yourself.",
            "**Website and SEO:** help planning content, writing metadata, improving page structure and reviewing technical issues. A fast, well-built website matters more than any AI plug-in. See [my SEO services](/services/seo-services) and the [Next.js vs WordPress guide](/articles/nextjs-vs-wordpress-business-website) for choosing the right foundation.",
          ] },
        ],
      },
      {
        id: "automation-platforms",
        heading: "Connecting your tools: automation platforms versus custom workflows",
        blocks: [
          { type: "p", text: "An assistant in a chat window helps one person at a time. **Automation** makes AI part of how your business runs, for example by reading each new enquiry, classifying it, drafting a reply for approval and logging it in your CRM." },
          { type: "p", text: "There are two main ways to build this:" },
          { type: "ul", items: [
            "**No-code automation platforms** such as [Zapier](https://zapier.com/), [Make](https://www.make.com/) and [n8n](https://n8n.io/) connect popular apps with visual workflows. They are fast to start, need little technical skill and suit simple, well-defined flows. Costs can grow with volume, and complex logic becomes hard to manage.",
            "**Custom workflows built with the AI provider’s API** give you full control over data, validation, approval steps, speed and cost. They suit processes that are specific to your business, involve sensitive data or must be reliable at scale. They need a developer, but they avoid per-task platform fees and can become part of your own website or application.",
          ] },
          { type: "p", text: "A sensible path is to prototype with a no-code tool, learn what really works, and move the valuable workflows into custom code when volume, privacy or reliability demands it. If you would like help deciding or building, see my [AI automation service](/services/ai-automation)." },
        ],
      },
      {
        id: "what-to-automate-first",
        heading: "What to automate first: a simple scoring method",
        blocks: [
          { type: "p", text: "List every repetitive task in your business, then score each one from 1 to 5 on three questions:" },
          { type: "ul", items: [
            "**Frequency:** how often does this happen? Daily tasks score high.",
            "**Time cost:** how long does it take each time? Anything over 15 minutes scores high.",
            "**Risk if wrong:** how bad is a mistake? Low-risk tasks score high for automation, because errors are cheap to catch.",
          ] },
          { type: "p", text: "Start with tasks that are frequent, slow and low risk. Good first candidates for most small businesses are:" },
          { type: "ol", items: [
            "Drafting replies to common customer questions, with human approval before sending.",
            "Summarising meetings, calls and long email threads into action lists.",
            "Turning notes into first drafts of quotes, proposals, product descriptions or social posts.",
            "Extracting data from invoices, forms and PDFs into a spreadsheet.",
            "Sorting and tagging incoming enquiries so that urgent ones are seen first.",
          ] },
          { type: "p", text: "Leave high-risk decisions, such as refunds, legal wording, medical advice, pricing exceptions and hiring, to people, with AI only preparing information for them." },
        ],
      },
      {
        id: "real-business-examples",
        heading: "Where AI fits real small-business websites",
        blocks: [
          { type: "p", text: "I build websites and web applications for small businesses, and the same patterns come up repeatedly. The examples below are projects I have built; I describe where AI features typically fit in these types of business, not results the clients have achieved." },
          { type: "ul", items: [
            "**Restaurants and hospitality.** The [Al Khalifa Signature](/projects/al-khalifa-signature) website is a multilingual restaurant site with reservations and WhatsApp contact. A natural AI addition is an assistant that answers menu, opening-hours and booking questions in several languages from approved information, passing special requests to staff.",
            "**Online stores.** [NAYRO](/projects/nayro) is an e-commerce storefront with customer accounts and order tracking, and [Hollywood Nutritions](/projects/hollywood-nutritions) is a product-discovery storefront. Typical AI uses here are product-description drafting, search that understands what shoppers mean, and order-status answers drawn from your own order data. See my [e-commerce development service](/services/ecommerce-development).",
            "**Tools and utilities.** [Lynvado](/projects/lynvado) is a secure media utility, an example of a focused web product. Products like this can add AI features such as smart help, classification or summaries, but only with strict validation and clear user consent.",
          ] },
          { type: "p", text: "In every case, the website itself comes first. An AI assistant on a slow, confusing website will not fix the underlying problem. If you need a site that is ready for both customers and automation, my [small business website service](/services/small-business-websites) is a good starting point." },
        ],
      },
      {
        id: "costs",
        heading: "What AI really costs",
        blocks: [
          { type: "p", text: "Subscription prices are only part of the picture. Plan for four costs:" },
          { type: "ul", items: [
            "**Tool subscriptions:** per-user fees for assistants and add-ons. Start with a small number of seats and add people when the value is proven.",
            "**Usage costs:** custom AI features billed by the amount of text processed. Choosing a smaller model for simple tasks and reusing repeated context can reduce this substantially.",
            "**Setup and integration:** the one-off work of connecting AI to your website, CRM or documents and testing it properly.",
            "**People time:** training, writing guidelines, reviewing outputs and maintaining the workflow. This is the most commonly forgotten cost.",
          ] },
          { type: "p", text: "A useful rule: if a workflow saves less time per month than it costs to run and maintain, stop. Review every tool after 30 and 90 days, and cancel anything your team has not actually used." },
        ],
      },
      {
        id: "risks",
        heading: "Risks to manage before you start",
        blocks: [
          { type: "ul", items: [
            "**Wrong answers (hallucinations).** AI can sound confident and still be wrong. Require review for anything customer-facing, financial or legal.",
            "**Privacy and confidentiality.** Do not paste customer data, passwords, contracts or health information into any tool unless you have checked its data terms and have the right to share that data. Laws such as GDPR and local privacy rules may apply to your business.",
            "**Prompt injection.** An AI that reads emails, web pages or uploaded files can be tricked by instructions hidden inside them. Treat outside content as untrusted data and limit what the AI is allowed to do.",
            "**Over-reliance and skill loss.** Keep your team able to do the core work without the tool, especially for critical processes.",
            "**Customer trust.** Be honest when customers are talking to an AI, and always offer a route to a person.",
            "**Vendor lock-in.** Keep your data and prompts in formats you control so that you can switch providers.",
          ] },
          { type: "p", text: "Write a one-page AI policy for your team. It should say which tools are approved, what data must never be shared, who reviews outputs and who to ask when unsure." },
        ],
      },
      {
        id: "build-or-buy",
        heading: "When to use off-the-shelf tools and when to hire a developer",
        blocks: [
          { type: "p", text: "Off-the-shelf tools are the right choice when the task is common, the data is low risk and the volume is small. Hire a developer when one or more of these is true:" },
          { type: "ul", items: [
            "Your process is specific to your business and no tool fits it.",
            "The workflow handles sensitive or regulated data.",
            "You need AI inside your own website, app or customer portal.",
            "Per-task platform fees are growing faster than the value.",
            "You need logging, approvals, error handling and proper testing.",
          ] },
          { type: "p", text: "A good developer will begin by asking what the task is, what a correct result looks like and where a person must stay in control, not by selling you a model. That is how I approach every [full-stack development](/services/full-stack-development) and AI project." },
        ],
      },
      {
        id: "90-day-plan",
        heading: "A 90-day AI rollout plan",
        blocks: [
          { type: "ol", items: [
            "**Days 1–14, choose and baseline.** List your repetitive tasks, score them, pick one and record how long it takes today. Write your one-page AI policy.",
            "**Days 15–30, pilot.** Trial one assistant on that single task with a small group, using real examples. Measure time saved and error rate.",
            "**Days 31–60, improve and connect.** Refine your prompts and instructions, then connect the workflow to your tools through a no-code platform or a custom build. Add human approval steps.",
            "**Days 61–90, expand carefully.** If the numbers are good, add a second task. If not, change the approach or stop. Hold a short review, and train the rest of the team.",
          ] },
          { type: "p", text: "Keep the scope small. A reliable workflow that saves two hours a week is worth more than an ambitious system nobody trusts." },
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes to avoid",
        blocks: [
          { type: "ul", items: [
            "Buying several tools before you have proved one use case.",
            "Letting AI send messages to customers without review.",
            "Skipping measurement, so nobody knows if it is working.",
            "Giving staff no guidance, so they guess what data is safe to share.",
            "Choosing tools from affiliate rankings rather than a trial on your own tasks.",
            "Ignoring your website, even though it is the place where most customers first judge you.",
          ] },
        ],
      },
      {
        id: "next-step",
        heading: "Your next step",
        blocks: [
          { type: "p", text: "Pick one task from your list today, test it with one assistant for two weeks and measure the time saved. That small experiment will teach you more than reading any list of tools." },
          { type: "p", text: "If you want help turning a repetitive process into a reliable AI workflow, or building a fast website that is ready for it, [tell me what you are trying to improve](/contact) and I will suggest a practical first version. If you are a developer or freelancer looking to earn from these skills instead, read [how to make money with Claude AI in 2027](/articles/make-money-with-claude-ai-2027). You can also browse [all my services](/services)." },
        ],
      },
    ],
    faqs: [
      { question: "What is the best AI tool for a small business?", answer: "There is no single best tool. For most small businesses, the best general assistant is the one that fits the software they already use: Microsoft Copilot for Microsoft 365, Gemini for Google Workspace, or ChatGPT or Claude as independent assistants. Test your top choice on real tasks before you pay for more seats." },
      { question: "How much does it cost to use AI in a small business?", answer: "Costs include tool subscriptions, usage fees for custom AI features, setup and integration work, and the time your team spends on training and review. Prices change often, so check each vendor’s website. Start with one tool and a small number of users, and keep it only if it saves more than it costs." },
      { question: "Is it safe to put customer data into ChatGPT, Claude or Gemini?", answer: "It depends on the plan, the vendor’s data terms and the laws that apply to your business. As a rule, do not paste sensitive or regulated data into any tool until you have read its data and retention policy and confirmed you are allowed to share the information. Use a written policy so staff know what is allowed." },
      { question: "Will AI replace my employees?", answer: "Surveys of small businesses mainly report productivity gains, such as faster drafting and less repetitive admin, rather than large-scale job replacement. The best results come from using AI to remove repetitive tasks so that people can spend more time on customers and decisions." },
      { question: "Should I use Zapier or build a custom AI workflow?", answer: "Use a no-code platform such as Zapier, Make or n8n to prototype quickly and for simple flows. Consider a custom workflow when the process is specific to your business, handles sensitive data, must be very reliable or when per-task fees become expensive." },
      { question: "How do I start using AI in my business?", answer: "Pick one repetitive, low-risk task that takes real time every week, trial one assistant on it for two weeks with real examples, measure the time saved and add human review. Expand to a second task only when the first one works." },
      { question: "Can AI help my website get more customers?", answer: "It can help with content planning, metadata, customer questions and lead handling. But rankings and conversions depend mostly on a fast, clear website, genuinely helpful content and trust signals. AI is a support tool, not a replacement for a well-built site." },
    ],
    relatedServiceSlugs: ["ai-automation", "small-business-websites", "seo-services"],
  },
  {
    slug: "web-development-in-2027-what-is-changing",
    title: "Web development in 2027: what is changing and what to do about it",
    seoTitle: "Web Development in 2027: What's Changing and What to Do",
    description:
      "What will web development look like in 2027? AI coding tools, Core Web Vitals, accessibility law and frameworks, plus what business owners and beginners should do.",
    excerpt:
      "A practical look at how web development is changing heading into 2027: AI-assisted coding, performance, accessibility rules, modern frameworks and search, with clear next steps for business owners and for people learning to become web developers.",
    category: "Web development",
    keywords: [
      "web development 2027",
      "web development trends",
      "website development",
      "web developer",
      "web designer vs web developer",
      "what is web development",
      "how to learn web development",
      "web development for beginners",
      "full stack web development",
      "web development jobs",
    ],
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    sections: [
      {
        id: "quick-answer",
        heading: "The quick answer",
        blocks: [
          { type: "p", text: "Nobody can forecast 2027 exactly, and I found no reliable 2027 forecast from a primary source while researching this guide. What I can show you is what is **already changing** as of November 2026 and will shape the next year of web development:" },
          { type: "ul", items: [
            "**AI coding tools are now normal.** Most developers use them, but many do not fully trust the output, so review and testing matter more, not less.",
            "**Speed is measured by real users.** Google’s Core Web Vitals, including Interaction to Next Paint (INP), reward sites that respond quickly.",
            "**Accessibility is becoming a legal and commercial issue**, not just good practice, especially if you sell to customers in the European Union.",
            "**Server-first frameworks** such as Next.js send less JavaScript to the browser and make content easier for search engines to read.",
            "**Search is changing.** Clear structure, helpful content and trust signals matter more as AI answers sit beside the normal results.",
          ] },
          { type: "p", text: "If you own a business, the practical advice is to make your site fast, accessible, easy to update and genuinely useful. If you want to become a developer, learn the fundamentals first and build real projects, because tools change faster than the basics." },
          { type: "note", text: "This guide reflects what I could verify in November 2026. Tools, rules and prices change, so check the linked sources before you make a business or legal decision." },
        ],
      },
      {
        id: "what-is-web-development",
        heading: "What is web development? A quick refresher",
        blocks: [
          { type: "p", text: "**Web development** is building and maintaining websites and web applications. Website development covers everything from a simple business site to a complex online platform where users sign in, pay and manage data." },
          { type: "p", text: "People use several job titles, and they overlap:" },
          { type: "ul", items: [
            "**Front-end developer:** builds what visitors see and use in the browser, with HTML, CSS and JavaScript, usually with a framework such as React.",
            "**Back-end developer:** builds the servers, databases, APIs and logic behind the scenes, for example with Node.js and PostgreSQL.",
            "**Full-stack developer:** works on both sides. Full-stack web development suits small teams and businesses that want one person to own the whole build.",
            "**Web designer:** plans the look, layout and user experience. Many designers also write some code, and many developers also design.",
          ] },
          { type: "p", text: "So the difference between a **web designer and a web developer** is mostly focus. A designer decides how the site should look and feel, and a developer makes it work, load fast and stay secure. For a business website you usually need both skills, either in one person or in a small team." },
        ],
      },
      {
        id: "ai-coding",
        heading: "Change 1: AI is part of everyday development",
        blocks: [
          { type: "p", text: "The [2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/ai), the most recent edition I could verify, found that 84% of respondents use or plan to use AI tools in their development process, up from 76% the year before. About half of professional developers (51%) use them daily." },
          { type: "p", text: "The same survey also found trust is low. More developers said they distrust the accuracy of AI output (46%) than trust it (33%). That matches my experience: AI is very good at first drafts, repetitive code and explaining unfamiliar code, and it still makes confident mistakes." },
          { type: "p", text: "**What this means in 2027:**" },
          { type: "ul", items: [
            "Building a basic site is faster than it used to be, so clients rightly expect quicker delivery and clearer pricing.",
            "The valuable skills are shifting to judgement: deciding what to build, reviewing code, testing, security and performance.",
            "A site that was generated quickly but never reviewed can look fine and still be slow, inaccessible or insecure. Ask any developer or agency how they check AI-assisted work.",
          ] },
          { type: "p", text: "I use AI tools myself and wrote about how in [Claude AI for web development: a practical guide](/articles/claude-ai-for-web-development). My rule is simple: AI can draft, but a person is responsible for what ships." },
        ],
      },
      {
        id: "performance",
        heading: "Change 2: Performance is judged on real users",
        blocks: [
          { type: "p", text: "Google measures real-world page experience with the Core Web Vitals. The three metrics are loading (Largest Contentful Paint, good at 2.5 seconds or less), visual stability (Cumulative Layout Shift, good at 0.1 or less) and responsiveness. For responsiveness, Interaction to Next Paint replaced First Input Delay, and [web.dev](https://web.dev/articles/optimize-inp) describes an INP of 200 milliseconds or less as good, measured at the 75th percentile of real page loads." },
          { type: "p", text: "INP matters because it looks at **every** interaction during a visit, not just the first one. Heavy JavaScript, large third-party scripts and badly built menus or forms are common causes of a poor score." },
          { type: "p", text: "**What to do:**" },
          { type: "ul", items: [
            "Check your site on a real mid-range phone, not only on a fast laptop.",
            "Remove scripts and widgets you do not need. Every tracker, chat widget and ad script has a cost.",
            "Ask your developer for your actual Core Web Vitals numbers from real visitors, for example from Search Console or a speed monitoring tool, not only a one-off lab test.",
          ] },
          { type: "p", text: "Speed is not a guarantee of rankings, but a slow site loses visitors before they read a word. I hold this portfolio site to Core Web Vitals targets (LCP 2.2 seconds or less, INP 150 milliseconds or less, CLS 0.05 or less) and measure them with real-user data." },
        ],
      },
      {
        id: "accessibility",
        heading: "Change 3: Accessibility is no longer optional",
        blocks: [
          { type: "p", text: "Accessibility means people with disabilities, including those who use screen readers or only a keyboard, can use your site. The standard most people follow is the Web Content Accessibility Guidelines (WCAG), and version 2.2 is the current one." },
          { type: "p", text: "In the European Union, the European Accessibility Act has applied since 28 June 2025 to many consumer-facing digital products and services, including e-commerce. It points to the European standard EN 301 549, which builds on WCAG 2.1 level AA. Some very small businesses providing services may be exempt, and existing rules differ by country and by product. I am not a lawyer, so check the rules for your own situation." },
          { type: "p", text: "Even without a legal requirement, accessibility is good business. The fixes also improve usability for everyone: clear headings, readable contrast, keyboard-friendly menus, labelled form fields and descriptive link text." },
          { type: "p", text: "I build this site to a WCAG 2.2 AA target and honour reduced-motion preferences, and I implement accessible page structure and navigation on client sites such as [Luex Healthcare](/projects/luex-healthcare)." },
        ],
      },
      {
        id: "frameworks",
        heading: "Change 4: Server-first frameworks and fewer JavaScript bundles",
        blocks: [
          { type: "p", text: "For years, many sites sent a large JavaScript bundle to the browser and built the page there. The trend now is the opposite: render as much as possible on the server and send JavaScript only where the page really needs interaction." },
          { type: "p", text: "[Next.js](/services/nextjs-development) and React Server Components are a popular way to do this. Benefits include faster first loads, content that search engines can read without running scripts, and a single codebase for pages and APIs. Other good frameworks exist, so the right choice depends on your team and project." },
          { type: "p", text: "If you are comparing options for a business site, read [Next.js vs WordPress for business websites](/articles/nextjs-vs-wordpress-business-website). WordPress is still a sensible choice when non-technical staff need to edit lots of content every day." },
          { type: "p", text: "A tool does not make a site good. A fast, well-structured site built with a simple stack beats a slow site built with the newest one." },
        ],
      },
      {
        id: "search",
        heading: "Change 5: Search is changing, but the basics still win",
        blocks: [
          { type: "p", text: "More searches now show AI-generated summaries beside or above the usual blue links. Nobody outside the search companies knows exactly how those features will evolve, so be careful with anyone who promises a secret formula for 2027." },
          { type: "p", text: "What reliably helps, whatever the interface looks like:" },
          { type: "ul", items: [
            "**Pages that answer a specific question clearly,** in plain language, written for people first.",
            "**Clean technical foundations:** one H1 per page, descriptive titles and meta descriptions, canonical URLs, a sitemap and working internal links.",
            "**Structured data** such as Article, FAQ, Organization and Breadcrumb markup, so machines can understand the page.",
            "**Real proof:** actual projects, named authors and honest claims. I list my work on the [projects page](/projects) rather than invent numbers.",
            "**Specific topics and locations** instead of broad terms. “Web developer” is dominated by big marketplaces, while “website developer for restaurants in Johor Bahru” is a smaller and more winnable search.",
          ] },
          { type: "p", text: "For a deeper look at the technical side, see my [SEO services](/services/seo-services)." },
        ],
      },
      {
        id: "business-owners",
        heading: "What business owners should do in 2027",
        blocks: [
          { type: "p", text: "You do not need to chase every trend. Use this checklist to decide whether your current site is ready:" },
          { type: "ol", items: [
            "**Measure first.** Check your Core Web Vitals and run an accessibility check on your most important pages.",
            "**Fix the money pages.** Make sure your homepage, service pages and contact route load fast on a phone and say clearly what you do and who you do it for.",
            "**Make updating easy.** If changing a price or a phone number takes a developer a week, your setup is working against you.",
            "**Add useful content.** Publish pages that answer the real questions customers ask before they buy.",
            "**Keep third-party scripts under control.** Review analytics, chat, ads and widgets every few months.",
            "**Decide rebuild or repair.** A rebuild makes sense when the site is slow, hard to update or cannot be made accessible. Otherwise, targeted fixes cost less.",
          ] },
          { type: "p", text: "If you want an expert opinion, read about my [web development service](/services/web-development) or [small business websites](/services/small-business-websites). I work with clients in Kuwait and around the world, and you can see examples such as the [Al Khalifa Signature restaurant website](/projects/al-khalifa-signature)." },
        ],
      },
      {
        id: "learners",
        heading: "How to learn web development in 2027 (for beginners)",
        blocks: [
          { type: "p", text: "If you are asking how to learn web development, the good news is that the fundamentals have not changed. The order I recommend:" },
          { type: "ol", items: [
            "**HTML and CSS.** Learn semantic HTML, layout with Flexbox and Grid, and responsive design. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development) is a free, reliable place to start.",
            "**JavaScript.** Learn the language itself before a framework: variables, functions, arrays, objects, the DOM and fetching data.",
            "**Git and the command line.** You will use both in every job.",
            "**TypeScript and React.** These are common in professional teams. Add Next.js when you are comfortable with React.",
            "**A backend basics project.** Build a small API with Node.js and a database to understand how data flows.",
            "**Accessibility and performance.** Treat them as part of the basics, not extras.",
          ] },
          { type: "p", text: "Use AI as a tutor, not as a shortcut. Ask it to explain code and then rebuild the solution yourself. If you let it write everything, you will not learn to debug, and debugging is most of the job." },
          { type: "p", text: "**About jobs:** I cannot promise what the web development job market will look like in 2027. Competition for junior roles is real, and employers often want proof that you can finish things. The most useful thing you can do is publish a small number of real, working projects with clear write-ups, and contribute where you can. Freelancing is another route, and I explain one angle in [how to make money with Claude AI in 2027](/articles/make-money-with-claude-ai-2027)." },
        ],
      },
      {
        id: "wont-change",
        heading: "What will not change",
        blocks: [
          { type: "ul", items: [
            "Visitors want a site that loads quickly, makes sense and works on their phone.",
            "Clear writing and honest claims build trust.",
            "Security, backups and maintenance still need an owner.",
            "Understanding the business problem matters more than the tool you choose.",
          ] },
          { type: "p", text: "Tools will keep changing in 2027. The developers and businesses that do well will be the ones who keep the basics strong and adopt new tools carefully." },
        ],
      },
      {
        id: "next-step",
        heading: "Your next step",
        blocks: [
          { type: "p", text: "If you own a website, pick one page, check how fast and accessible it is today and fix the biggest problem first. If you are learning, build one small real project this month and publish it." },
          { type: "p", text: "If you would like help with either a new site or an honest review of your current one, [contact me](/contact) with your website address and what you want to improve, or browse my [full-stack development services](/services/full-stack-development)." },
        ],
      },
    ],
    faqs: [
      { question: "What is web development?", answer: "Web development is the work of building and maintaining websites and web applications. It includes front-end work (what users see), back-end work (servers, databases and APIs) and the deployment, security and performance that keep a site running well." },
      { question: "What is the difference between a web designer and a web developer?", answer: "A web designer focuses on layout, visual style and user experience. A web developer writes the code that makes the design work, load quickly and connect to data. The roles overlap, and small projects often use one person for both." },
      { question: "Will AI replace web developers by 2027?", answer: "No one can say for certain. Surveys show most developers already use AI tools, but many do not fully trust the output, and people are still needed to decide what to build, review code, test, secure and maintain it. The work is changing, especially at entry level, so building judgement and real projects is the safest path." },
      { question: "Is web development a good career in 2027?", answer: "It can be, but there are no guarantees. Competition for junior roles is real and tools change quickly. People who learn the fundamentals, keep learning and can show finished projects tend to be in the best position. Check current job listings in your own country before you decide." },
      { question: "How long does it take to learn web development?", answer: "It depends on your time and goals. Many people can build simple pages within a few weeks, but becoming job-ready for professional work usually takes many months of steady practice, including JavaScript, a framework, Git and several real projects." },
      { question: "Which programming languages should I learn first for web development?", answer: "Start with HTML, CSS and JavaScript. Then add TypeScript and a framework such as React, and later a backend language or runtime such as Node.js. Choose depth in a few tools over shallow knowledge of many." },
      { question: "Should I rebuild my business website in 2027?", answer: "Rebuild when the site is slow, hard to update, cannot be made accessible or no longer matches your business. If it still works well, targeted improvements to speed, content and accessibility usually cost less and carry less risk." },
    ],
    relatedServiceSlugs: ["web-development", "small-business-websites", "nextjs-development"],
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
