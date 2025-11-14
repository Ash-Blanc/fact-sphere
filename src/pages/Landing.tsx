import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Zap, Sparkles, TrendingUp, Award, CheckCircle2, Star, Globe, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Peer-Reviewed Verification",
      description: "Every fact undergoes rigorous peer review by certified scientists and experts before publication.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Users,
      title: "Global Expert Community",
      description: "Connect with 5,000+ verified scientists, researchers, and thought leaders from 50+ countries.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Real-Time Discovery",
      description: "Be the first to discover groundbreaking research as it's published and verified by our community.",
      gradient: "from-accent to-primary",
    },
    {
      icon: TrendingUp,
      title: "Trending Insights",
      description: "Stay ahead with AI-powered recommendations based on your interests and the latest scientific trends.",
      gradient: "from-primary via-secondary to-accent",
    },
    {
      icon: Award,
      title: "Reputation System",
      description: "Build credibility through contributions, earn badges, and climb the leaderboard.",
      gradient: "from-accent via-primary to-secondary",
    },
    {
      icon: Globe,
      title: "Cross-Disciplinary",
      description: "Explore connections across all scientific fields from quantum physics to astrobiology.",
      gradient: "from-secondary via-accent to-primary",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Quantum Physicist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      quote: "FactSphere has revolutionized how I share research findings with the global scientific community.",
      rating: 5,
    },
    {
      name: "Prof. James Wilson",
      role: "Geneticist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      quote: "The peer review process ensures only the highest quality scientific facts reach the community.",
      rating: 5,
    },
    {
      name: "Dr. Maria Garcia",
      role: "Environmental Scientist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      quote: "An invaluable platform for staying updated on the latest discoveries across all scientific disciplines.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10K+", label: "Verified Facts", icon: CheckCircle2 },
    { value: "5K+", label: "Scientists", icon: Users },
    { value: "50+", label: "Topics", icon: Lightbulb },
    { value: "98%", label: "Accuracy Rate", icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer animate-fade-in" onClick={() => navigate("/")}>
            <div className="relative">
              <Heart className="h-8 w-8 text-primary drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]" fill="currentColor" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              FactSphere
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/auth")} className="hover-scale">
              Login
            </Button>
            <Button onClick={() => navigate("/auth")} className="bg-gradient-primary hover:shadow-glow">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white border-0 hover-scale">
              <Sparkles className="h-4 w-4" />
              <span>Join 5,000+ Scientists Worldwide</span>
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Where Science Meets
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-scale-in">
                Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover, verify, and share fascinating scientific facts with a global community of experts. 
              <span className="block mt-2 font-semibold text-foreground">Every fact. Peer-reviewed. Real-time.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 bg-gradient-primary hover:shadow-glow hover-scale" onClick={() => navigate("/auth")}>
                <Sparkles className="mr-2 h-5 w-5" />
                Start Exploring Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale border-2">
                Watch Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 hover-scale">
                  <stat.icon className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              <Star className="h-3 w-3 mr-1" />
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Scientists</span> Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built by scientists, for scientists. Experience the future of scientific knowledge sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Award className="h-3 w-3 mr-1" />
              Trusted by Experts
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Scientists Are Saying
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of researchers who trust FactSphere for scientific collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full ring-4 ring-primary/10"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-5xl mx-auto bg-gradient-primary p-12 md:p-16 rounded-3xl border-0 shadow-glow text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-8">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-1" />
                Free Forever for Researchers
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Join the World's Leading
                <span className="block mt-2">Scientific Community?</span>
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Start discovering, verifying, and sharing groundbreaking scientific facts today. 
                No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 hover-scale shadow-lg" onClick={() => navigate("/auth")}>
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm hover-scale">
                  Schedule a Demo
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                FactSphere
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; 2025 FactSphere. Advancing scientific knowledge together.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
