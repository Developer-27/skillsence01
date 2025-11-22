import { AlertCircle, TrendingDown, Users, BookOpen } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    stat: "85%",
    title: "Don't Know Which Role Fits",
    description: "Students lack understanding of their strengths and suitable career paths"
  },
  {
    icon: BookOpen,
    stat: "1x",
    title: "Single-Session Counseling",
    description: "Colleges rely on outdated, one-time guidance instead of continuous support"
  },
  {
    icon: TrendingDown,
    stat: "Gap",
    title: "Learning vs Industry Needs",
    description: "Students learn syllabus while industry demands practical skills"
  },
  {
    icon: Users,
    stat: "0",
    title: "No Integrated System",
    description: "Missing unified platform for skill discovery, role identification, and progress tracking"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-foreground mb-6">
            The Real Problems
          </h2>
          <p className="text-xl text-muted-foreground">
            Students choose careers through chance, pressure, or confusion—not strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elegant transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-primary text-primary-foreground mb-6 group-hover:scale-110 transition-smooth">
                <problem.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{problem.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl gradient-primary text-primary-foreground max-w-4xl mx-auto text-center shadow-elegant">
          <p className="text-2xl font-semibold mb-2">Impact</p>
          <p className="text-lg opacity-90">
            Wrong career → wasted years → mental stress → poor employability
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
