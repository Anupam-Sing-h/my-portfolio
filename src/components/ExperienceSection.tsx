import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "Altysys Technology Pvt. Ltd",
    period: "Nov 2024 – Feb 2025",
    certificateLink: "https://github.com/Anupam-Sing-h/Certificates/blob/main/Altysys%20Certificate.pdf",
    points: [
      "Built ETL pipelines using Python, SQL, and Databricks for data ingestion and transformation",
      "Worked with Azure Data Lake and Blob Storage, selecting storage based on access patterns",
      "Applied Medallion Architecture for modular, reusable pipeline design",
      "Implemented CI/CD pipelines for automated deployment of workflows",
      "Set up alerts for pipeline failures using Azure Monitor and Databricks",
    ],
    tags: ["Python", "SQL", "Databricks", "Azure", "CI/CD"],
  },
  {
    title: "AI & ML Intern",
    company: "GI Ventures",
    period: "Dec 2023 – May 2024",
    certificateLink: "https://www.linkedin.com/posts/anupam-singh-04619024b_ai-machinelearning-artificiallntelligence-activity-7240035205510488065-UXjV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3I1TYBQriP5MvJu2jfdAqrUDPlRed_ds4",
    points: [
      "Accelerated computer vision projects with Nvidia DGX-100",
      "Enhanced image annotation and model training using Docker and Roboflow",
      "Developed PPE Violation Detection System with YOLOv7 and PyTorch (95% accuracy)",
      "Integrated with Google Gmail API for automated alerts",
    ],
    tags: ["YOLOv7", "PyTorch", "Docker", "Roboflow", "NVIDIA DGX"],
  },
  {
    title: "Summer Internship in MERN Stack",
    company: "ABESIT",
    period: "July 2024 – Aug 2024",
    certificateLink: "https://github.com/Anupam-Sing-h/Certificates/blob/main/MERN%20certificate.pdf",
    points: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js",
      "Implemented RESTful APIs and integrated frontend with backend services",
      "Learned best practices for modern web development workflows",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "REST API"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full glow relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-soft">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <Briefcase size={20} className="text-primary" />
                          {exp.title}
                          {exp.certificateLink && (
                            <a
                              href={exp.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </h3>
                        <p className="text-primary font-mono text-sm mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 md:mt-0 font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
