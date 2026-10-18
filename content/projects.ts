import type { Localized } from "@/lib/i18n";

/**
 * Projets présentés sur l'accueil (section 02) et dans /work/[slug].
 * Règle : aucun chiffre inventé. Un résultat non mesuré reste un placeholder
 * « [À COMPLÉTER : …] », affiché en surbrillance sur le site.
 */

export const projectSlugs = [
  "meeting-intelligence",
  "elia-forecasting",
  "hospital-data-mart",
  "cope-orientation",
] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

export type ProjectStatus = "internship" | "completed" | "academic" | "poc";
export type Illustration = "meeting" | "forecast" | "etl" | "api";

export type Project = {
  slug: ProjectSlug;
  title: Localized;
  /** Titre court, utilisé dans les onglets et les filtres. */
  short: Localized;
  category: Localized;
  status: ProjectStatus;
  period: Localized;
  /** Organisation ou cadre du projet. */
  context: Localized;
  role: Localized;
  problem: Localized;
  built: Localized;
  result: Localized;
  tags: string[];
  illustration: Illustration;
};

export const projects: Project[] = [
  {
    slug: "meeting-intelligence",
    title: {
      fr: "Plateforme de Meeting Intelligence",
      en: "Meeting Intelligence Platform",
    },
    short: { fr: "Meeting Intelligence", en: "Meeting Intelligence" },
    category: { fr: "IA générative · NLP", en: "Generative AI · NLP" },
    status: "internship",
    period: { fr: "Janv. – juin 2026", en: "Jan – Jun 2026" },
    context: { fr: "Inspirigence — stage de fin d'études (PFE)", en: "Inspirigence — final-year internship" },
    role: {
      fr: "Stagiaire ingénieur Data/IA : pipeline NLP/RAG, intégration de l'API Gemini, KPI Power BI.",
      en: "Data/AI engineering intern: NLP/RAG pipeline, Gemini API integration, Power BI KPIs.",
    },
    problem: {
      fr: "Les décisions et actions prises en réunion se perdent : comptes rendus manuels, incomplets, difficiles à suivre.",
      en: "Decisions and action items from meetings get lost: notes are manual, incomplete and hard to track.",
    },
    built: {
      fr: "Un pipeline Python NLP/RAG qui analyse les réunions avec l'API Gemini et génère synthèses, décisions, actions et KPI. Outils connectés via MCP, indicateurs suivis dans Power BI.",
      en: "A Python NLP/RAG pipeline that analyses meetings with the Gemini API and generates summaries, decisions, action items and KPIs. Tools connected through MCP, metrics tracked in Power BI.",
    },
    result: {
      fr: "Synthèses structurées générées automatiquement. [À COMPLÉTER : nombre de réunions analysées, temps gagné par compte rendu]",
      en: "Structured summaries generated automatically. [TO COMPLETE: number of meetings analysed, time saved per report]",
    },
    tags: ["Python", "NLP", "RAG", "Gemini API", "MCP", "Power BI"],
    illustration: "meeting",
  },
  {
    slug: "elia-forecasting",
    title: {
      fr: "Prévision des flux électriques en Belgique",
      en: "Forecasting electricity flows in Belgium",
    },
    short: { fr: "Flux électriques", en: "Electricity flows" },
    category: { fr: "Machine Learning · Séries temporelles", en: "Machine Learning · Time series" },
    status: "completed",
    period: { fr: "Avr. – août 2025", en: "Apr – Aug 2025" },
    context: { fr: "Projet de fin d'année — ISMAGI", en: "End-of-year project — ISMAGI" },
    role: {
      fr: "Collecte des données, modélisation, conception du tableau de bord.",
      en: "Data collection, modelling, dashboard design.",
    },
    problem: {
      fr: "Les échanges d'électricité entre la Belgique et ses voisins varient d'heure en heure. Il faut les anticiper, pas seulement les constater.",
      en: "Electricity exchanges between Belgium and its neighbours change hour by hour. They need to be anticipated, not just observed.",
    },
    built: {
      fr: "Une collecte automatisée via l'API open data d'Elia, des modèles de Machine Learning de prévision et un tableau de bord interactif : carte des interconnexions, évolution des flux, prévisions avec intervalle de confiance.",
      en: "Automated collection from Elia's open data API, machine learning forecasting models and an interactive dashboard: interconnection map, flow trends, forecasts with confidence intervals.",
    },
    result: {
      fr: "Flux import/export suivis sur 5 frontières, prévisions à horizon réglable. [À COMPLÉTER : précision du modèle, ex. MAPE ou RMSE]",
      en: "Import/export flows tracked across 5 borders, forecasts with an adjustable horizon. [TO COMPLETE: model accuracy, e.g. MAPE or RMSE]",
    },
    tags: ["Python", "Pandas", "API Elia", "Machine Learning", "ARIMA", "Power BI"],
    illustration: "forecast",
  },
  {
    slug: "hospital-data-mart",
    title: {
      fr: "Data Mart — Gestion hospitalière",
      en: "Data Mart — Hospital management",
    },
    short: { fr: "Data Mart hospitalier", en: "Hospital Data Mart" },
    category: { fr: "Business Intelligence", en: "Business Intelligence" },
    status: "academic",
    period: { fr: "Mars – avr. 2025", en: "Mar – Apr 2025" },
    context: { fr: "Projet académique — cycle ingénieur BI, ISMAGI", en: "Academic project — BI engineering degree, ISMAGI" },
    role: {
      fr: "Modélisation décisionnelle, développement ETL, cube OLAP et rapports.",
      en: "Dimensional modelling, ETL development, OLAP cube and reports.",
    },
    problem: {
      fr: "La direction médicale n'a pas de vue consolidée des consultations : volumes, durées et coûts restent dispersés dans le système transactionnel.",
      en: "Medical management has no consolidated view of consultations: volumes, durations and costs stay scattered across the transactional system.",
    },
    built: {
      fr: "Un Data Mart en étoile (FactConsultation ; dimensions Date, Médecin, Service, Patient) alimenté par un ETL SSIS depuis l'OLTP, un cube SSAS et des rapports Power BI.",
      en: "A star-schema Data Mart (FactConsultation; Date, Doctor, Department, Patient dimensions) loaded by an SSIS ETL from the OLTP system, an SSAS cube and Power BI reports.",
    },
    result: {
      fr: "Tableau de bord interactif pour la direction médicale : nombre de consultations, durée, coût des actes, analysables par service, médecin et période.",
      en: "Interactive dashboard for medical management: number of consultations, duration, cost of procedures, sliced by department, doctor and period.",
    },
    tags: ["SQL Server", "SSIS", "SSAS", "OLAP", "Power BI"],
    illustration: "etl",
  },
  {
    slug: "cope-orientation",
    title: {
      fr: "Application d'orientation éducative",
      en: "Educational guidance application",
    },
    short: { fr: "Orientation COPE", en: "COPE guidance" },
    category: { fr: "Développement web", en: "Web development" },
    status: "internship",
    period: { fr: "Mars – juin 2025", en: "Mar – Jun 2025" },
    context: {
      fr: "COPE — Centre d'orientation et de planification de l'éducation, Rabat (stage)",
      en: "COPE — Centre for Educational Guidance and Planning, Rabat (internship)",
    },
    role: {
      fr: "Développeur full-stack : API REST et interface React.",
      en: "Full-stack developer: REST API and React interface.",
    },
    problem: {
      fr: "L'orientation et la planification éducative demandent un outil web centralisé, simple à faire évoluer.",
      en: "Educational guidance and planning need a central web tool that is easy to evolve.",
    },
    built: {
      fr: "Une API REST Laravel Lumen consommée par une interface React, avec une architecture modulaire qui sépare les domaines fonctionnels.",
      en: "A Laravel Lumen REST API consumed by a React interface, with a modular architecture that separates functional domains.",
    },
    result: {
      fr: "Application livrée en fin de stage. [À COMPLÉTER : modules livrés, nombre d'utilisateurs ou de fonctionnalités]",
      en: "Application delivered at the end of the internship. [TO COMPLETE: modules delivered, number of users or features]",
    },
    tags: ["Laravel Lumen", "PHP", "API REST", "React", "JavaScript"],
    illustration: "api",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
