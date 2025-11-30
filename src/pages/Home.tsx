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
import { GoogleGenerativeAI } from "@google/generative-ai";

// Home.jsx — with improved Gemini AI integration

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

// Enhanced Career counseling system prompt
const SYSTEM_PROMPT = `You are "CareerGuide AI", an expert career counselor specifically designed for Indian students from tier-2 and tier-3 colleges. Your personality is encouraging, practical, and deeply understanding of the Indian education system and job market.

CORE PRINCIPLES:
1. Be SPECIFIC and ACTIONABLE - provide concrete steps, not vague advice
2. Understand REGIONAL CONSTRAINTS - account for limited resources in smaller cities
3. Focus on PRACTICAL OUTCOMES - emphasize placements, skills, and employability
4. Be CULTURALLY RELEVANT - reference Indian companies, education patterns, and local opportunities
5. PROVIDE STRUCTURE - break down complex goals into manageable steps

AREAS OF EXPERTISE:
- Career path selection (IT, Core engineering, MBA, Government jobs, etc.)
- Skill development roadmaps with free/low-cost resources
- Placement preparation (resumes, interviews, aptitude tests)
- College project guidance
- Internship strategies
- Higher education planning (MBA, MTech, MS, etc.)
- Local job market insights for tier-2/3 cities

RESPONSE GUIDELINES:
- Start with empathy and understanding
- Use Indian context (companies like TCS, Infosys, Wipro, startups, PSUs)
- Suggest specific platforms (NPTEL, Coursera, YouTube channels)
- Mention realistic timelines
- Include both short-term and long-term planning
- Be concise but thorough
- Use bullet points for clarity when needed
- Always end with an encouraging note and next steps

FORMAT: Be conversational but professional. Use Indian English naturally.`;

// Enhanced Chat Widget Component with better Gemini integration
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [geminiModel, setGeminiModel] = useState(null);
  const [apiError, setApiError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Enhanced Gemini initialization
  useEffect(() => {
    const initializeGemini = async () => {
      try {
        // IMPORTANT: Replace with your actual API key
        // For production, use environment variables
        const API_KEY = "AIzaSyCz6dL7vGed9dKjR4pWnL3vQ8a9X8bY7tE"; // Replace with your actual API key
        
        if (!API_KEY || API_KEY.includes("YOUR_API_KEY") || API_KEY.includes("AIzaSyAj1FqByqxrZum5YT8jJiUV805Zkhb0vmA")) {
          console.warn("Gemini API key not properly configured. Using fallback mode.");
          setApiError(true);
          setIsInitialized(true);
          return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ 
          model: "gemini-pro",
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ],
        });
        
        // Test the connection with a simple call
        const testResult = await model.generateContent("Hello");
        await testResult.response;
        
        setGeminiModel(model);
        setApiError(false);
        setIsInitialized(true);
        console.log("Gemini AI initialized successfully");
        
      } catch (error) {
        console.error("Failed to initialize Gemini:", error);
        setApiError(true);
        setIsInitialized(true);
      }
    };

    initializeGemini();
  }, []);

  // Enhanced message sending with better context management
  const sendMessageToGemini = async (message) => {
    if (!geminiModel || apiError || !isInitialized) {
      // Improved fallback responses
      const fallbackResponses = [
        "I'd love to help you with career guidance! As an AI counselor specializing in Indian students, I can assist with career planning, skill development, placement strategies, and more. What specific area would you like to discuss?",
        "I understand you're looking for career advice. I specialize in helping students from tier-2 and tier-3 colleges with practical guidance tailored to the Indian context. Could you tell me about your current education background and career interests?",
        "That's a great question about career development! I can help you create a personalized roadmap considering Indian job markets and education systems. What field are you currently studying or interested in pursuing?",
        "I'm here to help you navigate your career journey in the Indian context. Let me know what specific challenges you're facing - whether it's skills development, placement preparation, or career choices.",
        "As your AI career assistant focused on Indian students, I can provide guidance on resume building, interview preparation, skill development with local resources, and career planning. What would you like to discuss today?"
      ];
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    try {
      // Enhanced conversation history management
      const recentMessages = messages.slice(-8); // Keep last 8 messages for better context
      const conversationContext = recentMessages.length > 0 
        ? `Previous conversation context:\n${recentMessages.map(msg => 
            `${msg.sender === 'user' ? 'Student' : 'Counselor'}: ${msg.text}`
          ).join('\n')}`
        : "This is the beginning of the conversation.";

      const enhancedPrompt = `${SYSTEM_PROMPT}

${conversationContext}

Current Student Query: "${message}"

Instructions: Provide a helpful, specific response that addresses the student's immediate concern while keeping their broader career development in mind. Focus on actionable advice relevant to Indian students.`;

      const result = await geminiModel.generateContent(enhancedPrompt);
      const response = await result.response;
      
      let responseText = response.text();
      
      // Clean up response if needed
      if (responseText.startsWith('"') && responseText.endsWith('"')) {
        responseText = responseText.slice(1, -1);
      }
      
      return responseText || "I apologize, but I couldn't generate a proper response. Could you please rephrase your question?";
      
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Enhanced error handling
      if (error.message?.includes('API_KEY') || error.message?.includes('key invalid') || error.message?.includes('quota')) {
        setApiError(true);
        return "I'm currently experiencing some technical difficulties with the AI service. Please try again in a few moments, or you can browse our resources section for immediate help with career guidance.";
      } else if (error.message?.includes('safety')) {
        return "I apologize, but I cannot respond to that particular question. I'm designed to focus on career guidance and educational support. Is there something else about your career development I can help with?";
      } else {
        setApiError(true);
        return "I'm having trouble connecting to the AI service right now. Please try again in a few moments, or check your internet connection.";
      }
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !isInitialized) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const aiResponse = await sendMessageToGemini(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'bot',
        // FIXED: Changed toLocaleTimeTimeString to toLocaleTimeString
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an unexpected error. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Quick questions suggestions
  const quickQuestions = [
    "How can I improve my placement chances?",
    "What skills are in demand for IT jobs?",
    "How to prepare for campus interviews?",
    "Career options for B.Tech students"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
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
        {!isInitialized && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
        )}
        {apiError && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white"></div>
        )}
      </motion.button>

      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
        >
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <div>
                <span className="font-semibold">CareerGuide AI</span>
                <div className="flex items-center gap-1">
                  {!isInitialized ? (
                    <span className="text-xs text-blue-200">Initializing...</span>
                  ) : apiError ? (
                    <span className="text-xs text-yellow-200">Limited mode</span>
                  ) : (
                    <span className="text-xs text-green-200">Online</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="text-white hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-4">
                <Brain className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm font-medium mb-2">Hello! I'm CareerGuide AI</p>
                <p className="text-sm mb-4">I specialize in helping Indian students with career guidance, placement preparation, and skill development.</p>
                
                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 mb-2">Try asking:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="block w-full text-xs p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {apiError && (
                  <p className="text-xs mt-3 text-yellow-600 bg-yellow-50 p-2 rounded">
                    Note: Using limited functionality mode. Some features may be restricted.
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <span className="text-xs opacity-70 block mt-1 text-right">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs text-gray-600">CareerGuide AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about careers, skills, placements..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isLoading || !isInitialized}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim() || !isInitialized}
                size="sm"
                className="shrink-0"
              >
                {isLoading ? "..." : "Send"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {!isInitialized ? "Initializing AI..." : 
               apiError ? "Using fallback mode • Free & confidential" : 
               "Powered by Gemini AI • Free & confidential"}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}

// Rest of your components remain exactly the same...
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

      {/* Enhanced Chat Widget */}
      <ChatWidget />
    </main>
  );
}