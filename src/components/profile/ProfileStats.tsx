import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, BookMarked, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ProfileStatsProps {
  userId: string;
}

const ProfileStats = ({ userId }: ProfileStatsProps) => {
  const [stats, setStats] = useState([
    {
      icon: TrendingUp,
      label: "Facts Shared",
      value: 0,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CheckCircle2,
      label: "Verifications",
      value: 0,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MessageCircle,
      label: "Discussions",
      value: 0,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BookMarked,
      label: "Collections",
      value: 0,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      // Fetch facts count
      const { count: factsCount } = await supabase
        .from('facts')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);

      // Fetch activities count by type
      const { data: activities } = await supabase
        .from('activities')
        .select('activity_type')
        .eq('user_id', userId);

      const verificationsCount = activities?.filter(a => a.activity_type === 'verification').length || 0;
      const discussionsCount = activities?.filter(a => a.activity_type === 'discussion').length || 0;

      setStats([
        {
          icon: TrendingUp,
          label: "Facts Shared",
          value: factsCount || 0,
          color: "text-primary",
          bgColor: "bg-primary/10",
        },
        {
          icon: CheckCircle2,
          label: "Verifications",
          value: verificationsCount,
          color: "text-secondary",
          bgColor: "bg-secondary/10",
        },
        {
          icon: MessageCircle,
          label: "Discussions",
          value: discussionsCount,
          color: "text-accent",
          bgColor: "bg-accent/10",
        },
        {
          icon: BookMarked,
          label: "Collections",
          value: 0,
          color: "text-primary",
          bgColor: "bg-primary/10",
        },
      ]);
    };

    fetchStats();
  }, [userId]);

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
