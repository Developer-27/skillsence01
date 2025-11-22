import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-16 text-center shadow-elegant">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-8">
                <Rocket className="w-4 h-4" />
                Join Our Transformative Mission
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
                Ready to Transform<br />Millions of Careers?
              </h2>
              
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
                Our team combines cutting-edge AI expertise with deep market insight to address India's critical career guidance gap. Invest in SkillSense to empower millions and seize an unparalleled market opportunity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group bg-primary-foreground text-primary hover:scale-105"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
