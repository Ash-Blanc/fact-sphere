import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 backdrop-blur border border-secondary/20">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Accelerating Science at Internet Speed</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Discover, Share & Verify
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Scientific Facts
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join the global community where scientists and enthusiasts collaborate, 
            build reputation, and make breakthrough discoveries accessible to everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Explore Facts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-background/10 backdrop-blur border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
              How It Works
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-primary-foreground/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">10K+</div>
              <div className="text-sm">Verified Facts</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">5K+</div>
              <div className="text-sm">Scientists</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">100+</div>
              <div className="text-sm">Topics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
