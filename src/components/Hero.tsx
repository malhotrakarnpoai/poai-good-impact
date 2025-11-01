import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner-optimized.webp";

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-28 pb-20 sm:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            <div className="space-y-4 sm:space-y-4">
              <h1 className="text-[32px] leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:leading-tight">
                Tech-For-Good Hackathon <span className="text-primary">by Poai</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-secondary">
                Innovate • Connect • Goa
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                15th November • 10am-6.30pm
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Offline + Online
              </p>
            </div>
            
            <p className="text-base sm:text-base lg:text-lg text-foreground/80 leading-relaxed max-w-xl">
              Bringing technologists, domain experts, founders and creators together to solve local social challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={onRegisterClick}
                size="lg"
                className="rounded-full px-10 sm:px-10 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all h-12 sm:h-auto"
              >
                Register Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 sm:px-10 text-base sm:text-lg border-2 border-brown text-brown hover:bg-brown hover:text-brown-foreground h-12 sm:h-auto"
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Schedule
              </Button>
            </div>

            {/* Trust Signals - Subtle and below CTAs */}
            <div className="flex flex-wrap gap-2.5 items-center pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <span>🆓</span>
                <span>Free to Join</span>
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <span>🎓</span>
                <span>Beginner Friendly</span>
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <span>🎁</span>
                <span>$25 in Credits</span>
              </span>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBanner}
                alt="Tech-For-Good Hackathon collaboration"
                className="w-full h-auto object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
