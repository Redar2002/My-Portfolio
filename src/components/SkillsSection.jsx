import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cpu, BarChart, Settings, Brain } from "lucide-react";

const Skills = [
  { name: "ReactJS", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },

  { name: "Laravel Lumen", level: 80, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Python", level: 85, category: "backend" },

  { name: "SQL Server", level: 90, category: "database" },
  { name: "SSIS (ETL)", level: 85, category: "database" },
  { name: "SSAS (OLAP)", level: 80, category: "database" },

  { name: "Power BI", level: 90, category: "data-viz" },

  { name: "OpenCV", level: 80, category: "ai" },
  { name: "YOLO (Object Detection)", level: 75, category: "ai" },

  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Visual Studio", level: 80, category: "tools" },
  { name: "Agile / Scrum", level: 85, category: "methodology" },
];

const categoryIcons = {
  frontend: <Code className="w-6 h-6 text-primary" />,
  backend: <Cpu className="w-6 h-6 text-primary" />,
  database: <Database className="w-6 h-6 text-primary" />,
  "data-viz": <BarChart className="w-6 h-6 text-primary" />,
  ai: <Brain className="w-6 h-6 text-primary" />,
  tools: <Settings className="w-6 h-6 text-primary" />,
  methodology: <Settings className="w-6 h-6 text-primary" />,
};

// <-- ICI la version JS sans types
const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.04, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = useMemo(
    () => ["all", ...new Set(Skills.map((s) => s.category))],
    []
  );
  const filteredSkills = useMemo(
    () =>
      activeCategory === "all"
        ? Skills
        : Skills.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Skills</span>
        </h2>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-primary text-white shadow-lg scale-105 border-primary"
                      : "bg-card text-foreground hover:bg-primary/10 hover:scale-105 hover:shadow-md"
                  }`}
                aria-pressed={active}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Grille des skills */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300
                           bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md
                           ring-1 ring-black/5 dark:ring-white/5 hover:-translate-y-0.5"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={idx}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0">{categoryIcons[skill.category]}</div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {skill.category}
                </p>

                <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-indigo-500"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-end">
                  <span className="text-xs font-medium">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};
