import { ExternalLink } from "lucide-react";

const Sponsors = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-2">
              Credits Sponsor
            </h3>
          </div>

          <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 border border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <a 
                  href="https://buildwith.bolt.new/event/poai-tech-for-good-hackathon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/BOLT_LOGO FULL_DARK.png"
                    alt="Bolt.new"
                    className="h-10 sm:h-12 lg:h-14 w-auto max-w-full"
                  />
                </a>
              </div>

              {/* Description */}
              <div className="flex-grow text-center md:text-left space-y-2 min-w-0">
                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                  Every participant gets <span className="font-bold text-primary">$25 in credits</span> for a free month of Bolt Pro — an AI-powered code generation tool to bring your ideas to life faster.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <a
                  href="https://buildwith.bolt.new/event/poai-tech-for-good-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  Claim Credits
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
