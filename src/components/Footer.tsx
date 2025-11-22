import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-foreground mb-4">SkillSense</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transform career confusion into career confidence with AI-powered career intelligence for millions of students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} SkillSense. All rights reserved. Built with passion for India's future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
