import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [facts, setFacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUserId(user?.id || null);
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        
        // If no userId is provided, redirect to current user's profile
        if (!userId && currentUserId) {
          navigate(`/profile/${currentUserId}`);
          return;
        }

        const profileId = userId || currentUserId;
        if (!profileId) return;

        // Fetch profile data
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', profileId)
          .single();

        if (profileError) throw profileError;

        setProfile(profileData);

        // Fetch user's facts
        const { data: factsData, error: factsError } = await supabase
          .from('facts')
          .select('*')
          .eq('user_id', profileId)
          .order('created_at', { ascending: false });

        if (factsError) throw factsError;

        setFacts(factsData || []);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (currentUserId !== null) {
      fetchProfile();
    }
  }, [userId, currentUserId, navigate, toast]);

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  const isOwnProfile = currentUserId === profile.id;

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
                  <AvatarImage 
                    src={profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.id}`} 
                    alt={profile.display_name || 'User'} 
                  />
                  <AvatarFallback>
                    {(profile.display_name || profile.username || 'U').charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="text-2xl font-bold">
                      {profile.display_name || profile.username || 'Anonymous User'}
                    </h1>
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">
                    {profile.username ? `@${profile.username}` : ''}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary font-semibold flex items-center gap-1"
                    >
                      <Award className="h-4 w-4" />
                      {profile.reputation?.toLocaleString() || 0} Reputation
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full">
                  {!isOwnProfile ? (
                    <Button variant="hero" className="flex-1">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => navigate('/settings')}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
                
                {profile.bio && (
                  <div className="pt-4 border-t border-border/50 w-full">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profile.bio}
                    </p>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border/50 space-y-3 text-sm w-full">
                  {profile.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{profile.location}</span>
                    </div>
                  )}
                  {profile.website && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <LinkIcon className="h-4 w-4" />
                      <a 
                        href={profile.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {profile.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Joined {new Date(profile.created_at).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            
            <ProfileStats userId={profile.id} />
          </div>
          
          {/* Right Column - Tabs Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="facts" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="facts">Facts</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="facts" className="space-y-6">
                {facts.length > 0 ? (
                  facts.map((fact) => (
                    <FactCard 
                      key={fact.id}
                      title={fact.title}
                      content={fact.content}
                      category={fact.category}
                      author={{
                        name: profile.display_name || profile.username || 'Anonymous',
                        avatar: profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.id}`,
                        reputation: profile.reputation || 0,
                        verified: true,
                      }}
                      stats={{
                        verifications: fact.verification_count || 0,
                        discussions: 0,
                        saves: 0,
                      }}
                      trending={fact.is_verified}
                    />
                  ))
                ) : (
                  <Card className="p-12 text-center bg-gradient-card">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold text-lg mb-2">No facts yet</h3>
                    <p className="text-muted-foreground">
                      {isOwnProfile 
                        ? "Start sharing facts to build your profile!" 
                        : "This user hasn't shared any facts yet."}
                    </p>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="badges">
                <ProfileBadges userId={profile.id} reputation={profile.reputation || 0} />
              </TabsContent>
              
              <TabsContent value="collections">
                <ProfileCollections userId={profile.id} />
              </TabsContent>
              
              <TabsContent value="activity">
                <ProfileActivity userId={profile.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
