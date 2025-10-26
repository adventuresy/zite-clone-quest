import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Healthcare Assistant",
      author: "Stanford University",
      description: "An AI-powered healthcare assistant that helps diagnose common ailments and provides medical advice.",
      tags: ["Healthcare", "AI", "NLP"],
      likes: 234,
    },
    {
      title: "Smart City Dashboard",
      author: "MIT",
      description: "Real-time dashboard for monitoring and optimizing city infrastructure using IoT and machine learning.",
      tags: ["IoT", "ML", "Smart Cities"],
      likes: 189,
    },
    {
      title: "EduBot Learning Platform",
      author: "UC Berkeley",
      description: "Personalized learning assistant that adapts to individual student needs using adaptive AI.",
      tags: ["Education", "AI", "Personalization"],
      likes: 156,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              AI-POWERED PROJECTS
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover innovative solutions built by students worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <p className="text-sm font-semibold text-primary mb-3">{project.author}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{project.likes} likes</span>
                  <Button variant="ghost" size="sm" className="gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
