import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Brain, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Academic
  collegeTier: string;
  degree: string;
  semester: string;
  cgpa: string;
  
  // Skills
  technicalSkills: string;
  projectsCompleted: string;
  
  // Career
  careerInterests: string;
  targetRoles: string;
  
  // Constraints
  hoursPerDay: string;
  financialBudget: string;
  familySupport: string;
  
  // Preferences
  learningPace: string;
  confidenceLevel: string;
}

export default function AICounselor() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    collegeTier: "",
    degree: "",
    semester: "",
    cgpa: "",
    technicalSkills: "",
    projectsCompleted: "",
    careerInterests: "",
    targetRoles: "",
    hoursPerDay: "",
    financialBudget: "",
    familySupport: "",
    learningPace: "",
    confidenceLevel: ""
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateRoadmap = () => {
    // Save to localStorage
    localStorage.setItem('skillsense_roadmap', JSON.stringify(formData));
    toast({
      title: "Roadmap Generated!",
      description: "Your personalized career roadmap is ready.",
    });
    setShowRoadmap(true);
  };

  if (showRoadmap) {
    return (
      <div className="container py-12 px-6 max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
            <Sparkles className="h-4 w-4" />
            <span>AI-Generated Personalized Roadmap</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Career Roadmap</h1>
          <p className="text-muted-foreground">Based on your profile, here's your personalized learning path</p>
        </div>

        <Card className="p-8 mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm text-muted-foreground mb-1">Target Role</div>
              <div className="font-semibold">{formData.targetRoles || "Software Developer"}</div>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm text-muted-foreground mb-1">Timeline</div>
              <div className="font-semibold">12-16 Weeks</div>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm text-muted-foreground mb-1">Daily Commitment</div>
              <div className="font-semibold">{formData.hoursPerDay || "2-3"} hours/day</div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {/* Week 1-4 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1-4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Foundation Phase (Weeks 1-4)</h3>
                <p className="text-muted-foreground mb-4">Build strong fundamentals in core technologies</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Master JavaScript Basics</div>
                      <div className="text-sm text-muted-foreground">Variables, functions, arrays, objects - 15 hours</div>
                      <div className="text-sm text-accent">Free: freeCodeCamp JavaScript Course</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">HTML & CSS Fundamentals</div>
                      <div className="text-sm text-muted-foreground">Responsive design, Flexbox, Grid - 12 hours</div>
                      <div className="text-sm text-accent">Free: MDN Web Docs + Practice Projects</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">First Project: Portfolio Website</div>
                      <div className="text-sm text-muted-foreground">Build your personal portfolio - 8 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Week 5-8 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">5-8</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Framework Mastery (Weeks 5-8)</h3>
                <p className="text-muted-foreground mb-4">Learn modern frameworks and tools</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">React Fundamentals</div>
                      <div className="text-sm text-muted-foreground">Components, State, Props, Hooks - 20 hours</div>
                      <div className="text-sm text-accent">Free: React Official Docs + Scrimba</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">State Management & Routing</div>
                      <div className="text-sm text-muted-foreground">Context API, React Router - 10 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Project: Task Management App</div>
                      <div className="text-sm text-muted-foreground">Full CRUD application with React - 15 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Week 9-12 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">9-12</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Backend & Database (Weeks 9-12)</h3>
                <p className="text-muted-foreground mb-4">Build full-stack capabilities</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Node.js & Express</div>
                      <div className="text-sm text-muted-foreground">REST APIs, Middleware, Authentication - 18 hours</div>
                      <div className="text-sm text-accent">Free: The Odin Project Backend Path</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">MongoDB Basics</div>
                      <div className="text-sm text-muted-foreground">Database design, CRUD operations - 12 hours</div>
                      <div className="text-sm text-accent">Free: MongoDB University</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Full-Stack Project: Blog Platform</div>
                      <div className="text-sm text-muted-foreground">Complete MERN stack application - 25 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Week 13-16 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">13-16</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Polish & Deploy (Weeks 13-16)</h3>
                <p className="text-muted-foreground mb-4">Job-ready skills and portfolio</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Git & GitHub Mastery</div>
                      <div className="text-sm text-muted-foreground">Version control, collaboration - 8 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Testing & Deployment</div>
                      <div className="text-sm text-muted-foreground">Jest, CI/CD, Vercel/Netlify - 10 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Capstone Project</div>
                      <div className="text-sm text-muted-foreground">Build your dream project for portfolio - 30 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Resume & LinkedIn Optimization</div>
                      <div className="text-sm text-muted-foreground">Job application preparation - 5 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex gap-4">
          <Button onClick={() => setShowRoadmap(false)} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Edit Inputs
          </Button>
          <Button onClick={() => window.print()} variant="outline">
            Download Roadmap
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
          <Brain className="h-4 w-4" />
          <span>AI-Powered Career Assessment</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Get Your Personalized Career Roadmap</h1>
        <p className="text-muted-foreground">Answer a few questions to receive a tailored learning path</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
          <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Academic Background</h2>
            
            <div className="space-y-2">
              <Label>College Tier</Label>
              <Select value={formData.collegeTier} onValueChange={(v) => updateField('collegeTier', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tier1">Tier 1 (IIT, NIT, BITS)</SelectItem>
                  <SelectItem value="tier2">Tier 2 (State Universities)</SelectItem>
                  <SelectItem value="tier3">Tier 3 (Private Colleges)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Degree Program</Label>
              <Input 
                placeholder="e.g., B.Tech Computer Science" 
                value={formData.degree}
                onChange={(e) => updateField('degree', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Current Semester</Label>
                <Select value={formData.semester} onValueChange={(v) => updateField('semester', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Current CGPA</Label>
                <Input 
                  type="number" 
                  step="0.01" 
                  placeholder="e.g., 7.5"
                  value={formData.cgpa}
                  onChange={(e) => updateField('cgpa', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Skills & Experience</h2>
            
            <div className="space-y-2">
              <Label>Technical Skills (comma-separated)</Label>
              <Textarea 
                placeholder="e.g., Python, JavaScript, HTML, CSS, React"
                value={formData.technicalSkills}
                onChange={(e) => updateField('technicalSkills', e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Projects Completed</Label>
              <Textarea 
                placeholder="Briefly describe 1-2 major projects you've built"
                value={formData.projectsCompleted}
                onChange={(e) => updateField('projectsCompleted', e.target.value)}
                rows={4}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Career Aspirations</h2>
            
            <div className="space-y-2">
              <Label>Career Interests</Label>
              <Textarea 
                placeholder="What domains excite you? (e.g., Web Development, Data Science, Mobile Apps)"
                value={formData.careerInterests}
                onChange={(e) => updateField('careerInterests', e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Target Roles</Label>
              <Input 
                placeholder="e.g., Frontend Developer, Full-Stack Engineer"
                value={formData.targetRoles}
                onChange={(e) => updateField('targetRoles', e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Time & Resources</h2>
            
            <div className="space-y-2">
              <Label>Hours Available Per Day</Label>
              <Select value={formData.hoursPerDay} onValueChange={(v) => updateField('hoursPerDay', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 hours</SelectItem>
                  <SelectItem value="2-3">2-3 hours</SelectItem>
                  <SelectItem value="3-5">3-5 hours</SelectItem>
                  <SelectItem value="5+">5+ hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Monthly Learning Budget</Label>
              <Select value={formData.financialBudget} onValueChange={(v) => updateField('financialBudget', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">₹0 (Free resources only)</SelectItem>
                  <SelectItem value="500">₹500-1000</SelectItem>
                  <SelectItem value="1000">₹1000-2000</SelectItem>
                  <SelectItem value="2000+">₹2000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Family Support Level</Label>
              <Textarea 
                placeholder="Any family responsibilities or constraints? (optional)"
                value={formData.familySupport}
                onChange={(e) => updateField('familySupport', e.target.value)}
                rows={2}
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Learning Preferences</h2>
            
            <div className="space-y-2">
              <Label>Learning Pace</Label>
              <Select value={formData.learningPace} onValueChange={(v) => updateField('learningPace', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pace" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slow">Slow & Steady (6+ months)</SelectItem>
                  <SelectItem value="moderate">Moderate (3-6 months)</SelectItem>
                  <SelectItem value="fast">Fast Track (1-3 months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Current Confidence Level</Label>
              <Select value={formData.confidenceLevel} onValueChange={(v) => updateField('confidenceLevel', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner - Just starting out</SelectItem>
                  <SelectItem value="intermediate">Intermediate - Have some basics</SelectItem>
                  <SelectItem value="advanced">Advanced - Need specialization</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button 
            onClick={prevStep} 
            variant="outline"
            disabled={step === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {step < totalSteps ? (
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={generateRoadmap} className="gap-2">
              <Sparkles className="h-4 w-4" />
              Generate My Roadmap
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
