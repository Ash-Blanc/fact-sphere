import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TrendingUp,
  MessageCircle,
  CheckCircle2,
  BookMarked,
  UserPlus,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ProfileActivityProps {
  userId: string;
}

const ProfileActivity = ({ userId }: ProfileActivityProps) => {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20);

      if (!error && data) {
        setActivities(data.map(activity => {
          const baseActivity = {
            type: activity.activity_type,
            icon: getIconForType(activity.activity_type),
            color: getColorForType(activity.activity_type),
            bgColor: getBgColorForType(activity.activity_type),
            title: activity.title,
            description: activity.description,
            timestamp: formatTimestamp(activity.created_at),
          };
          
          // Safely merge metadata if it exists and is an object
          if (activity.metadata && typeof activity.metadata === 'object') {
            return { ...baseActivity, ...activity.metadata };
          }
          
          return baseActivity;
        }));
      }
    };

    fetchActivities();
  }, [userId]);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'fact_shared': return TrendingUp;
      case 'verification': return CheckCircle2;
      case 'discussion': return MessageCircle;
      case 'badge_earned': return Award;
      default: return TrendingUp;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'fact_shared': return 'text-primary';
      case 'verification': return 'text-secondary';
      case 'discussion': return 'text-accent';
      case 'badge_earned': return 'text-accent';
      default: return 'text-primary';
    }
  };

  const getBgColorForType = (type: string) => {
    switch (type) {
      case 'fact_shared': return 'bg-primary/10';
      case 'verification': return 'bg-secondary/10';
      case 'discussion': return 'bg-accent/10';
      case 'badge_earned': return 'bg-accent/10';
      default: return 'bg-primary/10';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {activities.length} {activities.length === 1 ? 'activity' : 'activities'}
        </Badge>
      </div>

      {activities.length === 0 ? (
        <Card className="p-12 text-center bg-gradient-card">
          <Award className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="font-semibold text-lg mb-2">No activity yet</h3>
          <p className="text-muted-foreground">
            Activity will appear here as the user interacts with the platform
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <activity.icon className={`h-5 w-5 ${activity.color}`} />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  {activity.category && (
                    <Badge
                      variant="secondary"
                      className="bg-secondary/10 text-secondary text-xs"
                    >
                      {activity.category}
                    </Badge>
                  )}
                  {activity.rarity && (
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent text-xs"
                    >
                      {activity.rarity}
                    </Badge>
                  )}
                  {activity.replies && (
                    <span className="text-xs text-muted-foreground">
                      {activity.replies} replies
                    </span>
                  )}
                  {activity.factCount && (
                    <span className="text-xs text-muted-foreground">
                      {activity.factCount} facts
                    </span>
                  )}
                  {activity.avatar && (
                    <Avatar className="h-6 w-6 border border-border">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            </div>
          </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileActivity;
