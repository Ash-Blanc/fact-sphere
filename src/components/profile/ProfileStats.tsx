import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, BookMarked, TrendingUp } from "lucide-react";

interface ProfileStatsProps {
  userId: string;
}

const ProfileStats = ({ userId }: ProfileStatsProps) => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Facts Shared",
      value: 127,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CheckCircle2,
      label: "Verifications",
      value: 543,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MessageCircle,
      label: "Discussions",
      value: 234,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BookMarked,
      label: "Collections",
      value: 15,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <h3 className="font-bold text-lg mb-4">Statistics</h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${stat.bgColor} transition-all hover:scale-105`}
          >
            <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProfileStats;
