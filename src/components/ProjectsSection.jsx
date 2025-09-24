import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Application Chatbot Universitaire",
    description:
      "Développement d’une application Streamlit simulant un chatbot pour l’ISMAGI, avec inscription, filières, débouchés et programme.",
    image: "/public/Analyse Tendances Avancées.png",
    tags: ["Python", "Streamlit", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/Redar2002/dashboard.git",
  },
  {
    id: 2,
    title: "Application E-commerce",
    description:
      "Création d’une boutique en ligne interactive avec gestion des produits, panier et authentification des utilisateurs (login/register).",
    image: "/public/ecommerce.png",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Redar2002/projetStage.git",
  },
  {
    id: 3,
    title: "Système Robotisé de Détection et Manipulation d’Objets",
    description:
      "Conception d’un système robotisé intégrant un bras VEX, un robot mobile et une caméra embarquée pour la détection et la manipulation automatisée d’objets avec YOLO et OpenCV.",
    image: "/public/Évolution des flux .png",
    tags: ["Python", "YOLO", "OpenCV", "Raspberry Pi", "VEXcode"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
       <div className="text-center mt-12">
  <a
    href="https://github.com/Redar2002" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-primary/90 hover:translate-x-1 transition"
  >
    <span>Check my GitHub</span>
    <ArrowRight size={18} />
  </a>
</div>

      </div>
    </section>
  );
};
