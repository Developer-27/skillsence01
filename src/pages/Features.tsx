import { Brain, Target, TrendingUp, BookOpen, BarChart3, Compass } from "lucide-react";

export default function Features() {
  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <Brain className="h-4 w-4" />
          <span>AI-Powered Solution</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Intelligent Career Guidance System
        </h1>
        
        <p className="text-xl text-muted-foreground">
          SkillSense combines artificial intelligence, natural language processing, and 
          real-time industry data to provide personalized career guidance that evolves with you.
        </p>
      </div>

      {/* Core Features */}
      <section className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Brain,
            title: "AI Career Fit Engine",
            accuracy: "92% accuracy",
            description: "Our advanced AI analyzes your skills, interests, personality traits, and academic background to match you with careers where you'll excel. Uses machine learning models trained on millions of career success patterns."
          },
          {
            icon: Target,
            title: "Skill Gap Radar",
            accuracy: "Real-time analysis",
            description: "Instantly identifies missing skills for your target career. Compares your current skill set against industry requirements and highlights exactly what you need to learn to become job-ready."
          },
          {
            icon: Compass,
            title: "AI Roadmap Generator",
            accuracy: "1-3 month plans",
            description: "Creates personalized, step-by-step learning paths tailored to your goals and timeline. Includes courses, projects, certifications, and practical experience milestones."
          },
          {
            icon: BarChart3,
            title: "Live Career Dashboard",
            accuracy: "Daily tracking",
            description: "Monitor your progress with real-time analytics. Track skill development, course completion, project milestones, and overall career readiness score with visual insights."
          },
          {
            icon: BookOpen,
            title: "Smart Recommendations",
            accuracy: "Curated content",
            description: "AI-powered suggestions for courses, internships, projects, and certifications from verified sources. Prioritized based on your career goals, current skill level, and learning style."
          },
          {
            icon: TrendingUp,
            title: "Industry Alignment",
            accuracy: "Current trends",
            description: "Stay updated with emerging career trends, in-demand skills, and market salary insights. Our system continuously learns from job market data to keep recommendations relevant."
          }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-lg border bg-card space-y-4">
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                {feature.accuracy}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 rounded-xl p-8 md:p-12 space-y-8">
        <h2 className="text-3xl font-bold">How SkillSense Works</h2>
        
        <div className="space-y-6">
          {[
            { step: "01", title: "Comprehensive Assessment", desc: "Complete detailed questionnaires about your skills, interests, values, and goals" },
            { step: "02", title: "AI Analysis", desc: "Our algorithms process your data against millions of career paths and success patterns" },
            { step: "03", title: "Career Matching", desc: "Receive ranked career recommendations with detailed fit analysis and reasoning" },
            { step: "04", title: "Skill Gap Identification", desc: "Understand exactly what skills you need to develop for your chosen path" },
            { step: "05", title: "Roadmap Creation", desc: "Get a personalized learning plan with timelines, resources, and milestones" },
            { step: "06", title: "Continuous Tracking", desc: "Monitor progress, update goals, and adjust your path as you grow" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-primary/20">{item.step}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
