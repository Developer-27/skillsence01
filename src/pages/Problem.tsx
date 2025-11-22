import { AlertCircle, TrendingDown, Users, Briefcase } from "lucide-react";

export default function Problem() {
  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm mb-4">
          <AlertCircle className="h-4 w-4" />
          <span>Critical Career Crisis</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          India's Career Clarity Crisis
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Despite producing millions of graduates annually, India faces a severe disconnect 
          between education and meaningful employment. The root cause? Lack of personalized 
          career guidance and skill development.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Users,
            stat: "40M+",
            label: "Students Face Career Uncertainty",
            description: "Every year, millions of students graduate without clear career direction"
          },
          {
            icon: TrendingDown,
            stat: "85%",
            label: "Lack Proper Career Guidance",
            description: "Most students rely on outdated counseling or peer pressure for decisions"
          },
          {
            icon: Briefcase,
            stat: "Millions",
            label: "Underemployed Despite Degrees",
            description: "Graduates work in roles that don't match their education or potential"
          }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-lg border bg-card space-y-3">
            <item.icon className="h-10 w-10 text-destructive" />
            <div className="text-3xl font-bold">{item.stat}</div>
            <div className="font-semibold">{item.label}</div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Core Problems */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Root Problems</h2>
        
        <div className="grid gap-6">
          {[
            {
              title: "No Skill-Career Mapping",
              description: "Students can't identify which careers align with their actual strengths and interests. They follow trends or family pressure instead of data-driven insights."
            },
            {
              title: "Generic One-Time Counseling",
              description: "Traditional career counseling is a single session that provides generic advice. There's no continuous monitoring or personalized guidance as students develop."
            },
            {
              title: "Education-Industry Gap",
              description: "Academic curricula don't align with current industry needs. Students graduate with theoretical knowledge but lack practical, job-ready skills."
            },
            {
              title: "No Structured Roadmap",
              description: "Even when students identify a career, they lack a clear, step-by-step plan to acquire necessary skills, certifications, and experience."
            }
          ].map((problem, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Statement */}
      <section className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-destructive">The Real Cost</h3>
        <p className="text-lg">
          <strong>Wrong career choices → Years wasted → Mental stress → Poor employability → Economic impact</strong>
        </p>
        <p className="text-muted-foreground mt-4">
          This isn't just an education problem—it's a national economic and mental health crisis 
          affecting millions of families and India's competitiveness in the global market.
        </p>
      </section>
    </div>
  );
}
