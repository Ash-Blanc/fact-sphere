import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Hash, Users } from "lucide-react";

const TrendingSidebar = () => {
  const trendingTopics = [
    { name: "Quantum Computing", count: 234, growth: "+15%" },
    { name: "CRISPR Gene Editing", count: 189, growth: "+23%" },
    { name: "Climate Science", count: 167, growth: "+8%" },
    { name: "Neuroscience", count: 145, growth: "+12%" },
    { name: "Renewable Energy", count: 128, growth: "+18%" },
  ];

  const topContributors = [
    { name: "Dr. Sarah Chen", reputation: 9845, facts: 127 },
    { name: "Prof. James Wilson", reputation: 8920, facts: 98 },
    { name: "Dr. Maria Garcia", reputation: 7654, facts: 105 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-card shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h3 className="font-bold text-lg">Trending Topics</h3>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Hash className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium text-sm">{topic.name}</div>
                  <div className="text-xs text-muted-foreground">{topic.count} facts</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                {topic.growth}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-secondary" />
          <h3 className="font-bold text-lg">Top Contributors</h3>
        </div>
        <div className="space-y-3">
          {topContributors.map((contributor, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
            >
              <div>
                <div className="font-medium text-sm">{contributor.name}</div>
                <div className="text-xs text-muted-foreground">
                  {contributor.facts} facts
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-primary">
                  {contributor.reputation.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">reputation</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
