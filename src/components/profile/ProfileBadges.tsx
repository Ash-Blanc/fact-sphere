import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Zap, 
  Star, 
  Crown, 
  Flame, 
  Target,
  Trophy,
  Shield
} from "lucide-react";

interface ProfileBadgesProps {
  userId: string;
  reputation: number;
}

const ProfileBadges = ({ userId, reputation }: ProfileBadgesProps) => {
  const badges = [
    {
      icon: Crown,
      name: "Top Contributor",
      description: "Contributed 100+ verified facts",
      rarity: "Legendary",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      unlocked: true,
      date: "Earned Mar 15, 2024",
    },
    {
      icon: Trophy,
      name: "Quantum Expert",
      description: "50+ facts in Quantum Physics",
      rarity: "Epic",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      unlocked: true,
      date: "Earned Feb 8, 2024",
    },
    {
      icon: Flame,
      name: "7-Day Streak",
      description: "Posted facts for 7 consecutive days",
      rarity: "Rare",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      unlocked: true,
      date: "Earned Jan 22, 2024",
    },
    {
      icon: Shield,
      name: "Verified Scientist",
      description: "Profile verified by the community",
      rarity: "Special",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      unlocked: true,
      date: "Earned Jan 5, 2024",
    },
    {
      icon: Star,
      name: "Rising Star",
      description: "Reached 5000 reputation points",
      rarity: "Rare",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      unlocked: true,
      date: "Earned Dec 12, 2023",
    },
    {
      icon: Zap,
      name: "Quick Responder",
      description: "First to verify 25 facts",
      rarity: "Uncommon",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      unlocked: true,
      date: "Earned Nov 28, 2023",
    },
    {
      icon: Target,
      name: "Precision Master",
      description: "100% verification accuracy",
      rarity: "Legendary",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      unlocked: false,
      progress: 87,
    },
    {
      icon: Award,
      name: "Community Leader",
      description: "Help 50 users with verifications",
      rarity: "Epic",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      unlocked: false,
      progress: 34,
    },
  ];

  const rarityColors: Record<string, string> = {
    Legendary: "bg-accent text-accent-foreground",
    Epic: "bg-secondary text-secondary-foreground",
    Rare: "bg-primary text-primary-foreground",
    Uncommon: "bg-muted text-muted-foreground",
    Special: "bg-gradient-primary text-primary-foreground",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Badges & Achievements</h2>
        <Badge variant="secondary" className="bg-accent/10 text-accent">
          {badges.filter(b => b.unlocked).length} / {badges.length}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <Card
            key={index}
            className={`p-6 bg-gradient-card shadow-card transition-all hover:shadow-card-hover border-2 ${
              badge.unlocked ? badge.borderColor : "border-border/30 opacity-60"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${badge.bgColor} ${
                  !badge.unlocked && "opacity-50"
                }`}
              >
                <badge.icon className={`h-6 w-6 ${badge.color}`} />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{badge.name}</h3>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${rarityColors[badge.rarity]}`}
                  >
                    {badge.rarity}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
                
                {badge.unlocked ? (
                  <p className="text-xs text-muted-foreground pt-2">
                    {badge.date}
                  </p>
                ) : (
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{badge.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${badge.bgColor} ${badge.color} transition-all`}
                        style={{ width: `${badge.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileBadges;
