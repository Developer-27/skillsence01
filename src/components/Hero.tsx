import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Career Intelligence" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-mesh" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-4 h-4" />
            AI-Powered Career Intelligence
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Transform Career{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Confusion
            </span>
            <br />
            Into Career{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            India produces talent. But not career clarity. SkillSense uses AI to match students to the right careers with 92% accuracy.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">40M+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Affected Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">85%</div>
              <div className="text-sm text-muted-foreground mt-1">Lack Career Clarity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-success">92%</div>
              <div className="text-sm text-muted-foreground mt-1">AI Match Accuracy</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
