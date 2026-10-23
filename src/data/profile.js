export const profile = {
  firstName: 'Reda',
  lastName: 'Laksyer',
  role: 'Ingénieur BI & Data',
  shortRole: 'BI & Data Engineer',
  email: 'laksyerreda@gmail.com',
  phone: '+212 6 75 57 87 20',
  phoneHref: 'tel:+212675578720',
  location: 'Rabat, Maroc',
  cv: '/cv-reda-laksyer.pdf',
  photo: '/reda.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reda-laksyer-31704926a/' },
    { label: 'GitHub', href: 'https://github.com/Redar2002' },
    { label: 'WhatsApp', href: 'https://wa.me/212667641474' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100008622878301' },
  ],
}

export const skillGroups = [
  {
    title: 'Data & BI',
    items: ['SQL', 'SQL Server', 'SSIS', 'SSAS', 'Power BI', 'Tableau', 'Data Warehouse', 'Data Mart', 'ETL / ELT', 'Modélisation décisionnelle', 'KPI'],
  },
  {
    title: 'Data Science & IA',
    items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'NLP', 'RAG', 'LLM (API Gemini)', 'MCP'],
  },
  {
    title: 'Développement',
    items: ['PHP', 'Laravel / Lumen', 'API REST', 'React', 'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Outils',
    items: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
]

export const softSkills = [
  "Esprit d'analyse",
  'Rigueur',
  'Autonomie',
  "Esprit d'équipe",
  "Capacité d'apprentissage",
]

export const languages = [
  { name: 'Arabe', level: 'Maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Professionnel' },
]

export const education = [
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
]

export const experiences = [
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
]

export const projects = [
  {
    id: 'meeting',
    category: 'IA générative · PFE',
    title: 'Meeting Intelligence',
    description:
      "Plateforme d'IA qui analyse les réunions et génère automatiquement les synthèses, décisions, actions et KPI. Pipeline NLP / RAG en Python avec l'API Gemini, KPI suivis dans Power BI et outils connectés via MCP.",
    tags: ['Python', 'API Gemini', 'NLP', 'RAG', 'MCP', 'Power BI'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002',
  },
  {
    id: 'energy',
    category: 'Machine Learning · Data Viz',
    title: 'Prévision des flux électriques en Belgique',
    description:
      "Projet de fin d'année : collecte des données via l'API Elia, entraînement de modèles de Machine Learning pour prévoir les flux électriques transfrontaliers, et tableau de bord interactif de suivi et d'analyse des flux.",
    tags: ['Python', 'Pandas', 'Machine Learning', 'API Elia', 'Power BI'],
    image: '/projects/carte.png',
    url: 'https://github.com/Redar2002/dashboard',
  },
  {
    id: 'hospital',
    category: 'Business Intelligence',
    title: 'Data Mart — Gestion hospitalière',
    description:
      "Data Mart modélisé et alimenté par des flux ETL SSIS, avec un cube SSAS pour l'analyse multidimensionnelle, et des rapports Power BI sur les consultations médicales et les indicateurs de gestion hospitalière.",
    tags: ['SQL Server', 'SSIS', 'SSAS', 'Power BI'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002',
  },
  {
    id: 'cope',
    category: 'Développement Web · Stage',
    title: "Plateforme d'Orientation COPE",
    description:
      "Application d'orientation et de planification éducative à l'architecture modulaire : API REST Laravel Lumen côté back-end, consommée par une interface ReactJS.",
    tags: ['PHP', 'Laravel Lumen', 'API REST', 'ReactJS'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002/projetStage',
  },
  {
    id: 'robot',
    category: 'IoT & Computer Vision',
    title: 'Robot de Détection YOLO',
    description:
      "Système robotisé de détection, saisie et transport automatisé d'objets avec un bras VEX, un robot mobile, un convoyeur et une caméra embarquée. 95 % de précision en détection et 90 % en manipulation.",
    tags: ['Python', 'YOLO', 'OpenCV', 'Raspberry Pi'],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002',
  },
]

export const stages = [
  {
    title: 'BRIEFING',
    text: 'Comprendre les objectifs métier, les utilisateurs et les indicateurs attendus, pour relier chaque KPI à une décision concrète.',
  },
  {
    title: 'COLLECTE',
    text: 'Audit et intégration des sources (bases OLTP, fichiers, API comme Elia), contrôle de la qualité et de la volumétrie des données.',
  },
  {
    title: 'MODÉLISATION',
    text: 'Conception décisionnelle en étoile ou en flocon : Data Warehouse / Data Mart, tables de faits, dimensions, granularité et mesures clés.',
  },
  {
    title: 'ETL / ELT',
    text: 'Flux d’extraction, transformation et chargement avec SSIS ou Python (Pandas) : nettoyage, historisation et automatisation.',
  },
  {
    title: 'ANALYSE & IA',
    text: 'Cubes SSAS, modèles de Machine Learning pour la prévision, et IA générative (NLP, RAG, LLM) pour extraire de la valeur du texte.',
  },
  {
    title: 'DASHBOARDS',
    text: 'Tableaux de bord Power BI ou Tableau clairs, interactifs et orientés décision, puis validation avec les métiers et itérations.',
  },
]
