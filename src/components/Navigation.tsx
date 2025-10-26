import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Code, Trophy, Zap, Target, LogIn, Plus } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "HOME", path: "/", icon: Home },
    { name: "PROJECTS", path: "/projects", icon: Code },
    { name: "LEADERBOARD", path: "/leaderboard", icon: Trophy },
    { name: "AI TOOLS", path: "/ai-tools", icon: Zap },
    { name: "CHALLENGES", path: "/challenges", icon: Target },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-card rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight">VIBE-CENTER</div>
              <div className="text-xs text-muted-foreground">BY YCENTER</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`gap-2 font-semibold ${
                    location.pathname === item.path ? "text-primary" : ""
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2 font-semibold">
              <LogIn className="w-4 h-4" />
              LOGIN
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
