import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* --- Titre --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* --- Texte de présentation --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground/90">
              Passionate Web Developer & Data Analyst
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Je m’appelle <span className="font-semibold text-foreground">Reda Laksyer</span>, j’ai 23 ans et je suis passionné par
              l’informatique et les nouvelles technologies. Actuellement étudiant en{" "}
              <span className="text-primary font-semibold">Business Intelligence</span>, je suis à la recherche
              d’opportunités pour contribuer à des projets innovants et aider une
              entreprise à atteindre ses objectifs.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Je m’intéresse particulièrement au <span className="text-primary">développement applicatif</span>,
              à l’<span className="text-primary">analyse de données</span>, et à la création de solutions technologiques.
              Curieux et motivé, j’adore explorer de nouvelles technologies pour améliorer mes compétences.
            </p>

            {/* --- Boutons --- */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="reda (5).pdf"
                download
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* --- Cartes compétences --- */}
          <div className="grid grid-cols-1 gap-8">
            {/* Web Development */}
            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur-md border border-border shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building modern, responsive websites & apps with React, Tailwind & more.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur-md border border-border shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing clean, user-friendly interfaces and smooth experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur-md border border-border shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Organizing and leading projects effectively with Agile methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
