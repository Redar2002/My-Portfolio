import type { Localized } from "@/lib/i18n";
import type { ProjectSlug } from "./projects";

/** Section 06 — parcours, du plus récent au plus ancien. */
export type TimelineEntry = {
  kind: "education" | "internship";
  period: string;
  title: Localized;
  org: string;
  detail?: Localized;
  project?: ProjectSlug;
};

export const timeline: TimelineEntry[] = [
  {
    kind: "internship",
    period: "01 – 06 / 2026",
    title: { fr: "Stage PFE — Ingénieur Data/IA", en: "Final-year internship — Data/AI Engineer" },
    org: "Inspirigence",
    detail: { fr: "Plateforme de Meeting Intelligence (NLP, RAG, Gemini, Power BI).", en: "Meeting Intelligence platform (NLP, RAG, Gemini, Power BI)." },
    project: "meeting-intelligence",
  },
  {
    kind: "education",
    period: "2024 – 2026",
    title: { fr: "Ingénieur d'État en Business Intelligence", en: "State Engineering Degree in Business Intelligence" },
    org: "ISMAGI — Institut Supérieur de Génie Informatique",
  },
  {
    kind: "internship",
    period: "03 – 06 / 2025",
    title: { fr: "Stage — Développeur web", en: "Internship — Web developer" },
    org: "COPE — Centre d'orientation et de planification de l'éducation",
    detail: { fr: "API REST Laravel Lumen et interface React.", en: "Laravel Lumen REST API and React interface." },
    project: "cope-orientation",
  },
  {
    kind: "education",
    period: "2023 – 2024",
    title: { fr: "Licence professionnelle — Internet des objets", en: "Professional Bachelor's — Internet of Things" },
    org: "ISMAGI — Institut Supérieur de Génie Informatique",
  },
  {
    kind: "education",
    period: "2021 – 2023",
    title: { fr: "Technicien spécialisé — Développement digital", en: "Specialised Technician — Digital Development" },
    org: "ISTA — Institut Spécialisé de Technologie Appliquée",
  },
];
