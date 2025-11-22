import { Code, Database, Cpu, Cloud, Lock, Zap } from "lucide-react";

export default function Technology() {
  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
          <Code className="h-4 w-4" />
          <span>Technical Architecture</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Built on Modern, Scalable Technology
        </h1>
        
        <p className="text-xl text-muted-foreground">
          SkillSense leverages cutting-edge AI models, efficient backend architecture, 
          and cloud infrastructure to deliver fast, reliable, and intelligent career guidance.
        </p>
      </div>

      {/* Tech Stack Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Cpu,
            title: "AI & Machine Learning",
            items: ["GPT-4 API", "BERT Models", "Sentence Transformers", "Custom NLP Pipelines"]
          },
          {
            icon: Code,
            title: "Application Stack",
            items: ["Next.js Frontend", "FastAPI Backend", "React with TypeScript", "Tailwind CSS"]
          },
          {
            icon: Database,
            title: "Data & Storage",
            items: ["MongoDB Atlas", "Firebase Auth", "Redis Cache", "PostgreSQL"]
          }
        ].map((tech, i) => (
          <div key={i} className="p-6 rounded-lg border bg-card space-y-4">
            <tech.icon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold">{tech.title}</h3>
            <ul className="space-y-2">
              {tech.items.map((item, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Architecture Flow */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">System Architecture</h2>
        
        <div className="bg-muted/30 rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { label: "User Input", desc: "Skills, interests, goals" },
              { label: "AI Processing", desc: "GPT-4 analysis" },
              { label: "NLP Engine", desc: "Skill extraction" },
              { label: "ML Matching", desc: "Career recommendations" },
              { label: "Dashboard", desc: "Real-time insights" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-primary">{i + 1}</span>
                </div>
                <div className="font-semibold text-sm mb-1">{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-0.5 w-12 bg-primary/30" />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Cloud,
            title: "Cloud-Native & Scalable",
            description: "Deployed on Vercel and AWS with auto-scaling capabilities. Can handle millions of concurrent users with minimal latency."
          },
          {
            icon: Lock,
            title: "Secure & Compliant",
            description: "Enterprise-grade security with encrypted data storage, OAuth 2.0 authentication, and GDPR compliance. Your data is protected."
          },
          {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for performance with edge computing, CDN delivery, and efficient caching. Average response time under 200ms."
          },
          {
            icon: Database,
            title: "Data-Driven Intelligence",
            description: "Continuously learning from user data, job market trends, and skill requirements. Our models improve with every interaction."
          }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-lg border bg-card space-y-3">
            <feature.icon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Integrations */}
      <section className="bg-accent/5 rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">Third-Party Integrations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "OpenAI GPT-4", purpose: "Natural language understanding" },
            { name: "Coursera API", purpose: "Course recommendations" },
            { name: "LinkedIn Jobs", purpose: "Live job market data" },
            { name: "YouTube API", purpose: "Tutorial recommendations" },
            { name: "GitHub API", purpose: "Project suggestions" },
            { name: "Stripe", purpose: "Payment processing" }
          ].map((integration, i) => (
            <div key={i} className="p-4 rounded-lg bg-background border">
              <div className="font-semibold mb-1">{integration.name}</div>
              <div className="text-sm text-muted-foreground">{integration.purpose}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
