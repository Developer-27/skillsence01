import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <MessageSquare className="h-4 w-4" />
          <span>Get in Touch</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Start a Conversation
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Interested in SkillSense? Have questions? Want to partner with us? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name</label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email Address</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                placeholder="Tell us more..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Other Ways to Reach Us</h2>
            <p className="text-muted-foreground">
              Choose your preferred method of communication.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hello@skillsense.ai",
                link: "mailto:hello@skillsense.ai"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 98765 43210",
                link: "tel:+919876543210"
              },
              {
                icon: MapPin,
                title: "Office",
                content: "Bangalore, Karnataka, India",
                link: null
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{item.title}</div>
                  {item.link ? (
                    <a href={item.link} className="text-primary hover:underline">
                      {item.content}
                    </a>
                  ) : (
                    <div className="text-muted-foreground">{item.content}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Boxes */}
          <div className="space-y-4 pt-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border">
              <h3 className="font-bold mb-2">For Students</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up for early access to SkillSense platform
              </p>
              <Button variant="outline" className="w-full">
                Get Early Access
              </Button>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-accent/5 to-primary/5 border">
              <h3 className="font-bold mb-2">For Institutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Partner with us to bring AI career guidance to your campus
              </p>
              <Button variant="outline" className="w-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
