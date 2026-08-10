import { Braces, CloudCog, PanelsTopLeft, Smartphone } from "lucide-react";

export const capabilities = [
  {
    title: "Product Interfaces",
    description: "Responsive, accessible interfaces that make complex products feel clear.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "Motion", "Three.js"],
    icon: PanelsTopLeft,
  },
  {
    title: "Backend Systems",
    description: "Secure APIs, authentication and dependable application architecture.",
    tools: ["Node.js", "Express.js", "NestJS", "REST APIs", "Role-based access"],
    icon: Braces,
  },
  {
    title: "Mobile Products",
    description: "Cross-platform mobile flows connected to real production services.",
    tools: ["React Native", "API integration", "Authentication", "Dashboard experiences"],
    icon: Smartphone,
  },
  {
    title: "Delivery & Infrastructure",
    description: "Databases, cloud deployment and the systems that keep products running.",
    tools: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Docker", "AWS", "Vercel"],
    icon: CloudCog,
  },
];
