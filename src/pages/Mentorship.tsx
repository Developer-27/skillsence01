import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Video, CheckCircle2, Calendar, ArrowRight, Award, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  experience: string;
  rating: number;
  reviews: number;
  sessions: number;
  price: number;
  image: string;
  available: boolean;
}

const mockMentors: Mentor[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Software Engineer",
    company: "Google",
    expertise: ["Full-Stack Development", "System Design", "Career Growth"],
    experience: "8 years",
    rating: 4.9,
    reviews: 124,
    sessions: 340,
    price: 999,
    image: "RK",
    available: true
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Data Science Lead",
    company: "Microsoft",
    expertise: ["Machine Learning", "Data Analytics", "Python"],
    experience: "6 years",
    rating: 4.8,
    reviews: 98,
    sessions: 215,
    price: 899,
    image: "PM",
    available: true
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Product Manager",
    company: "Amazon",
    expertise: ["Product Strategy", "Career Switch", "Interview Prep"],
    experience: "10 years",
    rating: 5.0,
    reviews: 156,
    sessions: 420,
    price: 1299,
    image: "AS",
    available: false
  },
  {
    id: 4,
    name: "Ananya Reddy",
    role: "Frontend Architect",
    company: "Flipkart",
    expertise: ["React", "UI/UX", "Web Performance"],
    experience: "7 years",
    rating: 4.9,
    reviews: 102,
    sessions: 280,
    price: 899,
    image: "AR",
    available: true
  }
];

const successStories = [
  {
    student: "Rohit Sharma",
    college: "Tier-3 College, UP",
    achievement: "Landed SDE role at Paytm",
    testimonial: "The mentorship sessions helped me crack the interview. Got personalized guidance on DSA and system design.",
    sessions: 4
  },
  {
    student: "Sneha Patel",
    college: "Local College, Gujarat",
    achievement: "Switched to Data Science from Testing",
    testimonial: "My mentor helped me build a strong portfolio and guided me through the transition. Now working at a startup!",
    sessions: 6
  }
];

export default function Mentorship() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <Badge className="mb-4">Premium Feature</Badge>
          <h1 className="text-5xl font-bold">1:1 Expert Mentorship</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance from industry experts at leading tech companies. 
            Affordable sessions designed for tier-2 and tier-3 college students.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2">
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View All Mentors
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Premium Mentorship?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Go beyond AI guidance with human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Live 1:1 Sessions",
                description: "Direct video calls with industry experts who understand your challenges",
                features: ["Screen sharing", "Code reviews", "Real-time feedback"]
              },
              {
                icon: Target,
                title: "Personalized Strategy",
                description: "Custom career roadmap based on your unique situation and goals",
                features: ["Resume optimization", "Interview prep", "Salary negotiation"]
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Join hundreds of students who've landed their dream jobs",
                features: ["85% placement rate", "3x interview success", "Higher packages"]
              }
            ].map((benefit, i) => (
              <Card key={i} className="p-8">
                <benefit.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Mentors</h2>
            <p className="text-muted-foreground">Learn from professionals at top tech companies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockMentors.map(mentor => (
              <Card key={mentor.id} className="p-6">
                <div className="flex gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {mentor.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                      </div>
                      {mentor.available ? (
                        <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/20">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500/20">
                          Booked
                        </Badge>
                      )}
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-muted-foreground">({mentor.reviews})</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{mentor.sessions} sessions</span>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-2xl font-bold">₹{mentor.price}</div>
                        <div className="text-xs text-muted-foreground">per 45-min session</div>
                      </div>
                      <Button disabled={!mentor.available}>
                        {mentor.available ? "Book Session" : "Fully Booked"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Free vs Premium */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free AI vs Premium Mentorship</h2>
            <p className="text-muted-foreground">Choose what works best for your goals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free AI */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge variant="outline" className="mb-4">Always Free</Badge>
                <h3 className="text-2xl font-bold mb-2">AI Career Counselor</h3>
                <div className="text-3xl font-bold text-primary">₹0</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Personalized career roadmap",
                  "Skill gap analysis",
                  "Resource recommendations",
                  "Community forum access",
                  "Progress tracking",
                  "24/7 AI availability"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/ai-counselor">
                <Button variant="outline" className="w-full">
                  Start Free
                </Button>
              </Link>
            </Card>

            {/* Premium */}
            <Card className="p-8 border-primary shadow-lg bg-primary/5 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Best Results
              </div>
              
              <div className="text-center mb-6">
                <Badge className="mb-4">Premium</Badge>
                <h3 className="text-2xl font-bold mb-2">Expert Mentorship</h3>
                <div className="text-3xl font-bold">₹499</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Everything in Free, plus:",
                  "2 live 1:1 sessions/month",
                  "Resume review & optimization",
                  "Mock interviews with feedback",
                  "Career strategy planning",
                  "Priority community support",
                  "Industry insider tips"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className={i === 0 ? "font-semibold" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">
                Get Premium
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground">Real results from students like you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {story.student.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.student}</h3>
                    <p className="text-sm text-muted-foreground">{story.college}</p>
                  </div>
                </div>

                <Badge className="mb-4 bg-green-500/10 text-green-700 border-green-500/20">
                  {story.achievement}
                </Badge>

                <p className="text-muted-foreground mb-4 italic">"{story.testimonial}"</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{story.sessions} mentorship sessions</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 px-6">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Session Pricing</h2>
              <p className="text-muted-foreground">Flexible options to match your budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { sessions: 1, pricePerSession: 999, total: 999, discount: 0 },
                { sessions: 5, pricePerSession: 899, total: 4495, discount: 10 },
                { sessions: 10, pricePerSession: 799, total: 7990, discount: 20 }
              ].map((plan, i) => (
                <Card key={i} className={`p-6 ${i === 1 ? 'border-primary' : ''}`}>
                  {i === 1 && (
                    <Badge className="mb-4 w-full justify-center">Most Popular</Badge>
                  )}
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{plan.sessions}</div>
                    <div className="text-sm text-muted-foreground mb-4">Session{plan.sessions > 1 ? 's' : ''}</div>
                    
                    <div className="text-2xl font-bold mb-1">₹{plan.pricePerSession}</div>
                    <div className="text-xs text-muted-foreground mb-4">per session</div>
                    
                    {plan.discount > 0 && (
                      <Badge variant="secondary" className="mb-4">
                        Save {plan.discount}%
                      </Badge>
                    )}
                    
                    <div className="border-t pt-4 mb-4">
                      <div className="text-sm text-muted-foreground">Total</div>
                      <div className="text-xl font-bold">₹{plan.total}</div>
                    </div>
                    
                    <Button variant={i === 1 ? "default" : "outline"} className="w-full">
                      Select Plan
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Accelerate Your Career?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book a free 15-minute consultation with a mentor to discuss your goals
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Calendar className="h-5 w-5" />
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
