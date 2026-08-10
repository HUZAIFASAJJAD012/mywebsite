export type GigIcon = "landing" | "commerce" | "automation" | "seo" | "deployment" | "bots";

export type Gig = {
  slug: string;
  title: string;
  description: string;
  searchTitle: string;
  searchDescription: string;
  searchTerms: string[];
  intro: string;
  idealFor: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
  priceLabel: string;
  startingPrice?: number;
  icon: GigIcon;
  featured?: boolean;
  deliverables: string[];
};

export const gigs: Gig[] = [
  {
    slug: "business-landing-page",
    title: "Business landing page",
    description: "A focused, responsive page designed to explain your offer clearly and turn visitors into inquiries.",
    searchTitle: "Business Landing Page Development from $100",
    searchDescription: "Hire Huzaifa Sajjad to build a responsive, SEO-ready business landing page from $100 with clear calls to action and contact journeys.",
    searchTerms: ["business landing page developer", "freelance landing page development", "responsive landing page service"],
    intro: "This service is for businesses that need a professional web presence without the complexity of a large website. The page is structured around one clear offer, the people it serves and the action visitors should take next.",
    idealFor: ["New businesses establishing an online presence", "Service providers generating calls or enquiries", "Campaigns launching a focused offer", "Existing businesses replacing an outdated single page"],
    approach: ["Clarify the offer, audience and primary conversion goal", "Build the responsive page and essential search metadata", "Connect the agreed contact journey and prepare the page for launch"],
    faqs: [
      { question: "What is included in the $100 starting price?", answer: "The starting scope covers a focused responsive page, clear calls to action, a contact or WhatsApp journey and essential on-page SEO. Custom design systems, copywriting, extra sections or integrations may change the quote." },
      { question: "Can you use my existing branding and content?", answer: "Yes. Existing logos, colours, photography and approved copy can be incorporated. If content or branding still needs to be created, that work is scoped separately before development begins." },
    ],
    priceLabel: "From $100",
    startingPrice: 100,
    icon: "landing",
    featured: true,
    deliverables: ["Responsive single-page build", "Clear calls to action", "Contact or WhatsApp journey", "Essential on-page SEO"],
  },
  {
    slug: "full-ecommerce-development",
    title: "Full e-commerce development",
    description: "A complete online store with product discovery, purchasing journeys and the integrations your operation needs.",
    searchTitle: "Full E-commerce Website Development from $2,000",
    searchDescription: "Custom e-commerce website development from $2,000, including responsive storefronts, product discovery, checkout integration and technical SEO.",
    searchTerms: ["freelance ecommerce developer", "custom ecommerce website development", "online store developer"],
    intro: "A full e-commerce build connects the customer-facing store with the operational systems required to sell online. The exact architecture depends on catalogue size, payments, fulfilment, content management and the integrations your business already uses.",
    idealFor: ["Businesses launching a new online store", "Retailers replacing a limited storefront", "Brands needing custom purchasing journeys", "Teams connecting commerce with external systems"],
    approach: ["Map products, customers, checkout and operational requirements", "Develop the storefront, commerce logic and agreed integrations", "Test purchasing journeys and prepare production deployment"],
    faqs: [
      { question: "Why does e-commerce development start at $2,000?", answer: "A production store usually includes catalogue structure, responsive interfaces, cart and checkout behaviour, payment integration, technical SEO and deployment. Product volume, custom logic and external integrations determine the final scope." },
      { question: "Can you work with an existing e-commerce platform?", answer: "Yes. The discovery step determines whether extending the current platform or building a different solution is the more dependable option for the required customer and operational journeys." },
    ],
    priceLabel: "From $2,000",
    startingPrice: 2000,
    icon: "commerce",
    featured: true,
    deliverables: ["Responsive storefront", "Product and category experience", "Cart and checkout integration", "Technical SEO foundation"],
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    description: "Practical AI workflows that reduce repetitive work and connect the tools your team already uses.",
    searchTitle: "AI Automation Services for Business from $500",
    searchDescription: "Business AI automation services from $500 for practical workflows, API integrations, review checkpoints, testing and documentation.",
    searchTerms: ["AI automation developer", "business workflow automation service", "custom AI integration"],
    intro: "AI automation is most useful when it supports a defined workflow rather than adding intelligence without a business purpose. Each engagement starts by identifying the repetitive task, the data involved and where human review must remain in control.",
    idealFor: ["Teams repeating structured administrative work", "Businesses connecting disconnected software tools", "Products adding a focused AI-assisted feature", "Operations that need reviewable automated workflows"],
    approach: ["Document the current workflow, inputs, risks and success criteria", "Build the automation with appropriate validation and human checkpoints", "Test edge cases and provide an understandable operational handoff"],
    faqs: [
      { question: "What can an AI automation connect to?", answer: "The answer depends on the APIs and permissions offered by your current tools. Common projects connect forms, databases, internal systems, messaging services or AI models through a controlled workflow." },
      { question: "Will the automation run without human review?", answer: "Only where that is appropriate for the risk and requirements. Sensitive or consequential actions should include validation, logging and a human approval step rather than relying on unrestricted model output." },
    ],
    priceLabel: "From $500",
    startingPrice: 500,
    icon: "automation",
    deliverables: ["Workflow discovery", "API and tool integrations", "Human review checkpoints", "Testing and documentation"],
  },
  {
    slug: "seo-services",
    title: "SEO services",
    description: "Technical and on-page improvements that make your website easier for search engines and customers to understand.",
    searchTitle: "Technical & On-Page SEO Services from $150",
    searchDescription: "Technical and on-page SEO services from $150, covering crawlability, metadata, content structure, schema, indexing and sitemap checks.",
    searchTerms: ["technical SEO service", "on-page SEO specialist", "website SEO audit developer"],
    intro: "SEO work begins by making the site accessible, understandable and genuinely useful for the searches it should answer. Recommendations are based on technical evidence and visible page content—not keyword stuffing, fabricated authority or guaranteed rankings.",
    idealFor: ["Websites that are not appearing for relevant searches", "New sites preparing for search-engine discovery", "Businesses improving service-page relevance", "Teams resolving crawl, metadata or structured-data issues"],
    approach: ["Audit crawlability, indexability, metadata, page structure and performance", "Prioritise fixes by search impact and implementation effort", "Implement the agreed improvements and document submission steps"],
    faqs: [
      { question: "Can you guarantee a first-page ranking?", answer: "No legitimate SEO service can guarantee a specific organic position. Search engines control crawling, indexing and ranking. The work improves the signals your site controls and creates a stronger foundation for relevant visibility." },
      { question: "Does SEO work immediately?", answer: "Technical changes can be deployed immediately, but search engines must recrawl and reassess the pages. Discovery and ranking changes can take days, weeks or longer depending on the site, query and competitive landscape." },
    ],
    priceLabel: "From $150",
    startingPrice: 150,
    icon: "seo",
    deliverables: ["Technical SEO review", "Metadata and content structure", "Schema markup where relevant", "Indexing and sitemap checks"],
  },
  {
    slug: "deployment-devops",
    title: "Deployment & DevOps",
    description: "A dependable path from source code to production, including hosting configuration and release workflows.",
    searchTitle: "Website Deployment & DevOps Services from $100",
    searchDescription: "Website deployment and DevOps support from $100 for hosting, domains, environment configuration, CI/CD workflows and production handoff.",
    searchTerms: ["website deployment service", "freelance DevOps developer", "Vercel website deployment"],
    intro: "A deployment should make the application available through a repeatable, understandable process—not depend on a one-time manual upload. The service is scoped around the current codebase, hosting platform, domain and operational requirements.",
    idealFor: ["Completed websites that need production hosting", "Teams moving between hosting providers", "Projects requiring domain and environment configuration", "Repositories that need a repeatable release workflow"],
    approach: ["Review the application, build requirements and target environment", "Configure hosting, environment values, domain and release workflow", "Validate the production build and provide the agreed handoff"],
    faqs: [
      { question: "Does the deployment price include hosting fees?", answer: "No. The starting price covers the agreed technical deployment work. Hosting, domain, email or other third-party subscription charges remain payable directly to their providers." },
      { question: "Can you deploy an existing project?", answer: "Yes, after confirming that the source code builds correctly and that required accounts, secrets, databases and external services are available for the target environment." },
    ],
    priceLabel: "From $100",
    startingPrice: 100,
    icon: "deployment",
    deliverables: ["Production deployment", "Domain and environment setup", "CI/CD configuration", "Monitoring-ready handoff"],
  },
  {
    slug: "bots-browser-extensions",
    title: "Bots & browser extensions",
    description: "Purpose-built bots and browser tools that automate tasks, connect services or improve everyday workflows.",
    searchTitle: "Custom Bot & Browser Extension Development from $300",
    searchDescription: "Custom bot and browser extension development from $300, including feasibility review, API integration, testing and launch support.",
    searchTerms: ["custom bot developer", "browser extension developer", "Chrome extension development service"],
    intro: "Bots and browser extensions are useful when a small, focused tool can remove friction from a repeated task or connect an existing service. Feasibility, platform rules, permissions and data handling are reviewed before the implementation is proposed.",
    idealFor: ["Teams automating a permitted repetitive workflow", "Businesses connecting messaging tools with APIs", "Users needing a focused browser productivity tool", "Products extending an existing web-based process"],
    approach: ["Confirm the workflow, platform policies, permissions and technical feasibility", "Develop the bot or extension with the agreed integrations", "Test expected scenarios and prepare installation or launch guidance"],
    faqs: [
      { question: "Can every browser task be automated?", answer: "No. Browser permissions, service terms, authentication, anti-abuse protections and technical limitations affect feasibility. The proposed scope only includes workflows that can be implemented responsibly." },
      { question: "Can you publish a browser extension to a store?", answer: "Launch support can be included, but approval is controlled by the relevant browser marketplace. The extension must meet that marketplace’s policies, disclosure and permission requirements." },
    ],
    priceLabel: "From $300",
    startingPrice: 300,
    icon: "bots",
    deliverables: ["Requirements and feasibility review", "Bot or extension development", "API integration", "Testing and launch support"],
  },
];

export const gigFaqs = [
  {
    question: "Are these fixed prices?",
    answer: "The listed prices are starting points for a clearly defined scope. Your final quote depends on design, content, integrations, custom features and delivery requirements.",
  },
  {
    question: "What do you need before starting?",
    answer: "A short description of your business, the outcome you want, examples you like and any deadline you are working toward are enough to begin the conversation.",
  },
  {
    question: "Can you work with clients outside Pakistan?",
    answer: "Yes. Projects can be planned and delivered remotely for clients worldwide, with communication handled through email, WhatsApp or an agreed collaboration tool.",
  },
  {
    question: "Can you improve or deploy an existing project?",
    answer: "Yes. Existing websites and applications can be reviewed for SEO, deployment, performance, integrations or targeted feature work before a scope is proposed.",
  },
] as const;
