export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  category: string[];
  role: string[];
  stack: string[];
  year?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  coverTone: "indigo" | "cyan" | "violet" | "teal" | "blue" | "rose";
  challenge: string;
  solution: string;
  responsibilities: string[];
  status: "live" | "private" | "archived";
};

export const projects: Project[] = [
  {
    slug: "al-khalifa-signature",
    title: "Al Khalifa Signature",
    shortDescription: "A modern multilingual restaurant website for an Arabic cuisine destination in Johor Bahru, Malaysia.",
    summary: "A clean, responsive and professional restaurant website that helps customers explore signature dishes, browse the menu, discover event services, reserve tables and connect directly.",
    category: ["Full Stack"],
    role: ["Full-Stack Web Developer"],
    stack: ["Responsive web", "Multilingual support", "Reservations", "WhatsApp integration"],
    liveUrl: "https://restoranalkhalifa.com/",
    featured: true,
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
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
