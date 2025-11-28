import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, ThumbsUp, Brain, Award, Search, Plus, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Question {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  timestamp: string;
  upvotes: number;
  responses: number;
  aiAnswered: boolean;
  expertTagged: boolean;
  trending?: boolean;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    title: "How do I transition from manual testing to automation testing?",
    content: "I have 2 years of experience in manual testing. What skills should I learn for automation?",
    author: "Priya Sharma",
    category: "Career Switch",
    timestamp: "2 hours ago",
    upvotes: 24,
    responses: 8,
    aiAnswered: true,
    expertTagged: false,
    trending: true
  },
  {
    id: 2,
    title: "Best way to learn React for placement preparation?",
    content: "Final year student, placements in 3 months. Should I focus on React or stick to vanilla JS?",
    author: "Rahul Kumar",
    category: "Skill Development",
    timestamp: "5 hours ago",
    upvotes: 18,
    responses: 12,
    aiAnswered: true,
    expertTagged: true,
    trending: true
  },
  {
    id: 3,
    title: "How to explain career gap in interview?",
    content: "Took 1 year break after graduation due to family reasons. How should I address this?",
    author: "Sneha Patel",
    category: "Interview Prep",
    timestamp: "1 day ago",
    upvotes: 32,
    responses: 15,
    aiAnswered: false,
    expertTagged: true
  },
  {
    id: 4,
    title: "Project ideas for Data Science portfolio?",
    content: "Learning DS but all my projects seem generic. What can make them stand out?",
    author: "Amit Singh",
    category: "Project Ideas",
    timestamp: "1 day ago",
    upvotes: 41,
    responses: 20,
    aiAnswered: true,
    expertTagged: false,
    trending: true
  },
  {
    id: 5,
    title: "Should I mention internship where I learned nothing?",
    content: "Did a 3-month internship but mostly did data entry. Include in resume?",
    author: "Neha Gupta",
    category: "Resume Help",
    timestamp: "2 days ago",
    upvotes: 15,
    responses: 9,
    aiAnswered: true,
    expertTagged: false
  }
];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Career Switch", "Resume Help", "Interview Prep", "Project Ideas", "Skill Development"];

  const filteredQuestions = mockQuestions.filter(q => {
    const matchesCategory = selectedCategory === "all" || q.category === selectedCategory;
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-12 px-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Community Forum</h1>
            <p className="text-muted-foreground">Get help from AI, peers, and experts</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Ask Question
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Ask Your Question</DialogTitle>
                <DialogDescription>
                  Our AI will suggest relevant answers, and experts will be notified for complex queries
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Question Title</Label>
                  <Input placeholder="Be specific and clear..." />
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea 
                    placeholder="Provide context, what you've tried, and what you're hoping to achieve..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="career-switch">Career Switch</SelectItem>
                      <SelectItem value="resume">Resume Help</SelectItem>
                      <SelectItem value="interview">Interview Prep</SelectItem>
                      <SelectItem value="projects">Project Ideas</SelectItem>
                      <SelectItem value="skills">Skill Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Urgency Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How urgent?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Just curious</SelectItem>
                      <SelectItem value="medium">Medium - Planning ahead</SelectItem>
                      <SelectItem value="high">High - Need answer soon</SelectItem>
                      <SelectItem value="urgent">Urgent - Interview/deadline coming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full gap-2">
                  <Brain className="h-4 w-4" />
                  Post Question (AI will analyze)
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search questions..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === (cat === "All" ? "all" : cat) ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat === "All" ? "all" : cat)}
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-bold">Trending This Week</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {mockQuestions.filter(q => q.trending).slice(0, 3).map(question => (
            <Card key={question.id} className="p-4 hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-start gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">{question.category}</Badge>
                {question.aiAnswered && (
                  <Badge variant="outline" className="text-xs">
                    <Brain className="h-3 w-3 mr-1" />
                    AI
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{question.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3" />
                  {question.upvotes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {question.responses}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">All Questions</h2>
        
        {filteredQuestions.map(question => (
          <Card key={question.id} className="p-6 hover:border-primary transition-colors cursor-pointer">
            <div className="flex gap-4">
              {/* Vote Section */}
              <div className="flex flex-col items-center gap-2 pt-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{question.upvotes}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-3 flex-wrap">
                  <Badge variant="secondary">{question.category}</Badge>
                  {question.aiAnswered && (
                    <Badge variant="outline" className="bg-accent/10">
                      <Brain className="h-3 w-3 mr-1" />
                      AI Answered
                    </Badge>
                  )}
                  {question.expertTagged && (
                    <Badge variant="outline" className="bg-primary/10">
                      <Award className="h-3 w-3 mr-1" />
                      Expert Notified
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {question.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">{question.content}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium">{question.author}</span>
                  <span>•</span>
                  <span>{question.timestamp}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {question.responses} responses
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <Card className="p-12 text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">No questions found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Ask the First Question</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ask Your Question</DialogTitle>
              </DialogHeader>
              {/* Same form as above */}
            </DialogContent>
          </Dialog>
        </Card>
      )}
    </div>
  );
}
