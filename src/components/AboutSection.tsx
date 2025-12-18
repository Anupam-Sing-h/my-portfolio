import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// about me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full-Stack Developer based in Ghaziabad, Uttar Pradesh, 
                with a strong foundation in Computer Science from ABES Institute of Technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech has taken me through data engineering at Altysys Technology, 
                where I built ETL pipelines with Azure and Databricks, to AI/ML projects at GI Ventures, 
                developing computer vision systems with 95% accuracy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on solving complex problems and building scalable applications 
                that make a real impact. Currently seeking opportunities to contribute 
                to innovative projects and grow as a developer.
              </p>

              {/* Contact Info */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-muted-foreground">Ghaziabad, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={18} className="text-primary" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">B.Tech in Computer Science</h3>
                    <p className="text-primary font-mono text-sm mt-1">ABES Institute of Technology</p>
                    <p className="text-muted-foreground text-sm mt-2">Nov 2021 – June 2025</p>
                    <p className="text-muted-foreground text-sm">CGPA: 7.08</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Intermediate</h3>
                    <p className="text-primary font-mono text-sm mt-1">Lucknow Public College</p>
                    <p className="text-muted-foreground text-sm mt-2">2020 | 78.8%</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">High School</h3>
                    <p className="text-primary font-mono text-sm mt-1">Little Flower School</p>
                    <p className="text-muted-foreground text-sm mt-2">2018 | 78.6%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
