const WhoThisIsFor = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Learn Vibe Coding",
      description: "Master AI development with bolt.new"
    },
    {
      icon: "🎓",
      title: "Beginner Friendly",
      description: "No coding experience needed"
    },
    {
      icon: "🤝",
      title: "Expert Mentors",
      description: "UN-recognized sustainability leaders"
    },
    {
      icon: "💰",
      title: "$25 Bolt Credits",
      description: "Free month of premium AI tools"
    },
    {
      icon: "🌊",
      title: "Goa's First AI Community",
      description: "Be part of the inaugural event"
    },
    {
      icon: "💚",
      title: "Create Real Impact",
      description: "Build solutions that matter"
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Why You Should Join
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-xl transition-shadow border border-border/50"
              >
                <div className="flex flex-col items-start space-y-3">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">
                    {benefit.title === "$25 Bolt Credits" ? (
                      <span className="inline-flex items-center gap-1.5">
                        $25 <img src="/BOLT_LOGO FULL_DARK.png" alt="Bolt.new" className="h-5 w-auto inline-block" /> Credits
                      </span>
                    ) : (
                      benefit.title
                    )}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Target Audience */}
          <div className="text-center pt-4">
            <p className="text-lg text-foreground/80">
              <span className="font-semibold">Perfect for:</span> Developers, Designers, Product Managers, Strategists, or anyone curious about AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
