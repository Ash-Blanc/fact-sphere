import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookMarked, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileCollectionsProps {
  userId: string;
}

const ProfileCollections = ({ userId }: ProfileCollectionsProps) => {
  const collections = [
    {
      id: 1,
      name: "Quantum Computing Breakthroughs",
      description: "Latest discoveries in quantum computing and quantum information science",
      factCount: 24,
      isPublic: true,
      cover: "https://api.dicebear.com/7.x/shapes/svg?seed=quantum",
      updatedAt: "2 days ago",
    },
    {
      id: 2,
      name: "Gene Editing Research",
      description: "CRISPR and genetic engineering advancements",
      factCount: 18,
      isPublic: true,
      cover: "https://api.dicebear.com/7.x/shapes/svg?seed=gene",
      updatedAt: "1 week ago",
    },
    {
      id: 3,
      name: "Climate Science Updates",
      description: "Important findings in climate change research",
      factCount: 32,
      isPublic: true,
      cover: "https://api.dicebear.com/7.x/shapes/svg?seed=climate",
      updatedAt: "3 days ago",
    },
    {
      id: 4,
      name: "My Reading List",
      description: "Facts I want to read later",
      factCount: 47,
      isPublic: false,
      cover: "https://api.dicebear.com/7.x/shapes/svg?seed=reading",
      updatedAt: "5 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Collections</h2>
        <Button variant="hero" size="sm">
          <BookMarked className="h-4 w-4 mr-2" />
          New Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src={collection.cover}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                {collection.isPublic ? (
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur"
                  >
                    <Globe className="h-3 w-3 mr-1" />
                    Public
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur"
                  >
                    <Lock className="h-3 w-3 mr-1" />
                    Private
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {collection.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookMarked className="h-4 w-4" />
                  <span>{collection.factCount} facts</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  Updated {collection.updatedAt}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileCollections;
