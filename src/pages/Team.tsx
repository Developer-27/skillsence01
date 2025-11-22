import { Linkedin, Mail, Brain, Code, Palette, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <Brain className="h-4 w-4" />
          <span>Meet the Team</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Built by Experts Who Care
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Our diverse team combines technical expertise with deep understanding of 
          education and career development challenges in India.
        </p>
      </div>

      {/* Team Members */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            name: "Rahmat Ali",
            role: "AI/ML Engineer",
            icon: Brain,
            bio: "Specializes in recommendation systems and machine learning algorithms. Previously built intelligent product recommendation systems serving millions of users.",
            expertise: ["Machine Learning", "Deep Learning", "NLP", "Python"]
          },
          {
            name: "Chetan Galphat",
            role: "Full-Stack Developer",
            icon: Code,
            bio: "B.Tech Computer Science student with proven track record in building scalable web applications. Expertise in modern frameworks and cloud deployment.",
            expertise: ["React", "Node.js", "FastAPI", "MongoDB"]
          },
          {
            name: "Deepanshu Pandey",
            role: "UI/UX Designer & Developer",
            icon: Palette,
            bio: "Creates intuitive, user-centered interfaces. His previous design work increased user engagement by 30% on education platforms through simplified workflows.",
            expertise: ["UI/UX Design", "Frontend Dev", "User Research", "Figma"]
          },
          {
            name: "Arshad Javed",
            role: "Product Strategist",
            icon: Target,
            bio: "Former Product Lead with expertise in go-to-market strategy and product growth. Brings strategic vision to align technology with market needs.",
            expertise: ["Product Strategy", "Market Analysis", "Growth", "Leadership"]
          }
        ].map((member, i) => (
          <div key={i} className="p-6 rounded-lg border bg-card space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <member.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">{member.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, j) => (
                <span key={j} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-center leading-relaxed">
          We're on a mission to democratize career guidance in India. Every student, 
          regardless of their background or location, deserves access to intelligent, 
          personalized career counseling. SkillSense is our answer to bridging the gap 
          between education and meaningful employment.
        </p>
      </section>

      {/* Why We Built This */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Why We Built SkillSense</h2>
        
        <div className="space-y-4">
          {[
            {
              title: "Personal Experience",
              content: "Each of us struggled with career clarity during our own education. We saw friends make wrong choices based on limited information or family pressure."
            },
            {
              title: "Market Gap",
              content: "Existing career guidance solutions are either too expensive, too generic, or completely outdated. Students need something better."
            },
            {
              title: "Technology Opportunity",
              content: "AI and machine learning have reached a point where personalized career guidance at scale is not just possible—it's inevitable. We want to be the ones who make it happen right."
            },
            {
              title: "National Impact",
              content: "India's demographic dividend can only be realized if our youth are in the right careers. This is bigger than a startup—it's a contribution to nation-building."
            }
          ].map((reason, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Want to Join Our Mission?</h2>
        <p className="text-muted-foreground mb-6">
          We're always looking for talented individuals who share our vision.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="gap-2">
            <Mail className="h-4 w-4" />
            Contact Us
          </Button>
          <Button variant="outline" className="gap-2">
            <Linkedin className="h-4 w-4" />
            View on LinkedIn
          </Button>
        </div>
      </section>
    </div>
  );
}
