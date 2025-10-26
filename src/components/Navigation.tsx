import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Code, Trophy, Zap, Target, LogIn, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };
  
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
            {session ? (
              <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 font-semibold">
                <LogOut className="w-4 h-4" />
                LOGOUT
              </Button>
            ) : (
              <Button variant="ghost" size="sm" onClick={() => navigate("/auth")} className="gap-2 font-semibold">
                <LogIn className="w-4 h-4" />
                LOGIN
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
