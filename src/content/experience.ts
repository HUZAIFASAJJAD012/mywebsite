export type Experience = {
  role: string;
  company?: string;
  period: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer and Project Manager",
    company: "SoftwareForge Agency",
    period: "January 2025 — Present",
    responsibilities: [
      "Build production-ready full-stack products and integrations.",
      "Manage planning, development workflows and delivery.",
      "Coordinate tasks with developers and clients.",
    ],
  },
  {
    role: "Web Team Lead",
    company: "Firnas.tech",
    period: "September 2023 — Present",
    responsibilities: [
      "Lead a team delivering web and software projects.",
      "Review code and contribute to scalable architecture decisions.",
      "Coordinate frontend, backend and client-side integrations.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Firnas.tech",
    period: "September 2023 — Present",
    responsibilities: [
      "Build REST APIs and integrate frontend applications.",
      "Develop reusable components and secure authentication flows.",
      "Improve application performance and user experience.",
    ],
  },
  {
    role: "Freelance Web Developer",
    period: "September 2022 — Present",
    responsibilities: [
      "Build websites and applications across multiple industries.",
      "Deliver frontend, backend, dashboards and deployment work.",
      "Integrate Google APIs, AI APIs and payments.",
    ],
  },
];
