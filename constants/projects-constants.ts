
import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Vistaar AI",
    category: "AI-Powered Manufacturing Intelligence",
    description:
      "Vistaar AI is an intelligent manufacturing platform designed to help factory owners understand their operations, identify hidden inefficiencies, monitor production performance and make data-driven decisions.",
    subDescription: [
      "Contributed to developing an AI-powered chatbot that provides manufacturing insights and answers business-related queries.",
      "Worked on integrating frontend applications with backend APIs to deliver real-time manufacturing information.",
      "Developed interactive dashboards for monitoring production, machine performance, downtime, scrap and operational metrics.",
      "Worked on presenting complex factory data in a simple and understandable format for business owners.",
      "Collaborated with frontend, backend and mobile development teams to build the Vistaar AI platform.",
    ],
    href: "https://vistaarai.com",
    logo: "",
    image: "/projects/AI-Powered Manufacturing Intelligence.png",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Python", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Django", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "REST APIs", path: "/assets/logos/javascript.svg" },
      { id: 5, name: "AI Integration", path: "/assets/logos/javascript.svg" },
      { id: 6, name: "AWS", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "NexGen Farm",
    category: "AI-Powered Smart Agriculture Platform",
    description:
      "NexGen Farm is an agricultural technology platform designed to support smarter farming through digital solutions, agricultural insights and intelligent farm management.",
    subDescription: [
      "Contributed to developing frontend applications for an agriculture-focused digital platform.",
      "Worked on integrating frontend components with backend APIs to deliver dynamic data.",
      "Developed responsive user interfaces to improve accessibility and user experience.",
      "Worked on implementing interactive components and dynamic data handling.",
      "Collaborated with the development team to enhance platform functionality and performance.",
    ],
    href: "https://nexgenagritech.ai/",
    logo: "",
    image: "/projects/NexGen Farm Agritech Platform Mockup.png",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
  { id: 2, name: "Python", path: "/assets/logos/python.svg" },
  { id: 3, name: "Django", path: "/assets/logos/django.svg" },
  { id: 4, name: "REST APIs", path: "/assets/logos/javascript.svg" },
  { id: 5, name: "JavaScript", path: "/assets/logos/javascript.svg" },
  { id: 6, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = {
  stiffness: 200,
  damping: 18,
};

export const TILT_RANGE: {
  x: [number, number];
  y: [number, number];
} = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = {
  stiffness: 60,
  damping: 20,
};

export const PREVIEW_WINDOW = 1;
