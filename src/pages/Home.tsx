import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Users,
  Target,
  Zap,
  TrendingUp,
  CheckCircle2,
  X,
  Star,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Home.jsx — polished, accessible, responsive single-file React component
// Improvements made:
// - Componentized UI (Hero, Stats, ProblemCard, PillarCard, TestimonialCarousel, CTA)
// - Small animations using framer-motion for polish
// - Accessible markup (aria labels, roles, semantic tags)
// - Dynamic stats with counters and friendly formatting
// - Testimonial carousel (no external deps) to show social proof
// - Tighter microcopy targeted to tier-2 / tier-3 Indian colleges
// - Clear CTAs and visual focus states
// - Comments where to hook analytics or backend
// - Added floating chat widget with API integration

function formatNumber(n) {
  if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(1)} Cr+`;
  if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(1)}L+`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k+`;
  return `${n}`;
}

function useCounter(target, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    if (target === 0) return;
    const stepTime = Math.max(10, Math.floor(duration / target));
    const timer = setInterval(() => {
      start += Math.max(1, Math.floor(target / (duration / 20)));
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else setValue(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

const statsSeed = [
  { id: 1, value: 50000, label: "Students Guided" },
  { id: 2, value: 95, label: "Avg. Success Rate (%)" },
  { id: 3, value: 100, label: "AI Counseling - Free (%)" },
];

// Chat Widget Component
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock API call for chat - replace with actual API endpoint
  const sendMessageToAPI = async (message) => {
    // Simulate API call delay
    setIsLoading(true);
    
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      
      // Simulate AI response - replace with actual API response handling
      const aiResponse = `I understand you're asking about "${message}". As an AI career counselor, I can help you with career guidance, roadmap planning, and skill development. Could you tell me more about your specific situation?`;
      
      return aiResponse;
    } catch (error) {
      console.error('API Error:', error);
      return "I apologize, but I'm having trouble connecting right now. Please try again in a few moments.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    const aiResponse = await sendMessageToAPI(inputMessage);
    
    const botMessage = {
      id: Date.now() + 1,
      text: aiResponse,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-200"
        aria-label="Open chat with AI counselor"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
        >
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <span className="font-semibold">AI Career Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary-foreground/20 rounded-full p-1"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <Brain className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">Hello! I'm your AI career counselor. How can I help you today?</p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 block mt-1">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about careers, skills, guidance..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                size="sm"
                className="shrink-0"
              >
                Send
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI-powered career guidance • Free & confidential
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}

function Hero() {
  return (
    <header className="relative py-20 px-6 bg-gradient-to-br from-primary/6 via-background to-accent/6">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
          <Brain className="h-4 w-4" aria-hidden />
          <span>AI-Powered career guidance — made for tier‑2 & tier‑3 India</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Your personal career
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            intelligence platform
          </span>
        </motion.h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Personalized AI counseling, peer community support, and affordable mentorship — practical roadmaps and placements help for students from every college tier.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Link to="/ai-counselor" aria-label="Start free AI counseling">
            <Button size="lg" className="gap-2 text-lg px-8">
              Start Free AI Counseling <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/community" aria-label="Join the community">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Join Community
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
          {statsSeed.map((s) => (
            <StatCard key={s.id} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </header>
  );
}

function StatCard({ value, label }) {
  // Convert 95 to percent style; keep dynamic
  const displayTarget = label.includes("%") ? value : value;
  const current = useCounter(displayTarget, 800);
  const display = label.includes("%") ? `${current}%` : formatNumber(current);
  return (
    <div className="p-6 rounded-lg bg-card border" role="region" aria-label={label}>
      <div className="text-3xl font-bold text-primary mb-2">{display}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function ProblemCard({ title, problems = [] }) {
  return (
    <article className="p-8 rounded-xl bg-card border">
      <h3 className="text-2xl font-semibold mb-6 text-destructive">{title}</h3>
      <ul className="space-y-3">
        {problems.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" aria-hidden />
            <span className="text-muted-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PillarCard({ icon: Icon, title, description, features = [], link }) {
  return (
    <div className="p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-center gap-4">
        <Icon className="h-12 w-12 text-primary mb-2" aria-hidden />
        <h3 className="text-2xl font-semibold mb-0">{title}</h3>
      </div>
      <p className="text-muted-foreground my-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, j) => (
          <li key={j} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link to={link} className="w-full block">
          <Button variant="outline" className="w-full">
            Explore <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function TestimonialCarousel({ items = [] }) {
  const [idx, setIdx] = useState(0);
  const max = items.length;
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % max), 5000);
    return () => clearInterval(t);
  }, [max]);

  if (!items.length) return null;

  const prev = () => setIdx((p) => (p - 1 + max) % max);
  const next = () => setIdx((p) => (p + 1) % max);

  return (
    <section className="mt-10 bg-card/80 p-6 rounded-xl border" aria-label="Success stories">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button onClick={prev} aria-label="Previous testimonial" className="p-2 rounded hover:bg-muted">
          ‹
        </button>

        <motion.blockquote
          key={idx}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="flex-1"
        >
          <p className="text-lg sm:text-xl">"{items[idx].text}"</p>
          <footer className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>{items[idx].author} • {items[idx].meta}</span>
          </footer>
        </motion.blockquote>

        <button onClick={next} aria-label="Next testimonial" className="p-2 rounded hover:bg-muted">
          ›
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  const pillars = useMemo(
    () => [
      {
        icon: Brain,
        title: "AI Career Counselor",
        description:
          "Personalized, step-by-step career roadmaps tailored to your profile, college constraints, and local opportunity landscape.",
        features: ["Personalized assessment", "Custom learning paths", "Progress tracking", "Resource recommendations"],
        link: "/ai-counselor",
      },
      {
        icon: Users,
        title: "Expert Community",
        description:
          "Connect with peers, alumni and mentors — share interview experiences, job leads and local placement tips.",
        features: ["Peer discussions", "AI-assisted answers", "Expert moderation", "Success stories"],
        link: "/community",
      },
      {
        icon: Target,
        title: "Premium Mentorship",
        description: "One-on-one sessions focused on résumés, mock interviews and job search strategy — made affordable.",
        features: ["1:1 expert sessions", "Resume reviews", "Mock interviews", "Career strategy"],
        link: "/mentorship",
      },
    ],
    []
  );

  const problems = [
    {
      title: "Generic Career Advice",
      problems: [
        "One-size-fits-all counseling sessions",
        "No consideration for individual strengths",
        "Outdated career information",
        "Limited follow-up support",
      ],
    },
    {
      title: "ChatGPT Limitations",
      problems: [
        "Generic responses without context",
        "No structured learning roadmap",
        "Lacks Indian education system understanding",
        "No progress tracking or accountability",
      ],
    },
  ];

  const testimonials = [
    {
      text: "I converted an internship into a full-time role after following the SkillSense roadmap — it focused on practical tasks and local recruiters.",
      author: "Priya, B.Tech - Lucknow",
      meta: "Placed at a product startup",
    },
    {
      text: "The community helped me decode placement patterns in my college and the mentors gave mock interviews that actually improved my confidence.",
      author: "Aman, BCA - Patna",
      meta: "Cleared interviews at top MNCs",
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="py-20 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The career guidance gap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Millions of talented students in smaller towns never get mentorship tailored to local opportunities and college realities. We close that gap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((p, i) => (
              <ProblemCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SkillSense works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Three practical pillars — built to get you interviews and results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <PillarCard key={i} {...p} />
            ))}
          </div>

          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your career journey?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Join thousands of students taking control of their future — start with a free assessment.</p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/ai-counselor" aria-label="Start assessment">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                Start Your Free Assessment <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground pt-4">No credit card. No spam. Just practical help.</div>
        </div>
      </section>

      {/* updated code */}

      {/* Chat Widget */}
      <ChatWidget />
    </main>

  );
}