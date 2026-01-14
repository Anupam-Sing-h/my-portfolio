import { ExternalLink, Github, Folder, Code, Brain } from "lucide-react";
import { Button } from "./ui/button";

const webProjects = [
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
    title: "Bus Ticket Booking Platform",
    description:
      "A full‑stack MERN application for booking bus tickets online.This project demonstrates secure backend flows, MongoDB Atlas integration, and a React + Vite frontend deployed on Vercel with the backend running on Render.",
    tags: ["MERN", "Atlas Integration", "Render", "Vercel"],
    features: [
      "Admin dashboard for managing buses",
      "User Authentication for passengers",
      "Real-time seat decrement and ticket generation",
    ],
    github: "https://github.com/Anupam-Sing-h/Bus-Ticket-Booking-Platform",
    live: "https://bus-ticket-booking-platform.vercel.app/",
  },
];

const aiMlProjects = [
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
  {
    title: "Language Detection using NLP",
    description:
      "A scalable blogging Supervised NLP pipeline that classifies text into 17 languages with up to 97% accuracy. Built with Python and classical ML/NLP techniques for fast, interpretable predictions.",
    tags: ["NLP", "Python", "scikit-learn", "pandas", "numpy", "Text Classification", "Supervised Learning", "Model Evaluation"],
    features: [
      "97% accuracy across 17 languages on curated dataset",
      "Deterministic, explainable features with minimal dependencies",
      "CLI-ready script for quick experimentation and batch inference",
    ],
    github: "https://github.com/Anupam-Sing-h/QuickBlog",
  },
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  github?: string;
  live?: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-soft flex flex-col">
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
);

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

          {/* Web Development Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Web Development
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {webProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* AI & ML Projects */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                AI & Machine Learning
              </h3>
            </div>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
              <div className="grid md:grid-cols-2 gap-6">
              {aiMlProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
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
