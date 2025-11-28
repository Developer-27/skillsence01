import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Target, Zap, TrendingUp, CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
            <Brain className="h-4 w-4" />
            <span>AI-Powered Career Guidance for Every Student</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Personal Career
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Intelligence Platform</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalized AI counseling, expert community support, and affordable mentorship—designed specifically for tier-2 and tier-3 college students across India.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/ai-counselor">
              <Button size="lg" className="gap-2 text-lg px-8">
                Start Free AI Counseling <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Join Community
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { value: "50,000+", label: "Students Guided" },
              { value: "95%", label: "Success Rate" },
              { value: "100% Free", label: "AI Counseling" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Career Guidance Gap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Millions of talented students lack access to personalized career guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Generic Career Advice",
                problems: [
                  "One-size-fits-all counseling sessions",
                  "No consideration for individual strengths",
                  "Outdated career information",
                  "Limited follow-up support"
                ]
              },
              {
                title: "ChatGPT Limitations",
                problems: [
                  "Generic responses without context",
                  "No structured learning roadmap",
                  "Lacks Indian education system understanding",
                  "No progress tracking or accountability"
                ]
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border">
                <h3 className="text-2xl font-semibold mb-6 text-destructive">{item.title}</h3>
                <ul className="space-y-3">
                  {item.problems.map((problem, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The SkillSense Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three powerful pillars working together for your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Career Counselor",
                description: "Get personalized, step-by-step career roadmaps based on your unique profile, skills, and goals.",
                features: ["Personalized assessment", "Custom learning paths", "Progress tracking", "Resource recommendations"],
                link: "/ai-counselor"
              },
              {
                icon: Users,
                title: "Expert Community",
                description: "Connect with peers, get AI-powered answers, and access expert guidance on your career questions.",
                features: ["Peer discussions", "AI-assisted answers", "Expert moderation", "Success stories"],
                link: "/community"
              },
              {
                icon: Target,
                title: "Premium Mentorship",
                description: "One-on-one sessions with industry experts for personalized guidance and interview preparation.",
                features: ["1:1 expert sessions", "Resume reviews", "Mock interviews", "Career strategy"],
                link: "/mentorship"
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                <pillar.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={pillar.link}>
                  <Button variant="outline" className="w-full">
                    Explore <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are taking control of their future with personalized AI guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/ai-counselor">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                Start Your Free Assessment <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
