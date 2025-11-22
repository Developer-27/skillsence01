import { TrendingUp, Users, Globe, Zap } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Market Impact",
    points: [
      "India's CareerTech market: $3.5B+",
      "Target audience: 40M+ college students",
      "Universities & EdTechs ready for B2B expansion"
    ]
  },
  {
    icon: Users,
    title: "Social Impact",
    points: [
      "Affordable guidance for Tier 2-3 students",
      "Eliminates career guesswork",
      "Improves mental clarity and confidence"
    ]
  },
  {
    icon: Globe,
    title: "Accessibility",
    points: [
      "Non-English backgrounds supported",
      "Real opportunities for all",
      "Equal access to quality guidance"
    ]
  },
  {
    icon: Zap,
    title: "Innovation",
    points: [
      "First AI mentor with personalized maps",
      "360° career operating system",
      "Transparent, explainable recommendations"
    ]
  }
];

const ImpactSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-foreground mb-6">
            Transformative{" "}
            <span className="bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real impact on students' futures and India's workforce quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-success/50 hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-accent text-accent-foreground flex items-center justify-center">
                  <impact.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{impact.title}</h3>
                  <ul className="space-y-3">
                    {impact.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-success/10 via-accent/10 to-primary/10 border border-success/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            SkillSense = AI Mentor + Career Planner + Skill GPS
          </h3>
          <p className="text-lg text-muted-foreground">
            Empowering millions of students to discover their true potential
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
