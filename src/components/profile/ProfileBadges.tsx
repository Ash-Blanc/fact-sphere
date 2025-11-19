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
  Shield,
  Sparkles,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ProfileBadgesProps {
  userId: string;
  reputation: number;
}

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: string;
  requirement_type: string;
  requirement_value: number;
  unlocked: boolean;
  earned_at?: string;
  progress?: number;
}

const ProfileBadges = ({ userId, reputation }: ProfileBadgesProps) => {
  const [badges, setBadges] = useState<any[]>([]);
  const [userStats, setUserStats] = useState({ facts_count: 0, verifications_count: 0, discussions_count: 0 });

  useEffect(() => {
    const fetchBadgesAndProgress = async () => {
      // Fetch all available badges
      const { data: allBadges } = await supabase
        .from('badges')
        .select('*')
        .order('requirement_value', { ascending: true });

      // Fetch user's earned badges
      const { data: userBadges } = await supabase
        .from('user_badges')
        .select('badge_id, earned_at')
        .eq('user_id', userId);

      // Fetch user stats for progress calculation
      const { count: factsCount } = await supabase
        .from('facts')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);

      const { data: activities } = await supabase
        .from('activities')
        .select('activity_type')
        .eq('user_id', userId);

      const stats = {
        facts_count: factsCount || 0,
        verifications_count: activities?.filter(a => a.activity_type === 'verification').length || 0,
        discussions_count: activities?.filter(a => a.activity_type === 'discussion').length || 0,
      };
      setUserStats(stats);

      const earnedBadgeIds = new Set(userBadges?.map(ub => ub.badge_id) || []);

      const processedBadges = allBadges?.map(badge => {
        const isUnlocked = earnedBadgeIds.has(badge.id);
        const userBadge = userBadges?.find(ub => ub.badge_id === badge.id);
        
        let progress = 0;
        if (!isUnlocked) {
          const currentValue = stats[badge.requirement_type as keyof typeof stats] || 0;
          progress = Math.min(Math.round((currentValue / badge.requirement_value) * 100), 99);
        }

        return {
          icon: getIconComponent(badge.icon),
          name: badge.name,
          description: badge.description,
          rarity: badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1),
          color: getColorForRarity(badge.rarity),
          bgColor: getBgColorForRarity(badge.rarity),
          borderColor: getBorderColorForRarity(badge.rarity),
          unlocked: isUnlocked,
          date: userBadge ? `Earned ${new Date(userBadge.earned_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : undefined,
          progress,
        };
      }) || [];

      setBadges(processedBadges);
    };

    fetchBadgesAndProgress();
  }, [userId]);

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Crown, Trophy, Flame, Shield, Star, Zap, Target, Award,
      Sparkles, CheckCircle2, MessageCircle
    };
    return icons[iconName] || Award;
  };

  const getColorForRarity = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-accent';
      case 'epic': return 'text-secondary';
      case 'rare': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getBgColorForRarity = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-accent/10';
      case 'epic': return 'bg-secondary/10';
      case 'rare': return 'bg-primary/10';
      default: return 'bg-muted/10';
    }
  };

  const getBorderColorForRarity = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-accent/20';
      case 'epic': return 'border-secondary/20';
      case 'rare': return 'border-primary/20';
      default: return 'border-border/30';
    }
  };

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
