import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "Healthcare Innovation Challenge",
      status: "Active",
      deadline: "March 15, 2025",
      participants: 234,
      prize: "$10,000",
      description: "Build AI solutions to improve healthcare accessibility in underserved communities.",
      difficulty: "Advanced",
    },
    {
      title: "Sustainable Cities Hackathon",
      status: "Active",
      deadline: "March 30, 2025",
      participants: 189,
      prize: "$7,500",
      description: "Create smart city solutions focused on sustainability and environmental impact.",
      difficulty: "Intermediate",
    },
    {
      title: "Education Tech Sprint",
      status: "Upcoming",
      deadline: "April 20, 2025",
      participants: 0,
      prize: "$5,000",
      description: "Develop innovative educational tools that leverage AI to enhance learning outcomes.",
      difficulty: "Beginner",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-accent" : "bg-primary";
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Advanced") return "destructive";
    if (difficulty === "Intermediate") return "default";
    return "secondary";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              GLOBAL CHALLENGES
            </h1>
            <p className="text-xl text-muted-foreground">
              Compete in hackathons and challenges to showcase your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-card flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getStatusColor(challenge.status)}>{challenge.status}</Badge>
                  <Badge variant={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{challenge.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Deadline: {challenge.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-muted-foreground" />
                    <span className="font-bold text-accent">{challenge.prize} prize</span>
                  </div>
                </div>
                
                <Button variant="hero" className="w-full">
                  {challenge.status === "Active" ? "Join Challenge" : "Register Interest"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
