import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-xl font-mono font-bold text-primary">
            &lt;AS /&gt;
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> by Anupam Singh
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
