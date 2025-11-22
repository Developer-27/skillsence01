import { Brain, Route, Target, TrendingUp, BookMarked, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Fit Engine",
    description: "Matches students to right careers with 92% accuracy using advanced AI algorithms"
  },
  {
    icon: Target,
    title: "Skill Gap Radar",
    description: "Identifies missing industry skills instantly through intelligent analysis"
  },
  {
    icon: Route,
    title: "AI Roadmap Generator",
    description: "Personalized 1-3 month learning plan tailored to your career goals"
  },
  {
    icon: BarChart3,
    title: "Live Career Dashboard",
    description: "Track daily progress and growth analytics in real-time"
  },
  {
    icon: BookMarked,
    title: "Smart Recommendations",
    description: "Curated courses, internships, projects, and certifications"
  },
  {
    icon: TrendingUp,
    title: "Continuous Progress Tracking",
    description: "Monitor your skill development and career advancement journey"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-foreground mb-6">
            What Makes It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            SkillSense combines cutting-edge AI with career science to provide comprehensive guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-accent text-accent-foreground mb-6 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
