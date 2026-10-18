import type { Localized } from "@/lib/i18n";
import type { ProjectSlug } from "./projects";

/**
 * Section 03 et études de cas — architecture de chaque projet.
 * Chaque nœud suit la chaîne : Source → Ingestion/ETL → Stockage → Modèle/Analyse → Visualisation.
 */
export type Stage = "source" | "ingestion" | "storage" | "model" | "viz";

export const stageLabels: Record<Stage, Localized> = {
  source: { fr: "Source", en: "Source" },
  ingestion: { fr: "Ingestion / ETL", en: "Ingestion / ETL" },
  storage: { fr: "Stockage", en: "Storage" },
  model: { fr: "Modèle / Analyse", en: "Model / Analysis" },
  viz: { fr: "Visualisation", en: "Visualisation" },
};

export type ArchNode = {
  stage: Stage;
  /** Remplace le libellé générique de l'étape quand il ne convient pas (ex. application web). */
  stageLabel?: Localized;
  name: Localized;
  role: Localized;
  /** Un placeholder à compléter s'écrit en objet bilingue. */
  tools: (string | Localized)[];
  receives: Localized;
  sends: Localized;
};

export const architectures: Record<ProjectSlug, ArchNode[]> = {
  "meeting-intelligence": [
    {
      stage: "source",
      name: { fr: "Réunions", en: "Meetings" },
      role: {
        fr: "Fournir la matière brute : le contenu des réunions à analyser.",
        en: "Provide the raw material: the content of the meetings to analyse.",
      },
      tools: [{ fr: "[À COMPLÉTER : format — audio, transcription, outil de visio]", en: "[TO COMPLETE: format — audio, transcript, video tool]" }],
      receives: { fr: "—", en: "—" },
      sends: { fr: "Enregistrements ou transcriptions", en: "Recordings or transcripts" },
    },
    {
      stage: "ingestion",
      name: { fr: "Prétraitement NLP", en: "NLP preprocessing" },
      role: {
        fr: "Nettoyer et découper le texte pour qu'il soit exploitable par le modèle.",
        en: "Clean and chunk the text so the model can use it.",
      },
      tools: ["Python", "NLP"],
      receives: { fr: "Transcriptions brutes", en: "Raw transcripts" },
      sends: { fr: "Segments de texte nettoyés", en: "Cleaned text chunks" },
    },
    {
      stage: "storage",
      name: { fr: "Index de connaissances (RAG)", en: "Knowledge index (RAG)" },
      role: {
        fr: "Retrouver les passages pertinents pour ancrer les réponses du LLM dans le contenu réel.",
        en: "Retrieve relevant passages so the LLM's answers stay grounded in the actual content.",
      },
      tools: ["RAG", { fr: "[À COMPLÉTER : base vectorielle / embeddings]", en: "[TO COMPLETE: vector store / embeddings]" }],
      receives: { fr: "Segments de texte", en: "Text chunks" },
      sends: { fr: "Contexte pertinent pour chaque requête", en: "Relevant context for each query" },
    },
    {
      stage: "model",
      name: { fr: "Génération (Gemini + MCP)", en: "Generation (Gemini + MCP)" },
      role: {
        fr: "Produire synthèse, décisions, actions et KPI ; MCP connecte le modèle aux outils externes.",
        en: "Produce summary, decisions, action items and KPIs; MCP connects the model to external tools.",
      },
      tools: ["Gemini API", "MCP", "Python"],
      receives: { fr: "Contexte + instructions", en: "Context + instructions" },
      sends: { fr: "Synthèses structurées et indicateurs", en: "Structured summaries and metrics" },
    },
    {
      stage: "viz",
      name: { fr: "Tableau de bord KPI", en: "KPI dashboard" },
      role: {
        fr: "Suivre les indicateurs des réunions dans le temps.",
        en: "Track meeting metrics over time.",
      },
      tools: ["Power BI"],
      receives: { fr: "Indicateurs générés", en: "Generated metrics" },
      sends: { fr: "Vue de pilotage pour les équipes", en: "Monitoring view for teams" },
    },
  ],
  "elia-forecasting": [
    {
      stage: "source",
      name: { fr: "API Elia", en: "Elia API" },
      role: {
        fr: "Fournir les flux transfrontaliers publiés par le gestionnaire du réseau belge.",
        en: "Provide the cross-border flows published by Belgium's grid operator.",
      },
      tools: ["API Elia (open data)"],
      receives: { fr: "—", en: "—" },
      sends: { fr: "Flux horaires par frontière (MW)", en: "Hourly flows per border (MW)" },
    },
    {
      stage: "ingestion",
      name: { fr: "Collecte & préparation", en: "Collection & preparation" },
      role: {
        fr: "Interroger l'API, contrôler la qualité, mettre les séries au bon format.",
        en: "Query the API, check quality, shape the time series.",
      },
      tools: ["Python"],
      receives: { fr: "Réponses de l'API", en: "API responses" },
      sends: { fr: "Séries temporelles propres", en: "Clean time series" },
    },
    {
      stage: "storage",
      name: { fr: "Jeu de données historique", en: "Historical dataset" },
      role: {
        fr: "Conserver l'historique nécessaire à l'entraînement et à la comparaison.",
        en: "Keep the history needed for training and comparison.",
      },
      tools: [{ fr: "[À COMPLÉTER : format ou base de stockage]", en: "[TO COMPLETE: storage format or database]" }],
      receives: { fr: "Séries temporelles", en: "Time series" },
      sends: { fr: "Données d'entraînement", en: "Training data" },
    },
    {
      stage: "model",
      name: { fr: "Modèles de prévision", en: "Forecasting models" },
      role: {
        fr: "Prévoir les flux à horizon réglable, avec un intervalle de confiance.",
        en: "Forecast flows over an adjustable horizon, with a confidence interval.",
      },
      tools: ["ARIMA", "Machine Learning", { fr: "[À COMPLÉTER : autres modèles testés]", en: "[TO COMPLETE: other models tested]" }],
      receives: { fr: "Historique des flux", en: "Flow history" },
      sends: { fr: "Prévisions + intervalles", en: "Forecasts + intervals" },
    },
    {
      stage: "viz",
      name: { fr: "Tableau de bord interactif", en: "Interactive dashboard" },
      role: {
        fr: "Montrer carte des interconnexions, import/export, balance nette et prévisions.",
        en: "Show the interconnection map, imports/exports, net balance and forecasts.",
      },
      tools: ["Power BI"],
      receives: { fr: "Flux observés et prévus", en: "Observed and forecast flows" },
      sends: { fr: "Lecture des tendances par pays", en: "Per-country trend reading" },
    },
  ],
  "hospital-data-mart": [
    {
      stage: "source",
      name: { fr: "Système OLTP hospitalier", en: "Hospital OLTP system" },
      role: {
        fr: "Enregistrer les consultations au fil de l'eau.",
        en: "Record consultations as they happen.",
      },
      tools: ["SQL Server"],
      receives: { fr: "—", en: "—" },
      sends: { fr: "Consultations, médecins, services, patients", en: "Consultations, doctors, departments, patients" },
    },
    {
      stage: "ingestion",
      name: { fr: "ETL SSIS", en: "SSIS ETL" },
      role: {
        fr: "Extraire, nettoyer et charger les données dans le modèle en étoile.",
        en: "Extract, clean and load data into the star schema.",
      },
      tools: ["SSIS", "Visual Studio"],
      receives: { fr: "Tables transactionnelles", en: "Transactional tables" },
      sends: { fr: "Faits et dimensions chargés", en: "Loaded facts and dimensions" },
    },
    {
      stage: "storage",
      name: { fr: "Data Mart en étoile", en: "Star-schema Data Mart" },
      role: {
        fr: "Structurer l'analyse : FactConsultation et dimensions Date, Médecin, Service, Patient.",
        en: "Structure the analysis: FactConsultation with Date, Doctor, Department and Patient dimensions.",
      },
      tools: ["SQL Server", "SSMS"],
      receives: { fr: "Données transformées", en: "Transformed data" },
      sends: { fr: "Tables de faits et de dimensions", en: "Fact and dimension tables" },
    },
    {
      stage: "model",
      name: { fr: "Cube OLAP", en: "OLAP cube" },
      role: {
        fr: "Pré-agréger les mesures (nombre, durée, coût) pour une analyse multidimensionnelle rapide.",
        en: "Pre-aggregate measures (count, duration, cost) for fast multidimensional analysis.",
      },
      tools: ["SSAS"],
      receives: { fr: "Modèle en étoile", en: "Star schema" },
      sends: { fr: "Mesures agrégées par axe", en: "Measures aggregated by axis" },
    },
    {
      stage: "viz",
      name: { fr: "Rapports Power BI", en: "Power BI reports" },
      role: {
        fr: "Donner à la direction médicale une lecture claire de l'activité.",
        en: "Give medical management a clear view of activity.",
      },
      tools: ["Power BI"],
      receives: { fr: "Cube OLAP", en: "OLAP cube" },
      sends: { fr: "Indicateurs de gestion", en: "Management metrics" },
    },
  ],
  "cope-orientation": [
    {
      stage: "source",
      stageLabel: { fr: "Données", en: "Data" },
      name: { fr: "Base de données", en: "Database" },
      role: {
        fr: "Stocker les données d'orientation : filières, établissements, parcours.",
        en: "Store guidance data: programmes, schools, paths.",
      },
      tools: [{ fr: "[À COMPLÉTER : SGBD utilisé]", en: "[TO COMPLETE: database engine]" }],
      receives: { fr: "—", en: "—" },
      sends: { fr: "Enregistrements", en: "Records" },
    },
    {
      stage: "ingestion",
      stageLabel: { fr: "Accès aux données", en: "Data access" },
      name: { fr: "Couche d'accès aux données", en: "Data access layer" },
      role: {
        fr: "Isoler les requêtes et la validation des données dans des modules.",
        en: "Keep queries and data validation inside modules.",
      },
      tools: ["Laravel Lumen", "PHP"],
      receives: { fr: "Requêtes de l'API", en: "API requests" },
      sends: { fr: "Données validées", en: "Validated data" },
    },
    {
      stage: "storage",
      stageLabel: { fr: "Logique métier", en: "Business logic" },
      name: { fr: "Modules métier", en: "Business modules" },
      role: {
        fr: "Découper l'application par domaine pour faciliter maintenance et évolution.",
        en: "Split the application by domain to ease maintenance and change.",
      },
      tools: ["Laravel Lumen"],
      receives: { fr: "Données validées", en: "Validated data" },
      sends: { fr: "Objets métier", en: "Domain objects" },
    },
    {
      stage: "model",
      stageLabel: { fr: "Exposition", en: "Exposure" },
      name: { fr: "API REST", en: "REST API" },
      role: {
        fr: "Exposer les fonctionnalités sous forme de points d'accès JSON.",
        en: "Expose features as JSON endpoints.",
      },
      tools: ["Laravel Lumen", "JSON"],
      receives: { fr: "Appels HTTP du front", en: "HTTP calls from the front end" },
      sends: { fr: "Réponses JSON", en: "JSON responses" },
    },
    {
      stage: "viz",
      stageLabel: { fr: "Interface", en: "Interface" },
      name: { fr: "Interface React", en: "React interface" },
      role: {
        fr: "Offrir une interface dynamique aux utilisateurs.",
        en: "Provide a dynamic interface to users.",
      },
      tools: ["React", "JavaScript"],
      receives: { fr: "Réponses JSON", en: "JSON responses" },
      sends: { fr: "Actions des utilisateurs", en: "User actions" },
    },
  ],
};
