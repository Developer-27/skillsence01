import { Code2, Database, Cpu, Layers } from "lucide-react";

const techStack = [
  {
    category: "AI Layer",
    items: ["GPT-4", "BERT", "Sentence Transformers"],
    icon: Cpu
  },
  {
    category: "Backend",
    items: ["FastAPI", "MongoDB Atlas", "Firebase Auth"],
    icon: Database
  },
  {
    category: "Frontend",
    items: ["Next.js", "SSR", "Fast UI"],
    icon: Code2
  },
  {
    category: "Integrations",
    items: ["YouTube API", "Coursera API", "Job Feeds"],
    icon: Layers
  }
];

const TechSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-foreground mb-6">
            Technical Excellence
          </h2>
          <p className="text-xl text-muted-foreground">
            Built on a robust, scalable architecture designed for millions of users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary text-primary-foreground mb-4">
                <tech.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
            <h3 className="text-2xl font-bold mb-6">System Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["User Input", "AI Reasoning", "NLP Skill Engine", "Roadmap Generator", "Dashboard"].map((step, index, array) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-6 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-center">
                    <div className="font-semibold">{step}</div>
                  </div>
                  {index < array.length - 1 && (
                    <div className="text-2xl opacity-50">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
