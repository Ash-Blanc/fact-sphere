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
          
          <div className="flex flex-col items-center mb-6">
            <svg 
              className="w-32 h-32 mb-4 transition-all duration-300 hover:scale-110" 
              viewBox="0 0 140 116.81973272770657" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heroHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>

              <g transform="translate(-3.786747748164828, -17.496573322574054) scale(0.6818086733562148)">
                <g>
                  <path
                    d="M210.299,26.539c-0.485-0.583-1.238-0.877-2.239-0.877c-9.533,0-48.115,28.483-60.796,38.046   c-11.675-11.082-27.138-17.337-43.468-17.337c-14.703,0-29.036,5.187-40.36,14.604c-24.888,20.699-29.795,56.62-12.492,83.089   c-14.605,13.486-26.493,25.28-34.396,34.188C4.89,191.389,4.835,194.741,6.088,196.249C6.573,196.831,7.326,197,8.327,197   c0,0,0,0,0.001,0c6.467,0,28.999-14.181,58.523-36.264c10.657,7.709,23.536,11.979,37.011,11.979   c14.703,0,29.037-5.187,40.36-14.604c22.52-18.729,28.67-49.919,16.822-75.297c9.28-8.441,17.718-16.427,24.972-23.677   C214.082,31.087,211.333,27.783,210.299,26.539z M64.715,62.511C75.68,53.392,89.559,48.37,103.795,48.37   c15.966,0,31.093,6.153,42.436,17.078l0.021,0.021c0.594,0.573,1.167,1.172,1.74,1.771l0.566,0.591l0.009-0.006   c0.786,0.844,1.551,1.71,2.293,2.603c1.681,2.021,3.192,4.126,4.567,6.288c-10.808,10.458-25.458,23.653-43.782,38.892   c-19.582,16.286-36.696,29.35-49.734,38.449c-1.797-1.689-3.515-3.478-5.113-5.4c-0.688-0.827-1.348-1.667-1.985-2.519l0.006-0.008   l-0.505-0.696c-0.421-0.579-0.842-1.161-1.24-1.75l-0.128-0.192C35.784,117.814,40.452,82.69,64.715,62.511z M150.199,66.673   c13.987-9.862,24.111-15.737,27.157-15.737c0.129,0,0.211,0.013,0.257,0.024c0.385,1.944-6.685,10.635-20.725,24.339   c-1.36-2.112-2.845-4.171-4.491-6.151C151.689,68.296,150.95,67.479,150.199,66.673z M60.231,155.223   c-12.642,8.726-21.163,13.478-23.926,13.479c-0.124,0-0.204-0.012-0.251-0.023c-0.034-0.512,0.505-4.239,17.386-21.064   c0.587,0.784,1.187,1.562,1.82,2.323C56.819,151.811,58.489,153.563,60.231,155.223z M142.944,156.574   c-10.965,9.12-24.844,14.142-39.081,14.142c-12.836,0-25.111-4.003-35.332-11.24c14.71-11.052,31.075-23.991,48.025-38.089   c15.374-12.786,29.963-25.406,42.946-37.167C170.625,108.69,164.585,138.576,142.944,156.574z M184.604,57.723   c-17.661,17.652-42.281,39.76-69.326,62.252C64.52,162.19,17.542,195.256,8.328,195.254c-0.421,0-0.641-0.084-0.701-0.157   c-1.087-1.306,4.829-12.724,44.455-49.333c0.052,0.073,0.105,0.147,0.159,0.221c-20.626,20.52-18.608,22.948-17.742,23.99   c0.401,0.481,1.009,0.726,1.808,0.726c7.085-0.001,39.308-22.524,76.619-53.555c19.138-15.916,36.565-31.566,49.073-44.067   c20.008-19.999,18.016-22.394,17.166-23.417c-0.401-0.482-1.008-0.726-1.807-0.726c-4.537,0-17.873,8.727-28.547,16.266   c-0.029-0.03-0.059-0.061-0.087-0.091c30.667-23.12,53.363-37.45,59.338-37.45c0.421,0,0.641,0.084,0.701,0.156   C208.868,27.946,211.072,31.267,184.604,57.723z"
                    fill="url(#heroHeartGradient)"
                  />
                  <path
                    d="M33.5,155c1.746,0,3.167-1.42,3.167-3.167s-1.42-3.167-3.167-3.167s-3.167,1.421-3.167,3.167S31.754,155,33.5,155z    M33.5,150.667c0.643,0,1.167,0.523,1.167,1.167c0,0.643-0.523,1.167-1.167,1.167c-0.644,0-1.167-0.523-1.167-1.167   C32.333,151.19,32.856,150.667,33.5,150.667z"
                    fill="url(#heroHeartGradient)"
                  />
                  <path
                    d="M173.667,81c-2.573,0-4.667,2.093-4.667,4.667s2.093,4.667,4.667,4.667s4.667-2.093,4.667-4.667S176.24,81,173.667,81z    M173.667,88.333c-1.47,0-2.667-1.196-2.667-2.667S172.196,83,173.667,83s2.667,1.196,2.667,2.667S175.137,88.333,173.667,88.333z"
                    fill="url(#heroHeartGradient)"
                  />
                  <path
                    d="M127,44.667c2.021,0,3.667-1.645,3.667-3.667c0-2.021-1.645-3.667-3.667-3.667c-2.022,0-3.667,1.645-3.667,3.667   C123.333,43.022,124.978,44.667,127,44.667z M127,39.333c0.919,0,1.667,0.748,1.667,1.667s-0.748,1.667-1.667,1.667   s-1.667-0.748-1.667-1.667S126.081,39.333,127,39.333z"
                    fill="url(#heroHeartGradient)"
                  />
                </g>
              </g>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
              FactSphere
            </span>
            Discover, Share & Verify
            <span className="block text-primary-foreground/90">
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
