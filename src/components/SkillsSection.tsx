import { Code, Database, Layout, Server, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C++", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Azure Data Lake"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "Vercel", "Docker", "CI/CD", "Databricks"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Roboflow"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
