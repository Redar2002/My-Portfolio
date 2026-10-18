import type { Localized } from "@/lib/i18n";
import type { ProjectSlug } from "./projects";

/**
 * Section 05 — outils regroupés par rôle.
 * `projects` liste les projets où l'outil a réellement servi ; laissez vide sinon.
 */
export type StackGroup = { id: string; title: Localized; tools: { name: string; projects: ProjectSlug[] }[] };

export const stack: StackGroup[] = [
  {
    id: "viz",
    title: { fr: "Visualisation", en: "Visualisation" },
    tools: [
      { name: "Power BI", projects: ["meeting-intelligence", "elia-forecasting", "hospital-data-mart"] },
      { name: "Tableau", projects: [] },
    ],
  },
  {
    id: "ai",
    title: { fr: "IA & analyse", en: "AI & analysis" },
    tools: [
      { name: "Python", projects: ["meeting-intelligence", "elia-forecasting"] },
      { name: "Pandas", projects: [] },
      { name: "Gemini API", projects: ["meeting-intelligence"] },
      { name: "RAG", projects: ["meeting-intelligence"] },
      { name: "NLP", projects: ["meeting-intelligence"] },
      { name: "ARIMA / ML", projects: ["elia-forecasting"] },
    ],
  },
  {
    id: "etl",
    title: { fr: "Intégration / ETL", en: "Integration / ETL" },
    tools: [
      { name: "SSIS", projects: ["hospital-data-mart"] },
      { name: "API Elia (open data)", projects: ["elia-forecasting"] },
      { name: "MCP", projects: ["meeting-intelligence"] },
    ],
  },
  {
    id: "storage",
    title: { fr: "Stockage & modélisation", en: "Storage & modelling" },
    tools: [
      { name: "SQL Server", projects: ["hospital-data-mart"] },
      { name: "SSAS (OLAP)", projects: ["hospital-data-mart"] },
    ],
  },
  {
    id: "dev",
    title: { fr: "Développement", en: "Development" },
    tools: [
      { name: "Laravel Lumen", projects: ["cope-orientation"] },
      { name: "React", projects: ["cope-orientation"] },
      { name: "Node.js", projects: [] },
    ],
  },
  {
    id: "tools",
    title: { fr: "Outils", en: "Tools" },
    tools: [
      { name: "SSMS", projects: ["hospital-data-mart"] },
      { name: "Visual Studio", projects: ["hospital-data-mart"] },
      { name: "Git / GitHub", projects: [] },
    ],
  },
];
