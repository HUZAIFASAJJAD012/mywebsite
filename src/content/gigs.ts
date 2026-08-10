export type GigIcon = "landing" | "commerce" | "automation" | "seo" | "deployment" | "bots";

export type Gig = {
  slug: string;
  title: string;
  description: string;
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
    priceLabel: "From $500",
    startingPrice: 500,
    icon: "automation",
    deliverables: ["Workflow discovery", "API and tool integrations", "Human review checkpoints", "Testing and documentation"],
  },
  {
    slug: "seo-services",
    title: "SEO services",
    description: "Technical and on-page improvements that make your website easier for search engines and customers to understand.",
    priceLabel: "From $150",
    startingPrice: 150,
    icon: "seo",
    deliverables: ["Technical SEO review", "Metadata and content structure", "Schema markup where relevant", "Indexing and sitemap checks"],
  },
  {
    slug: "deployment-devops",
    title: "Deployment & DevOps",
    description: "A dependable path from source code to production, including hosting configuration and release workflows.",
    priceLabel: "From $100",
    startingPrice: 100,
    icon: "deployment",
    deliverables: ["Production deployment", "Domain and environment setup", "CI/CD configuration", "Monitoring-ready handoff"],
  },
  {
    slug: "bots-browser-extensions",
    title: "Bots & browser extensions",
    description: "Purpose-built bots and browser tools that automate tasks, connect services or improve everyday workflows.",
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
