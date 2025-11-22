import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Rahmat Ali",
    role: "AI/ML Engineer",
    description: "Created recommendation systems for software products. Specializes in machine learning algorithms and AI model optimization.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahmat"
  },
  {
    name: "Chetan Galphat",
    role: "Full-Stack Developer",
    description: "B.Tech Computer Science. Built robust web applications across multiple projects with focus on scalability.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chetan"
  },
  {
    name: "Deepanshu Pandey",
    role: "UI/UX & Full-Stack",
    description: "Creates intuitive, user-friendly interfaces. Increased user engagement by 30% on education platforms.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepanshu"
  },
  {
    name: "Arshad Javed",
    role: "Strategic Product Architect",
    description: "Product Lead with expertise in market strategy and product growth. Drives strategic vision and execution.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arshad"
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-foreground mb-6">
            Our Visionary Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Driven by expertise, united by a passion for student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elegant transition-smooth text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-accent/30 transition-smooth">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <div className="text-sm font-medium text-accent mb-4">{member.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>
              
              <button className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">Connect</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
