export type Project = {
  slug: string;
  title: string;
  seoTitle?: string;
  shortDescription: string;
  summary: string;
  category: string[];
  role: string[];
  stack: string[];
  year?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  coverImage?: string;
  coverTone: "indigo" | "cyan" | "violet" | "teal" | "blue" | "rose";
  challenge: string;
  solution: string;
  responsibilities: string[];
  highlights?: string[];
  status: "live" | "private" | "archived";
  serviceSlugs?: string[];
};

export const projects: Project[] = [
  {
    slug: "al-khalifa-signature",
    title: "Al Khalifa Signature",
    seoTitle: "Al Khalifa Restaurant Website Case Study",
    shortDescription: "A modern multilingual restaurant website for an Arabic cuisine destination in Johor Bahru, Malaysia.",
    summary: "A clean, responsive and professional restaurant website that helps customers explore signature dishes, browse the menu, discover event services, reserve tables and connect directly.",
    category: ["Full Stack"],
    role: ["Full-Stack Web Developer"],
    stack: ["Responsive web", "Multilingual support", "Reservations", "WhatsApp integration"],
    liveUrl: "https://restoranalkhalifa.com/",
    featured: true,
    coverImage: "/project1.png",
    coverTone: "rose",
    challenge: "Bring the restaurant’s signature dishes, complete menu, event services, gallery, reservation flow and contact information together in one clear customer journey.",
    solution: "A responsive restaurant experience with structured menu discovery, table-reservation access, multilingual support and direct WhatsApp communication.",
    responsibilities: [
      "Designed and developed the complete restaurant website",
      "Structured signature-dish and full-menu sections",
      "Implemented event-service and gallery experiences",
      "Built clear table-reservation and contact journeys",
      "Added multilingual support and WhatsApp chat access",
      "Delivered responsive behaviour across screen sizes",
    ],
    status: "live",
    serviceSlugs: ["web-development", "small-business-websites", "full-stack-development"],
  },
  {
    slug: "luex-healthcare",
    title: "Luex Healthcare",
    seoTitle: "Luex Healthcare Website Development Case Study",
    shortDescription: "A modern healthcare website that brings products, science, global presence and useful resources into one clear digital experience.",
    summary: "A responsive corporate healthcare platform designed and developed with a calm editorial interface, structured content pathways and accessible navigation across the organisation’s key areas.",
    category: ["Web Development", "Healthcare"],
    role: ["Full-Stack Web Developer"],
    stack: ["Next.js", "Tailwind CSS", "Custom development", "Responsive design"],
    liveUrl: "https://luex-healthcare.vercel.app/",
    featured: true,
    coverImage: "/project2.png",
    coverTone: "teal",
    challenge: "Present a broad healthcare organisation clearly while giving visitors direct paths to product information, scientific content, global presence, impact work and educational resources.",
    solution: "A custom Next.js and Tailwind CSS experience with a responsive editorial layout, focused information hierarchy, reusable content sections and clear calls to action throughout the site.",
    responsibilities: [
      "Built the website with Next.js and Tailwind CSS",
      "Created the responsive interface with custom code",
      "Structured navigation across company, product and resource content",
      "Developed reusable sections for therapeutic areas and healthcare information",
      "Implemented accessible page structure and mobile navigation",
      "Prepared and deployed the production website on Vercel",
    ],
    status: "live",
    serviceSlugs: ["nextjs-development", "web-development", "full-stack-development"],
  },
  {
    slug: "hollywood-nutritions",
    title: "Hollywood Nutritions",
    seoTitle: "Hollywood Nutritions E-commerce Case Study",
    shortDescription: "A premium wellness storefront with product discovery, goal-based browsing, bundles and educational content for confident everyday choices.",
    summary: "A responsive health and wellness e-commerce experience that connects product browsing, detailed ingredient information, curated bundles and editorial resources in one cohesive platform.",
    category: ["E-Commerce", "Web Development"],
    role: ["Full-Stack Web Developer"],
    stack: ["Next.js", "TypeScript", "E-commerce UX", "Responsive design"],
    liveUrl: "https://hollywood-nutritions.vercel.app/",
    featured: true,
    coverImage: "/project3.png",
    coverTone: "rose",
    challenge: "Create a premium wellness shopping experience that keeps product benefits, ingredients and purchasing journeys clear while supporting multiple ways to discover the catalogue.",
    solution: "A custom Next.js storefront with best-seller discovery, wellness-goal pathways, product bundles, wishlist and cart interactions, ingredient education and a connected wellness content hub.",
    responsibilities: [
      "Built the responsive storefront and reusable commerce interface",
      "Structured product discovery across categories, goals and bundles",
      "Implemented product details, wishlist and cart interactions",
      "Created ingredient, quality and wellness education sections",
      "Developed accessible desktop and mobile navigation",
      "Prepared and deployed the production website on Vercel",
    ],
    status: "live",
    serviceSlugs: ["ecommerce-development", "nextjs-development", "web-development"],
  },
  {
    slug: "lynvado",
    title: "Lynvado",
    seoTitle: "Lynvado Web Application Development Case Study",
    shortDescription: "A secure public-media download utility that surfaces the formats a source actually provides and delivers files through temporary links.",
    summary: "A responsive web application for checking authorized public media links, comparing native source formats and completing downloads through a clear, privacy-conscious workflow.",
    category: ["Web Application", "Media Tool"],
    role: ["Full-Stack Web Developer"],
    stack: ["Next.js", "TypeScript", "Secure media processing", "Responsive design"],
    liveUrl: "https://www.lynvado.online/",
    featured: false,
    coverImage: "/project4.png",
    coverTone: "blue",
    challenge: "Make public-media downloads direct and understandable without overstating available quality, retaining files unnecessarily or implying access to private and protected sources.",
    solution: "A focused Next.js product that validates public links, presents only source-reported formats from 480p through 8K, communicates processing status and provides private, expiring download links.",
    responsibilities: [
      "Built the responsive product interface and download workflow",
      "Implemented public-link input and source-format discovery",
      "Presented native quality options without artificial upscaling claims",
      "Created processing, restoration and temporary-download states",
      "Developed dark and light themes with accessible navigation",
      "Added safety, acceptable-use, copyright and support content",
      "Prepared and deployed the production website on Vercel",
    ],
    highlights: [
      "Source-true quality options",
      "Temporary secure downloads",
      "No account required",
    ],
    status: "live",
    serviceSlugs: ["full-stack-development", "nextjs-development", "mvp-development"],
  },
  {
    slug: "pigs-can-fly",
    title: "Pigs Can Fly",
    seoTitle: "Pigs Can Fly Interactive Crypto Website Case Study",
    shortDescription: "A playful crypto launch experience that turns market-cap progress into an animated space journey from Earth to deep space.",
    summary: "A responsive, motion-led web experience for the PIGFLY meme-coin concept, combining market-cap telemetry, an interactive mission simulator and milestone celebrations in a cinematic space interface.",
    category: ["Web Development", "Interactive Experience"],
    role: ["Front-End Web Developer"],
    stack: ["React", "GSAP", "DexScreener integration", "Responsive design"],
    liveUrl: "https://coin-website-fawn.vercel.app/",
    featured: false,
    coverImage: "/project6.png",
    coverTone: "violet",
    challenge: "Make a meme-coin launch page memorable and easy to understand while translating an abstract market-cap value into a clear, entertaining journey across multiple milestones.",
    solution: "A cinematic React experience where market-cap data controls the rocket’s progress, milestone states and celebration sequences, supported by demo controls while live token telemetry is awaiting launch.",
    responsibilities: [
      "Built the responsive space-mission interface in React",
      "Translated market-cap values into continuous journey progress",
      "Created animated rocket, milestone and celebration states",
      "Integrated live DexScreener telemetry with a demo-mode fallback",
      "Developed selectable market-cap controls for testing the full journey",
      "Added contract-copy, community and token-access actions",
      "Prepared and deployed the production experience on Vercel",
    ],
    highlights: [
      "Market-cap-powered rocket journey",
      "Interactive mission simulator",
      "Milestone celebrations from the Moon to deep space",
      "Live and demo telemetry modes",
    ],
    status: "live",
    serviceSlugs: ["web-development", "business-landing-page"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
