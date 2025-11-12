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

interface ProfileActivityProps {
  userId: string;
}

const ProfileActivity = ({ userId }: ProfileActivityProps) => {
  const activities = [
    {
      type: "fact_shared",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      title: "Shared a new fact",
      description: "Quantum Entanglement Enables Faster-Than-Light Communication",
      timestamp: "2 hours ago",
      category: "Quantum Physics",
    },
    {
      type: "verification",
      icon: CheckCircle2,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      title: "Verified a fact",
      description: "Ocean Microplastics Found to Impact Marine Food Chain",
      timestamp: "5 hours ago",
      category: "Environmental Science",
    },
    {
      type: "discussion",
      icon: MessageCircle,
      color: "text-accent",
      bgColor: "bg-accent/10",
      title: "Joined a discussion",
      description: "Discussing implications of CRISPR gene editing in humans",
      timestamp: "8 hours ago",
      replies: 12,
    },
    {
      type: "badge_earned",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
      title: "Earned a new badge",
      description: "Top Contributor - 100+ verified facts",
      timestamp: "1 day ago",
      rarity: "Legendary",
    },
    {
      type: "collection_created",
      icon: BookMarked,
      color: "text-primary",
      bgColor: "bg-primary/10",
      title: "Created a collection",
      description: "Quantum Computing Breakthroughs",
      timestamp: "2 days ago",
      factCount: 24,
    },
    {
      type: "user_followed",
      icon: UserPlus,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      title: "Started following",
      description: "Prof. James Wilson",
      timestamp: "3 days ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      type: "fact_shared",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      title: "Shared a new fact",
      description: "Brain-Computer Interface Breakthrough",
      timestamp: "4 days ago",
      category: "Neuroscience",
    },
    {
      type: "verification",
      icon: CheckCircle2,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      title: "Verified 3 facts",
      description: "In Renewable Energy category",
      timestamp: "5 days ago",
      category: "Renewable Energy",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {activities.length} activities
        </Badge>
      </div>

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
    </div>
  );
};

export default ProfileActivity;
