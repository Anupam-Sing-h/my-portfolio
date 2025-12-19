import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import anupamPhoto from "@/assets/anupam-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="opacity-0 animate-fade-in order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                <img
                  src={anupamPhoto}
                  alt="Anupam Singh - Full-Stack Web Developer"
                  className="w-full h-full rounded-full object-cover object-top border-4 border-background"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Terminal-style intro */}
            <div className="inline-block mb-6 opacity-0 animate-fade-in">
              <span className="font-mono text-primary text-sm md:text-base bg-secondary/50 px-4 py-2 rounded-full border border-border">
                👋 Hello, World! I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-100">
              <span className="text-foreground">Anupam </span>
              <span className="gradient-text">Singh</span>
            </h1>

            {/* Title with terminal cursor */}
            <div className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground mb-8 opacity-0 animate-fade-in-up animate-delay-200">
              <span className="terminal-cursor">Full-Stack Web Developer</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
              B.Tech CSE graduate passionate about building scalable web applications, 
              data pipelines, and AI-powered solutions. Experienced with React, Next.js, 
              Node.js, and cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 opacity-0 animate-fade-in-up animate-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Anupam_Resume.pdf" download="Anupam_Singh_Resume.pdf">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 opacity-0 animate-fade-in-up animate-delay-500">
              <a
                href="https://github.com/Anupam-Sing-h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anupam-singh-04619024b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:anupamsingh584210@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
