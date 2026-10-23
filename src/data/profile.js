export const profile = {
  firstName: 'Reda',
  lastName: 'Laksyer',
  role: 'Analyste Business Intelligence',
  shortRole: 'BI Analyst & Developer',
  email: 'Laksyerreda@gmail.com',
  phone: '+212 6 75 57 87 20',
  phoneHref: 'tel:+212675578720',
  location: 'Témara, Maroc',
  cv: '/cv-reda-laksyer.pdf',
  photo: '/reda.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reda-laksyer-31704926a/' },
    { label: 'GitHub', href: 'https://github.com/Redar2002' },
    { label: 'WhatsApp', href: 'https://wa.me/212667641474' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100008622878301' },
  ],
}

export const skills = [
  'SQL',
  'Power BI',
  'SSIS',
  'SSAS',
  'Python',
  'OpenCV',
  'YOLO',
  'ReactJS',
  'Laravel Lumen',
  'Tailwind CSS',
  'ETL',
  'OLAP',
  'Modélisation multidimensionnelle',
  'Agile (Scrum)',
  'SSMS',
  'Raspberry Pi',
]

export const softSkills = [
  'Gestion de projet',
  'Communication',
  'Travail en équipe',
  'Leadership',
  'Pensée critique',
  'Gestion du temps',
]

export const languages = ['Français', 'Anglais', 'Arabe']

export const education = [
  {
    year: '2025',
    title: '2ᵉ année cycle en Business Intelligence',
    school: "ISMAGI — Institut Supérieur de Génie Informatique",
    detail: 'Spécialité BI',
  },
  {
    year: '2024',
    title: 'Licence professionnelle en Internet des Objets',
    school: "ISMAGI — Institut Supérieur de Génie Informatique",
    detail: 'Spécialité IoT',
  },
  {
    year: '2023',
    title: 'Technicien Spécialisé en Développement Digital',
    school: "ISTA — Institut Spécialisé de Technologie Appliquée",
    detail: 'Spécialité Développement',
  },
]

export const experiences = [
  {
    year: '2024 — 2025',
    title: 'Data Mart de Gestion Hospitalière',
    place: 'Projet BI — Formation Business Intelligence & Data Science',
    points: [
      'Modélisation en étoile : FactConsultation + DimDate, DimMédecin, DimService, DimPatient',
      'ETL avec SSIS depuis un système OLTP, cube OLAP avec SSAS',
      'Tableau de bord Power BI interactif pour la direction médicale',
    ],
  },
  {
    year: '2023 — 2024',
    title: 'Système robotique de détection & manipulation',
    place: 'Projet IoT — Bras VEX, robot mobile, convoyeur, caméra',
    points: [
      'Détection temps réel avec YOLO + OpenCV',
      'Orchestration Python, Raspberry Pi & VEXcode',
      '95 % de précision en détection, 90 % en manipulation',
    ],
  },
  {
    year: '2022 — 2023',
    title: 'Stage en développement web',
    place: "COPE — Centre d'Orientation et de Planification de l'Éducation, Rabat",
    points: [
      'API REST performante avec Laravel Lumen',
      'Interface dynamique et réactive en ReactJS',
      'Architecture modulaire pour la maintenance et l’évolution',
    ],
  },
]

export const projects = [
  {
    id: 'hospital',
    category: 'Business Intelligence',
    title: 'Data Mart Hospitalier',
    description:
      "Conception d'un Data Mart pour le suivi et l'analyse des consultations médicales : modèle en étoile, mesures clés (nombre, durée et coût des consultations), dictionnaire de données et matrice d'alignement stratégique, alimentés par un ETL SSIS, un cube SSAS et un dashboard Power BI.",
    tags: ['SQL Server', 'SSIS', 'SSAS', 'Power BI', 'OLAP'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002',
  },
  {
    id: 'energy',
    category: 'Data Visualisation',
    title: 'Dashboard Flux Énergétiques',
    description:
      "Tableau de bord interactif d'analyse des échanges d'électricité transfrontaliers : carte des interconnexions, évolution horaire des flux, balance import / export, statistiques et prévisions de tendances.",
    tags: ['Python', 'Streamlit', 'Plotly', 'Prévision'],
    image: '/projects/carte.png',
    url: 'https://github.com/Redar2002/dashboard',
  },
  {
    id: 'robot',
    category: 'IoT & Computer Vision',
    title: 'Robot de Détection YOLO',
    description:
      "Système robotisé de détection, saisie et transport automatisé d'objets avec un bras VEX, un robot mobile, un convoyeur et une caméra embarquée. Validé en conditions réelles : 95 % de précision en détection et 90 % en manipulation.",
    tags: ['Python', 'YOLO', 'OpenCV', 'Raspberry Pi', 'VEXcode'],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002',
  },
  {
    id: 'cope',
    category: 'Développement Web',
    title: "Plateforme d'Orientation COPE",
    description:
      "Application web dédiée à l'orientation et à la planification de l'éducation, réalisée en stage : API REST Laravel Lumen côté back-end, interface ReactJS dynamique côté front-end, architecture modulaire.",
    tags: ['ReactJS', 'Laravel Lumen', 'REST API', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: 'https://github.com/Redar2002/projetStage',
  },
  {
    id: 'shop',
    category: 'Développement Web',
    title: 'Application E-commerce',
    description:
      'Boutique en ligne interactive avec gestion des produits, panier et authentification des utilisateurs (inscription / connexion).',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: '/projects/ecommerce.png',
    url: 'https://github.com/Redar2002',
  },
]

export const stages = [
  {
    title: 'BRIEFING',
    text: "Comprendre les objectifs métier, les utilisateurs et les indicateurs attendus. Je construis une matrice d'alignement stratégique pour relier chaque KPI à une décision.",
  },
  {
    title: 'ANALYSE',
    text: 'Audit des sources (OLTP, fichiers, API), qualité et volumétrie des données, rédaction du dictionnaire de données.',
  },
  {
    title: 'MODÉLISATION',
    text: 'Conception multidimensionnelle en étoile ou en flocon : tables de faits, dimensions, granularité et mesures clés.',
  },
  {
    title: 'ETL',
    text: "Extraction, transformation et chargement avec SSIS ou Python : nettoyage, historisation et automatisation des flux.",
  },
  {
    title: 'OLAP & DASHBOARDS',
    text: 'Cubes SSAS pour l’analyse multidimensionnelle et tableaux de bord Power BI clairs, interactifs et orientés décision.',
  },
  {
    title: 'LIVRAISON',
    text: 'Tests, validation avec les métiers, documentation et itérations Agile (Scrum) pour faire évoluer la solution.',
  },
]
