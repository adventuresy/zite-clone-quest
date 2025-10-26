import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Code, Trophy, Zap, ArrowRight } from "lucide-react";
import sdgGoals from "@/assets/sdg-goals.png";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import community4 from "@/assets/community-4.jpg";

const Index = () => {
  const features = [
    {
      icon: Code,
      gradient: "bg-gradient-card",
      title: "SHOWCASE PROJECTS",
      description: "Display your vibe-coded innovations with embedded previews and detailed descriptions.",
    },
    {
      icon: Trophy,
      gradient: "bg-gradient-card",
      title: "UNIVERSITY LEAGUE",
      description: "Compete in the University League leaderboard and see which institution leads in innovation.",
    },
    {
      icon: Zap,
      gradient: "bg-gradient-purple-orange",
      title: "AI TOOLS",
      description: "Discover powerful AI tools across categories to enhance your development workflow.",
    },
  ];

  const communityImages = [community1, community2, community3, community4];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            VIBE-CENTER
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-semibold tracking-wide max-w-4xl mx-auto">
            SHOWCASE YOUR AI-POWERED PROJECTS • COMPETE GLOBALLY • BUILD THE FUTURE
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-2">
              <Code className="w-5 h-5" />
              EXPLORE PROJECTS
            </Button>
            <Button variant="hero" size="lg" className="gap-2">
              <ArrowRight className="w-5 h-5" />
              SUBMIT PROJECT
            </Button>
          </div>
        </div>
      </section>

      {/* Championship Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
            CHAMPIONSHIP FEATURES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-card">
                <div className={`w-20 h-20 ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <feature.icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            SUSTAINABLE DEVELOPMENT GOALS
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <img 
              src={sdgGoals} 
              alt="UN Sustainable Development Goals" 
              className="w-full rounded-lg shadow-card"
            />
          </div>
          
          <Button variant="hero" size="lg" className="gap-2">
            <Zap className="w-5 h-5" />
            GENERATE PROBLEM STATEMENT
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
            VIBE COMMUNITY IN ACTION
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-card"
              >
                <img 
                  src={image} 
                  alt={`Community activity ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2025 VIBE-CENTER BY YCENTER. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
