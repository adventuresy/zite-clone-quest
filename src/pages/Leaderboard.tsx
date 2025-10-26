import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";

const Leaderboard = () => {
  const universities = [
    { rank: 1, name: "Stanford University", points: 2847, projects: 42 },
    { rank: 2, name: "MIT", points: 2654, projects: 38 },
    { rank: 3, name: "UC Berkeley", points: 2431, projects: 35 },
    { rank: 4, name: "Harvard University", points: 2209, projects: 31 },
    { rank: 5, name: "Carnegie Mellon", points: 2018, projects: 28 },
    { rank: 6, name: "Oxford University", points: 1876, projects: 26 },
    { rank: 7, name: "Cambridge University", points: 1743, projects: 24 },
    { rank: 8, name: "ETH Zurich", points: 1621, projects: 22 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-2xl font-bold text-muted-foreground">{rank}</span>;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              UNIVERSITY LEAGUE
            </h1>
            <p className="text-xl text-muted-foreground">
              Global ranking of innovation leaders
            </p>
          </div>

          <Card className="border-2 border-border overflow-hidden">
            <div className="bg-gradient-card p-6">
              <h2 className="text-2xl font-bold text-center">CHAMPIONSHIP STANDINGS</h2>
            </div>
            
            <div className="divide-y divide-border">
              {universities.map((university) => (
                <div 
                  key={university.rank}
                  className={`p-6 flex items-center gap-6 hover:bg-card/50 transition-colors ${
                    university.rank <= 3 ? 'bg-card/30' : ''
                  }`}
                >
                  <div className="w-12 flex justify-center">
                    {getRankIcon(university.rank)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{university.name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{university.projects} projects</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-black text-primary">{university.points}</div>
                    <div className="text-xs text-muted-foreground uppercase">Points</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
