import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              I'm currently looking for new opportunities. Whether you have a question 
              or just want to say hi, my inbox is always open!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:anupamsingh584210@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    anupamsingh584210@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+917355512127"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +91-7355512127
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">New Delhi, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Anupam-Sing-h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anupam-singh-04619024b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Send className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                I'm always excited to work on new projects and bring ideas to life.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:anupamsingh584210@gmail.com">
                  <Mail size={18} />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
