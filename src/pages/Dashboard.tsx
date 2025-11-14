import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FactCard from "@/components/FactCard";
import TrendingSidebar from "@/components/TrendingSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const sampleFacts = [
    {
      title: "Quantum Entanglement Enables Faster-Than-Light Communication Possibilities",
      content: "Recent experiments demonstrate that quantum entangled particles can maintain correlations across vast distances, potentially revolutionizing secure communications and quantum computing architectures. This phenomenon challenges our classical understanding of information transfer.",
      category: "Quantum Physics",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        reputation: 9845,
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
      title: "CRISPR-Cas9 Successfully Treats Genetic Disease in Human Trial",
      content: "A groundbreaking clinical trial shows that CRISPR gene editing technology has successfully treated sickle cell disease in patients, marking a major milestone in genetic medicine. The treatment showed sustained improvements over 12 months.",
      category: "Genetics",
      author: {
        name: "Prof. James Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        reputation: 8920,
        verified: true,
      },
      stats: {
        verifications: 289,
        discussions: 78,
        saves: 156,
      },
      trending: true,
    },
    {
      title: "Ocean Microplastics Found to Impact Marine Food Chain at All Levels",
      content: "New research reveals that microplastics are not only present in ocean waters but are being actively consumed and accumulated by organisms at every level of the marine food chain, from plankton to large predatory fish.",
      category: "Environmental Science",
      author: {
        name: "Dr. Maria Garcia",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        reputation: 7654,
        verified: true,
      },
      stats: {
        verifications: 267,
        discussions: 92,
        saves: 203,
      },
    },
    {
      title: "Brain-Computer Interface Allows Paralyzed Patient to Control Robotic Arm",
      content: "Advanced neural interface technology has enabled a patient with complete paralysis to control a robotic arm with thought alone, achieving fine motor control sufficient for daily tasks like eating and writing.",
      category: "Neuroscience",
      author: {
        name: "Dr. Alex Kumar",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        reputation: 6543,
        verified: true,
      },
      stats: {
        verifications: 198,
        discussions: 45,
        saves: 167,
      },
    },
    {
      title: "New Photovoltaic Material Achieves 47% Solar Energy Conversion Efficiency",
      content: "Scientists have developed a multi-junction solar cell using perovskite materials that achieves unprecedented efficiency in converting sunlight to electricity, potentially revolutionizing renewable energy adoption.",
      category: "Renewable Energy",
      author: {
        name: "Dr. Linda Zhang",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
        reputation: 5432,
        verified: true,
      },
      stats: {
        verifications: 234,
        discussions: 67,
        saves: 189,
      },
    },
    {
      title: "Asteroid Sample Returns Organic Compounds Essential for Life Formation",
      content: "Analysis of samples from asteroid Ryugu reveals complex organic molecules including amino acids, supporting theories about the extraterrestrial origin of life's building blocks on early Earth.",
      category: "Astrobiology",
      author: {
        name: "Dr. Robert Kim",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
        reputation: 4321,
        verified: true,
      },
      stats: {
        verifications: 176,
        discussions: 34,
        saves: 145,
      },
    },
  ];

  if (!user) {
    return null; // Show nothing while checking auth
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="for-you">For You</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
              
              <TabsContent value="for-you" className="space-y-6">
                {sampleFacts.map((fact, index) => (
                  <FactCard key={index} {...fact} />
                ))}
              </TabsContent>
              
              <TabsContent value="trending" className="space-y-6">
                {sampleFacts.filter(f => f.trending).map((fact, index) => (
                  <FactCard key={index} {...fact} />
                ))}
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-6">
                {sampleFacts.map((fact, index) => (
                  <FactCard key={index} {...fact} />
                ))}
              </TabsContent>
              
              <TabsContent value="following" className="space-y-6">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Follow scientists and topics to see their content here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="hidden lg:block w-80">
            <TrendingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
