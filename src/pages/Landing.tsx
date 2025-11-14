import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Zap } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              FactSphere
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/auth")}>
              Login
            </Button>
            <Button onClick={() => navigate("/auth")}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Heart className="h-4 w-4" />
              <span>Discover Verified Scientific Facts</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Where Science Meets
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of scientists, researchers, and curious minds sharing and verifying fascinating facts about our world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => navigate("/auth")}>
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Verified Facts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary">5K+</div>
                <div className="text-sm text-muted-foreground">Scientists</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Topics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FactSphere?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform brings together the best of scientific knowledge sharing and community verification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Content</h3>
              <p className="text-muted-foreground">
                Every fact is peer-reviewed and verified by our community of experts before publication.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Active Community</h3>
              <p className="text-muted-foreground">
                Join discussions with scientists and researchers from around the world.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                Stay updated with the latest scientific discoveries and trending topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-primary p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Explore the World of Science?
            </h2>
            <p className="text-white/90 text-lg">
              Join our community today and start discovering fascinating facts.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => navigate("/auth")}>
              Create Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 FactSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
