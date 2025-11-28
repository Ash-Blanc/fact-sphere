import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { FactSubmissionForm } from "@/components/FactSubmissionForm";
import { Lightbulb } from "lucide-react";

const SubmitFact = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Submit a Fact</h1>
          </div>
          <p className="text-muted-foreground">
            Share your knowledge with the community. Make sure your fact is
            accurate, well-researched, and interesting!
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-card">
          <FactSubmissionForm />
        </div>
      </main>
    </div>
  );
};

export default SubmitFact;
