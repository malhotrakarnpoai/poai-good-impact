import { Check, Rocket, Clock } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, accessible, and designed for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Getting Started Card */}
            <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Getting Started</h3>
                </div>

                <div className="space-y-5 pl-1">
                  <div className="flex gap-3 items-start group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="text-base sm:text-lg text-foreground/90 font-medium">Free registration</p>
                      <p className="text-sm text-muted-foreground">No cost to participate</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="text-base sm:text-lg text-foreground/90 font-medium">Solo or team</p>
                      <p className="text-sm text-muted-foreground">Both welcome</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="text-base sm:text-lg text-foreground/90 font-medium">Beginner friendly</p>
                      <p className="text-sm text-muted-foreground">No tech knowledge needed</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-2">
                      <div>
                        <p className="text-base sm:text-lg text-foreground/90 font-medium">In-person</p>
                        <p className="text-sm text-muted-foreground">Maverick&Farmer, Anjuna by 9:30am</p>
                        <a 
                          href="https://maps.app.goo.gl/Q4AEaXLL6wdo5xbL8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-primary/70 hover:text-primary hover:underline inline-flex items-center gap-1 mt-1"
                        >
                          View on map →
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">OR</span>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg text-foreground/90 font-medium">Online</p>
                        <p className="text-sm text-muted-foreground">Zoom link via email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Two Cards Stacked */}
            <div className="space-y-6 lg:space-y-8">
              {/* What You'll Build Card */}
              <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">What You'll Build</h3>
                  </div>
                  <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pl-1">
                    Submit a published link to a <span className="font-semibold text-foreground">website, app, or presentation</span> created using bolt.new.
                  </p>
                  <p className="text-sm text-muted-foreground pl-1 italic">
                    Focus on demonstrating your idea - perfection not required!
                  </p>
                </div>
              </div>

              {/* Timeline Card */}
              <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Timeline</h3>
                  </div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-bold text-primary min-w-[120px]">10am-5pm</span>
                      <span className="text-base text-foreground/80">Hackathon</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-bold text-primary min-w-[120px]">5pm-6pm</span>
                      <span className="text-base text-foreground/80">Judging</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-bold text-primary min-w-[120px]">6pm</span>
                      <span className="text-base text-foreground/80">Winners announced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
