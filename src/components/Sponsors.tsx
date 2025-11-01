

const Sponsors = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 py-6 sm:py-8">
            {/* Credits Sponsor Label */}
            <div className="flex-shrink-0">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                Credits Sponsor
              </span>
            </div>

            {/* Logo Section */}
            <div className="flex-shrink-0">
              <img
                src="/BOLT_LOGO FULL_DARK.png"
                alt="Bolt.new"
                className="h-12 sm:h-14 lg:h-16 w-auto max-w-full"
              />
            </div>

            {/* Description */}
            <div className="flex-grow text-center md:text-left max-w-2xl">
              <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed font-medium">
                Every participant gets <span className="font-bold text-primary">$25 in credits</span> for a free month of Bolt Pro — an AI-powered code generation tool to bring your ideas to life faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
