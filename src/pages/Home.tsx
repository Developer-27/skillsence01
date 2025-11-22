import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
          <Brain className="h-4 w-4" />
          <span>AI-Powered Career Intelligence</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transform Career Confusion
          <br />
          Into <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Career Confidence</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          SkillSense uses advanced AI to help students discover their ideal career path, 
          identify skill gaps, and create personalized learning roadmaps.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link to="/features">
            <Button size="lg" className="gap-2">
              Explore Features <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get Early Access
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Users, value: "40M+", label: "Students Impacted Annually" },
          { icon: TrendingUp, value: "92%", label: "Career Match Accuracy" },
          { icon: Brain, value: "AI-First", label: "Intelligent Recommendations" }
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 rounded-lg border bg-card">
            <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Quick Overview */}
      <section className="bg-muted/30 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6">Why SkillSense?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
            <p className="text-muted-foreground">
              Over 85% of students lack clarity about their career path. Traditional career 
              counseling is one-time, generic, and doesn't adapt to individual strengths or 
              industry demands. This leads to poor job fit, wasted education, and career dissatisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-muted-foreground">
              SkillSense provides continuous, AI-driven guidance that analyzes your skills, 
              interests, and goals to recommend the best career paths. We then create personalized 
              learning roadmaps and track your progress in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
