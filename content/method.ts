import type { Localized } from "@/lib/i18n";

/** Section 04 — méthode de travail. */
export const methodSteps: { title: Localized; text: Localized; deliverables: Localized<string[]> }[] = [
  {
    title: { fr: "Cadrage des besoins & KPI", en: "Scoping needs & KPIs" },
    text: {
      fr: "Comprendre la décision à éclairer, puis définir chaque indicateur : formule, source, fréquence, responsable.",
      en: "Understand the decision to support, then define each metric: formula, source, frequency, owner.",
    },
    deliverables: {
      fr: ["Catalogue des KPI", "Matrice d'alignement objectifs / indicateurs"],
      en: ["KPI catalogue", "Objectives / metrics alignment matrix"],
    },
  },
  {
    title: { fr: "Modélisation des données", en: "Data modelling" },
    text: {
      fr: "Fixer le grain, les faits et les dimensions avant d'écrire la moindre requête.",
      en: "Fix the grain, facts and dimensions before writing a single query.",
    },
    deliverables: {
      fr: ["Modèle en étoile", "Dictionnaire de données"],
      en: ["Star schema", "Data dictionary"],
    },
  },
  {
    title: { fr: "ETL & développement", en: "ETL & development" },
    text: {
      fr: "Construire des flux reproductibles : extraction, nettoyage, chargement, versionnés et documentés.",
      en: "Build repeatable pipelines: extract, clean, load — versioned and documented.",
    },
    deliverables: {
      fr: ["Flux SSIS ou scripts Python", "API et code versionné"],
      en: ["SSIS packages or Python scripts", "APIs and versioned code"],
    },
  },
  {
    title: { fr: "Validation", en: "Validation" },
    text: {
      fr: "Contrôler la qualité : complétude, doublons, cohérence, rapprochement avec la source.",
      en: "Check quality: completeness, duplicates, consistency, reconciliation with the source.",
    },
    deliverables: {
      fr: ["Contrôles de qualité des données", "Tests et recette"],
      en: ["Data quality checks", "Tests and acceptance"],
    },
  },
  {
    title: { fr: "Restitution", en: "Delivery" },
    text: {
      fr: "Livrer un tableau de bord compris par ses utilisateurs, et la documentation pour le faire vivre.",
      en: "Ship a dashboard its users understand, plus the documentation to keep it alive.",
    },
    deliverables: {
      fr: ["Tableaux de bord", "Documentation utilisateur et technique"],
      en: ["Dashboards", "User and technical documentation"],
    },
  },
];

export const principles: Localized[] = [
  { fr: "Un KPI n'est utile que s'il est fiable.", en: "A KPI is only useful if it is reliable." },
  { fr: "Une définition avant une formule.", en: "A definition before a formula." },
  { fr: "Le tableau de bord le plus simple qui répond à la question.", en: "The simplest dashboard that answers the question." },
  { fr: "Ce qui n'est pas documenté n'est pas livré.", en: "If it isn't documented, it isn't delivered." },
];
