import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code, Image, MessageSquare, Database, Sparkles } from "lucide-react";

const AITools = () => {
  const tools = [
    {
      icon: Brain,
      name: "Neural Network Builder",
      category: "Deep Learning",
      description: "Visual tool for building and training neural networks without code.",
      gradient: "bg-gradient-card",
    },
    {
      icon: Code,
      name: "Code Assistant Pro",
      category: "Development",
      description: "AI-powered coding assistant with real-time suggestions and debugging.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Image,
      name: "Vision AI Studio",
      category: "Computer Vision",
      description: "Create custom image recognition models with drag-and-drop interface.",
      gradient: "bg-gradient-purple-orange",
    },
    {
      icon: MessageSquare,
      name: "ChatBot Framework",
      category: "NLP",
      description: "Build conversational AI agents with natural language understanding.",
      gradient: "bg-gradient-card",
    },
    {
      icon: Database,
      name: "Data Analyzer",
      category: "Analytics",
      description: "Automated data analysis and visualization powered by machine learning.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Sparkles,
      name: "AutoML Platform",
      category: "Machine Learning",
      description: "Automated machine learning platform for rapid model development.",
      gradient: "bg-gradient-purple-orange",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              AI TOOLS ARSENAL
            </h1>
            <p className="text-xl text-muted-foreground">
              Powerful AI tools to supercharge your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-card">
                <div className={`w-16 h-16 ${tool.gradient} rounded-xl flex items-center justify-center mb-4 shadow-glow`}>
                  <tool.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <Badge variant="secondary" className="mb-3">{tool.category}</Badge>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight">{tool.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                
                <Button variant="outline" className="w-full">
                  Explore Tool
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
