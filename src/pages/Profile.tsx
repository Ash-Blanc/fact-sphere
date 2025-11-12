import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  UserPlus, 
  Settings, 
  Award, 
  TrendingUp, 
  BookMarked,
  Activity,
  MapPin,
  Link as LinkIcon,
  Calendar
} from "lucide-react";
import FactCard from "@/components/FactCard";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileBadges from "@/components/profile/ProfileBadges";
import ProfileActivity from "@/components/profile/ProfileActivity";
import ProfileCollections from "@/components/profile/ProfileCollections";

const Profile = () => {
  const { userId } = useParams();
  
  // Mock user data - will be replaced with actual data from backend
  const user = {
    id: userId || "sarah-chen",
    name: "Dr. Sarah Chen",
    username: "@sarahchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    verified: true,
    reputation: 9845,
    bio: "Quantum physicist specializing in quantum entanglement and quantum computing. Contributing to the advancement of quantum information science.",
    location: "MIT, Cambridge MA",
    website: "https://sarahchen.science",
    joined: "January 2023",
    following: 234,
    followers: 1842,
    isFollowing: false,
  };

  const userFacts = [
    {
      title: "Quantum Entanglement Enables Faster-Than-Light Communication Possibilities",
      content: "Recent experiments demonstrate that quantum entangled particles can maintain correlations across vast distances, potentially revolutionizing secure communications and quantum computing architectures.",
      category: "Quantum Physics",
      author: {
        name: user.name,
        avatar: user.avatar,
        reputation: user.reputation,
        verified: true,
      },
      stats: {
        verifications: 342,
        discussions: 56,
        saves: 128,
      },
      trending: true,
    },
    {
      title: "Quantum Error Correction Breakthrough Achieves 99.9% Fidelity",
      content: "New quantum error correction techniques have achieved unprecedented fidelity rates, bringing us closer to practical quantum computers that can solve real-world problems.",
      category: "Quantum Computing",
      author: {
        name: user.name,
        avatar: user.avatar,
        reputation: user.reputation,
        verified: true,
      },
      stats: {
        verifications: 287,
        discussions: 43,
        saves: 95,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-glow">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    {user.verified && (
                      <CheckCircle2 className="h-6 w-6 text-secondary" />
                    )}
                  </div>
                  <p className="text-muted-foreground">{user.username}</p>
                  
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-2xl font-bold text-primary">
                      {user.reputation.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">reputation</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 w-full">
                  <Button variant="hero" className="flex-1">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-6 text-sm pt-2">
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.following}</div>
                    <div className="text-muted-foreground">Following</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.followers}</div>
                    <div className="text-muted-foreground">Followers</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card space-y-4">
              <h3 className="font-bold text-lg">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {user.bio}
              </p>
              
              <div className="space-y-3 pt-2">
                {user.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                )}
                
                {user.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={user.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joined}</span>
                </div>
              </div>
            </Card>
            
            <ProfileStats userId={user.id} />
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="facts" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-muted/50">
                <TabsTrigger value="facts" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Facts
                </TabsTrigger>
                <TabsTrigger value="badges" className="gap-2">
                  <Award className="h-4 w-4" />
                  Badges
                </TabsTrigger>
                <TabsTrigger value="collections" className="gap-2">
                  <BookMarked className="h-4 w-4" />
                  Collections
                </TabsTrigger>
                <TabsTrigger value="activity" className="gap-2">
                  <Activity className="h-4 w-4" />
                  Activity
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="facts" className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Contributed Facts</h2>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {userFacts.length} facts
                  </Badge>
                </div>
                {userFacts.map((fact, index) => (
                  <FactCard key={index} {...fact} />
                ))}
              </TabsContent>
              
              <TabsContent value="badges">
                <ProfileBadges userId={user.id} reputation={user.reputation} />
              </TabsContent>
              
              <TabsContent value="collections">
                <ProfileCollections userId={user.id} />
              </TabsContent>
              
              <TabsContent value="activity">
                <ProfileActivity userId={user.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
