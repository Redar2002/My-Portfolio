import type { Localized } from "@/lib/i18n";
import type { ProjectSlug } from "./projects";

/** Section 01 — quatre disciplines, chacune reliée aux projets où elle sert. */
export type Discipline = {
  id: string;
  title: Localized;
  summary: Localized;
  items: Localized<string[]>;
  projects: ProjectSlug[];
};

export const disciplines: Discipline[] = [
  {
    id: "bi",
    title: { fr: "Business Intelligence", en: "Business Intelligence" },
    summary: {
      fr: "Modéliser l'activité pour que chaque indicateur ait une source, une définition et un grain.",
      en: "Model the business so every metric has a source, a definition and a grain.",
    },
    items: {
      fr: ["Data Mart", "Modélisation décisionnelle", "SSIS", "SSAS", "Cubes OLAP"],
      en: ["Data Mart", "Dimensional modelling", "SSIS", "SSAS", "OLAP cubes"],
    },
    projects: ["hospital-data-mart"],
  },
  {
    id: "dataviz",
    title: { fr: "Data Visualisation", en: "Data Visualisation" },
    summary: {
      fr: "Construire des tableaux de bord qui répondent à une question précise, sans bruit.",
      en: "Build dashboards that answer one clear question, without noise.",
    },
    items: {
      fr: ["Power BI", "Tableau", "KPI", "Tableaux de bord"],
      en: ["Power BI", "Tableau", "KPIs", "Dashboards"],
    },
    projects: ["hospital-data-mart", "elia-forecasting", "meeting-intelligence"],
  },
  {
    id: "ai",
    title: { fr: "IA générative & Data Science", en: "Generative AI & Data Science" },
    summary: {
      fr: "Extraire du sens des données et du texte : prévisions, synthèses, réponses ancrées dans les sources.",
      en: "Extract meaning from data and text: forecasts, summaries, answers grounded in sources.",
    },
    items: {
      fr: ["Python", "Pandas", "Machine Learning", "NLP", "RAG", "LLM Gemini", "MCP"],
      en: ["Python", "Pandas", "Machine Learning", "NLP", "RAG", "Gemini LLM", "MCP"],
    },
    projects: ["meeting-intelligence", "elia-forecasting"],
  },
  {
    id: "dev",
    title: { fr: "Développement", en: "Development" },
    summary: {
      fr: "Exposer les données et les modèles à travers des API et des interfaces maintenables.",
      en: "Expose data and models through maintainable APIs and interfaces.",
    },
    items: {
      fr: ["API REST", "Laravel / Lumen", "React", "Node.js"],
      en: ["REST APIs", "Laravel / Lumen", "React", "Node.js"],
    },
    projects: ["cope-orientation"],
  },
];
