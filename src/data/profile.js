// Informations identiques dans toutes les langues
export const profile = {
  firstName: 'Reda',
  lastName: 'Laksyer',
  email: 'laksyerreda@gmail.com',
  phone: '+212 6 75 57 87 20',
  phoneHref: 'tel:+212675578720',
  cv: '/cv-reda-laksyer.pdf',
  photo: '/reda.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reda-laksyer-31704926a/' },
    { label: 'GitHub', href: 'https://github.com/Redar2002' },
    { label: 'WhatsApp', href: 'https://wa.me/212667641474' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100008622878301' },
  ],
}

const images = {
  meeting: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  energy: '/projects/carte.png',
  hospital: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  cope: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  robot: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
}

const links = {
  meeting: 'https://github.com/Redar2002',
  energy: 'https://github.com/Redar2002/dashboard',
  hospital: 'https://github.com/Redar2002',
  cope: 'https://github.com/Redar2002/projetStage',
  robot: 'https://github.com/Redar2002',
}

const tags = {
  meeting: ['Python', 'API Gemini', 'NLP', 'RAG', 'MCP', 'Power BI'],
  energy: ['Python', 'Pandas', 'Machine Learning', 'API Elia', 'Power BI'],
  hospital: ['SQL Server', 'SSIS', 'SSAS', 'Power BI'],
  cope: ['PHP', 'Laravel Lumen', 'REST API', 'ReactJS'],
  robot: ['Python', 'YOLO', 'OpenCV', 'Raspberry Pi'],
}

const project = (id, category, title, description) => ({
  id,
  category,
  title,
  description,
  tags: tags[id],
  image: images[id],
  url: links[id],
})

const skillItems = {
  bi: ['SQL', 'SQL Server', 'SSIS', 'SSAS', 'Power BI', 'Tableau', 'Data Warehouse', 'Data Mart', 'ETL / ELT'],
  ai: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'NLP', 'RAG', 'LLM (API Gemini)', 'MCP'],
  dev: ['PHP', 'Laravel / Lumen', 'REST API', 'React', 'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman'],
}

export const content = {
  fr: {
    role: 'Ingénieur BI & Data',
    shortRole: 'BI & Data Engineer',
    location: 'Rabat, Maroc',
    skillGroups: [
      { title: 'Data & BI', items: [...skillItems.bi, 'Modélisation décisionnelle', 'KPI'] },
      { title: 'Data Science & IA', items: skillItems.ai },
      { title: 'Développement', items: skillItems.dev },
      { title: 'Outils', items: skillItems.tools },
    ],
    softSkills: ["Esprit d'analyse", 'Rigueur', 'Autonomie', "Esprit d'équipe", "Capacité d'apprentissage"],
    languages: [
      { name: 'Arabe', level: 'Maternelle' },
      { name: 'Français', level: 'Courant' },
      { name: 'Anglais', level: 'Professionnel' },
    ],
    education: [
      {
        year: '2024 — 2026',
        title: "Diplôme d'Ingénieur d'État — Business Intelligence",
        school: "ISMAGI — Institut Supérieur de Management, d'Administration et de Génie Informatique, Rabat",
        detail: 'Spécialité BI',
      },
      {
        year: '2023 — 2024',
        title: 'Licence professionnelle — Internet des Objets',
        school: "ISMAGI — Institut Supérieur de Management, d'Administration et de Génie Informatique, Rabat",
        detail: 'Spécialité IoT',
      },
      {
        year: '2021 — 2023',
        title: 'Technicien Spécialisé — Développement Digital',
        school: 'ISTA — Institut Spécialisé de Technologie Appliquée',
        detail: 'Spécialité Développement',
      },
    ],
    experiences: [
      {
        year: 'Janv. 2026 — Juin 2026',
        title: 'Stagiaire IA & Analyse de données (PFE)',
        place: 'Inspirigence — Plateforme de Meeting Intelligence',
        points: [
          "Conception et développement d'une plateforme d'IA qui analyse les réunions et génère automatiquement synthèses, décisions, actions et KPI",
          "Pipeline NLP / RAG en Python s'appuyant sur l'API Gemini (LLM) pour extraire les informations clés des échanges",
          'KPI des réunions visualisés dans Power BI, outils connectés via le protocole MCP (Model Context Protocol)',
        ],
      },
      {
        year: 'Mars 2025 — Juin 2025',
        title: 'Stagiaire Développeur Web',
        place: "COPE — Application d'orientation et de planification éducative",
        points: [
          "Développement d'une application d'orientation et de planification éducative à l'architecture modulaire",
          'Conception et implémentation d’une API REST avec Laravel Lumen, consommée par une interface ReactJS',
        ],
      },
    ],
    projects: [
      project(
        'meeting',
        'IA générative · PFE',
        'Meeting Intelligence',
        "Plateforme d'IA qui analyse les réunions et génère automatiquement les synthèses, décisions, actions et KPI. Pipeline NLP / RAG en Python avec l'API Gemini, KPI suivis dans Power BI et outils connectés via MCP.",
      ),
      project(
        'energy',
        'Machine Learning · Data Viz',
        'Prévision des flux électriques en Belgique',
        "Projet de fin d'année : collecte des données via l'API Elia, entraînement de modèles de Machine Learning pour prévoir les flux électriques transfrontaliers, et tableau de bord interactif de suivi et d'analyse des flux.",
      ),
      project(
        'hospital',
        'Business Intelligence',
        'Data Mart — Gestion hospitalière',
        "Data Mart modélisé et alimenté par des flux ETL SSIS, avec un cube SSAS pour l'analyse multidimensionnelle, et des rapports Power BI sur les consultations médicales et les indicateurs de gestion hospitalière.",
      ),
      project(
        'cope',
        'Développement Web · Stage',
        "Plateforme d'Orientation COPE",
        "Application d'orientation et de planification éducative à l'architecture modulaire : API REST Laravel Lumen côté back-end, consommée par une interface ReactJS.",
      ),
      project(
        'robot',
        'IoT & Computer Vision',
        'Robot de Détection YOLO',
        "Système robotisé de détection, saisie et transport automatisé d'objets avec un bras VEX, un robot mobile, un convoyeur et une caméra embarquée. 95 % de précision en détection et 90 % en manipulation.",
      ),
    ],
    stages: [
      { title: 'BRIEFING', text: 'Comprendre les objectifs métier, les utilisateurs et les indicateurs attendus, pour relier chaque KPI à une décision concrète.' },
      { title: 'COLLECTE', text: 'Audit et intégration des sources (bases OLTP, fichiers, API comme Elia), contrôle de la qualité et de la volumétrie des données.' },
      { title: 'MODÉLISATION', text: 'Conception décisionnelle en étoile ou en flocon : Data Warehouse / Data Mart, tables de faits, dimensions, granularité et mesures clés.' },
      { title: 'ETL / ELT', text: 'Flux d’extraction, transformation et chargement avec SSIS ou Python (Pandas) : nettoyage, historisation et automatisation.' },
      { title: 'ANALYSE & IA', text: 'Cubes SSAS, modèles de Machine Learning pour la prévision, et IA générative (NLP, RAG, LLM) pour extraire de la valeur du texte.' },
      { title: 'DASHBOARDS', text: 'Tableaux de bord Power BI ou Tableau clairs, interactifs et orientés décision, puis validation avec les métiers et itérations.' },
    ],
  },

  en: {
    role: 'BI & Data Engineer',
    shortRole: 'BI & Data Engineer',
    location: 'Rabat, Morocco',
    skillGroups: [
      { title: 'Data & BI', items: [...skillItems.bi, 'Decision modeling', 'KPI'] },
      { title: 'Data Science & AI', items: skillItems.ai },
      { title: 'Development', items: skillItems.dev },
      { title: 'Tools', items: skillItems.tools },
    ],
    softSkills: ['Analytical mindset', 'Rigor', 'Autonomy', 'Team spirit', 'Fast learner'],
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'French', level: 'Fluent' },
      { name: 'English', level: 'Professional' },
    ],
    education: [
      {
        year: '2024 — 2026',
        title: 'State Engineering Degree — Business Intelligence',
        school: 'ISMAGI — Higher Institute of Management, Administration and Computer Engineering, Rabat',
        detail: 'BI major',
      },
      {
        year: '2023 — 2024',
        title: "Professional Bachelor's — Internet of Things",
        school: 'ISMAGI — Higher Institute of Management, Administration and Computer Engineering, Rabat',
        detail: 'IoT major',
      },
      {
        year: '2021 — 2023',
        title: 'Specialized Technician Diploma — Digital Development',
        school: 'ISTA — Specialized Institute of Applied Technology',
        detail: 'Development major',
      },
    ],
    experiences: [
      {
        year: 'Jan 2026 — Jun 2026',
        title: 'AI & Data Analytics Intern (Final-year project)',
        place: 'Inspirigence — Meeting Intelligence Platform',
        points: [
          'Designed and built an AI platform that analyzes meetings and automatically generates summaries, decisions, action items and KPIs',
          'Built an NLP / RAG pipeline in Python on top of the Gemini API (LLM) to extract key information from conversations',
          'Visualized meeting KPIs in Power BI and connected tools through the Model Context Protocol (MCP)',
        ],
      },
      {
        year: 'Mar 2025 — Jun 2025',
        title: 'Web Developer Intern',
        place: 'COPE — Educational guidance & planning application',
        points: [
          'Developed an educational guidance and planning application based on a modular architecture',
          'Designed and implemented a REST API with Laravel Lumen, consumed by a ReactJS interface',
        ],
      },
    ],
    projects: [
      project(
        'meeting',
        'Generative AI · Final-year project',
        'Meeting Intelligence',
        'AI platform that analyzes meetings and automatically generates summaries, decisions, action items and KPIs. NLP / RAG pipeline in Python with the Gemini API, KPIs tracked in Power BI and tools connected through MCP.',
      ),
      project(
        'energy',
        'Machine Learning · Data Viz',
        'Belgian Power Flow Forecasting',
        'End-of-year project: data collected from the Elia API, Machine Learning models trained to forecast cross-border power flows, and an interactive dashboard to monitor and analyze them.',
      ),
      project(
        'hospital',
        'Business Intelligence',
        'Data Mart — Hospital Management',
        'Data Mart modeled and loaded through SSIS ETL pipelines, with an SSAS cube for multidimensional analysis and Power BI reports on medical consultations and hospital KPIs.',
      ),
      project(
        'cope',
        'Web Development · Internship',
        'COPE Guidance Platform',
        'Educational guidance and planning application with a modular architecture: Laravel Lumen REST API on the back end, consumed by a ReactJS interface.',
      ),
      project(
        'robot',
        'IoT & Computer Vision',
        'YOLO Detection Robot',
        'Robotic system that detects, grabs and transports objects using a VEX arm, a mobile robot, a conveyor and an onboard camera. 95% detection accuracy and 90% handling accuracy.',
      ),
    ],
    stages: [
      { title: 'BRIEFING', text: 'Understand business goals, users and expected indicators, so that every KPI maps to a concrete decision.' },
      { title: 'COLLECTION', text: 'Audit and integrate sources (OLTP databases, files, APIs such as Elia), checking data quality and volume.' },
      { title: 'MODELING', text: 'Star or snowflake decision models: Data Warehouse / Data Mart, fact tables, dimensions, granularity and key measures.' },
      { title: 'ETL / ELT', text: 'Extract, transform and load pipelines with SSIS or Python (Pandas): cleansing, history tracking and automation.' },
      { title: 'ANALYTICS & AI', text: 'SSAS cubes, Machine Learning forecasting models, and generative AI (NLP, RAG, LLM) to extract value from text.' },
      { title: 'DASHBOARDS', text: 'Clear, interactive, decision-oriented Power BI or Tableau dashboards, validated with business teams and iterated.' },
    ],
  },
}
