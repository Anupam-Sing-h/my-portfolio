import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS",
    link: "https://github.com/Anupam-Sing-h/Certificates/blob/main/TCS_iON.pdf",
  },
  {
    title: "Databricks Accredited - Databricks Fundamentals",
    issuer: "Databricks",
    link: "https://www.linkedin.com/posts/anupam-singh-04619024b_academy-accreditation-databricks-fundamentals-activity-7274989034706247680-AhRP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3I1TYBQriP5MvJu2jfdAqrUDPlRed_ds4",
  },
  {
    title: "Core Java & OOPs Training Program",
    issuer: "ABESIT",
    link: "https://github.com/Anupam-Sing-h/Certificates/blob/main/MERN%20certificate.pdf",
  },
  {
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    link: "https://www.linkedin.com/posts/anupam-singh-04619024b_postman-api-fundamentals-student-expert-activity-7244415092077821953-NX2P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3I1TYBQriP5MvJu2jfdAqrUDPlRed_ds4",
  },
  {
    title: "C++ Programming Language",
    issuer: "Udemy",
  },
  {
    title: "Generative AI",
    issuer: "Certification",
    link: "https://github.com/Anupam-Sing-h/Certificates/blob/main/Gen-AI.pdf",
  },
  {
    title: "Rest API",
    issuer: "Certification",
    link: "https://github.com/Anupam-Sing-h/Certificates/blob/main/Rest%20API.pdf",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="gradient-text">Credentials</span>
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:glow-soft"
              >
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 font-mono">
                    {cert.issuer}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
