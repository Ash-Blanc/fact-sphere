import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, MessageCircle, Bookmark, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FactCardProps {
  title: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    reputation: number;
    verified: boolean;
  };
  stats: {
    verifications: number;
    discussions: number;
    saves: number;
  };
  trending?: boolean;
}

const FactCard = ({ title, content, category, author, stats, trending }: FactCardProps) => {
  const navigate = useNavigate();
  
  const handleAuthorClick = () => {
    const userId = author.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/profile/${userId}`);
  };
  
  return (
    <Card className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
      {trending && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 backdrop-blur">
          <TrendingUp className="h-3 w-3 text-accent" />
          <span className="text-xs font-medium text-accent">Trending</span>
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
            {category}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {content}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleAuthorClick}
          >
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-card-foreground hover:text-primary transition-colors">
                  {author.name}
                </span>
                {author.verified && (
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                Reputation: {author.reputation}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{stats.verifications}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <MessageCircle className="h-4 w-4" />
              <span>{stats.discussions}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Bookmark className="h-4 w-4" />
              <span>{stats.saves}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FactCard;
