import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-commerce Multi-vendor Platform",
    description:
      "Built a scalable e-commerce platform with dynamic cart, address, and order flows. Integrated Stripe for secure payments with post-payment cart clearing and order updates.",
    tags: ["Next.js", "Express", "Stripe", "Vercel", "Clerk"],
    features: [
      "Multi-vendor support",
      "Secure Stripe payments",
      "Automated dependency patching",
    ],
    github: "https://github.com/Anupam-Sing-h/GoCart",
    live: "https://go-cart-ecru-five.vercel.app",
  },
  {
    title: "QuickBlog using AI",
    description:
      "A scalable blogging platform with secure admin flows, dynamic post rendering, and markdown support. Features AI-powered content generation with Gemini AI.",
    tags: ["MERN", "Gemini AI", "Image Kit", "Prisma", "Inngest"],
    features: [
      "AI content generation",
      "Role-based access control",
      "Background job scheduling",
    ],
    github: "https://github.com/Anupam-Sing-h/QuickBlog",
    live: "https://quick-blog-seven-beta.vercel.app",
  },
  {
    title: "PPE Violation Detection System",
    description:
      "Automated system using TensorFlow, YOLOv7, and NVIDIA GPU servers for detecting Personal Protective Equipment violations in industrial settings with 95% accuracy.",
    tags: ["NVIDIA DGX", "Roboflow", "YOLOv7", "TensorFlow", "PyTorch"],
    features: [
      "Real-time CCTV integration",
      "Automated email alerts",
      "95% detection accuracy",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Things I've <span className="gradient-text">Built</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-soft flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Folder className="text-primary" size={24} />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                      {tagIndex < project.tags.length - 1 && (
                        <span className="ml-2 text-border">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" asChild>
              <a
                href="https://github.com/Anupam-Sing-h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
