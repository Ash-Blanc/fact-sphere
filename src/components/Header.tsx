import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <h1 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            FactSphere
          </h1>
          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Discover</Button>
            <Button variant="ghost" size="sm">Topics</Button>
            <Button variant="ghost" size="sm">Leaderboard</Button>
            <Button variant="ghost" size="sm">Collections</Button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search facts, topics, users..." 
                className="pl-10 bg-muted border-0"
              />
            </div>
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/profile/sarah-chen")}
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="hero" size="sm" className="hidden md:inline-flex">
            Share a Fact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
