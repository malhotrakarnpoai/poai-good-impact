const Partners = () => {
  const partners = [
    {
      name: "Maverick & Farmer",
      role: "Venue Partner",
      category: "venue"
    },
    {
      name: "Bolt.new",
      role: "Credits Partner",
      logo: "/BOLT_LOGO FULL_DARK.png",
      category: "credits"
    },
    {
      name: "Ethico",
      role: "Community Outreach",
      category: "community"
    },
    {
      name: "Startup Goa",
      role: "Community Outreach",
      category: "community"
    },
    {
      name: "Asia Startup Network",
      role: "Ecosystem Partner",
      category: "ecosystem"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making this hackathon possible through their support and collaboration
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-xl transition-all border border-border/50 group"
              >
                <div className="space-y-4">
                  {/* Partner Logo or Name */}
                  <div className="min-h-[60px] flex items-center justify-center">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto max-w-full object-contain"
                      />
                    ) : (
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                    )}
                  </div>

                  {/* Partner Role */}
                  <div className="text-center pt-2 border-t border-border/30">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {partner.role}
                    </span>
                  </div>

                  {/* Partner Name (if logo is shown) */}
                  {partner.logo && (
                    <p className="text-center text-sm text-muted-foreground pt-1">
                      {partner.name}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="text-center pt-8">
            <p className="text-base text-muted-foreground">
              Interested in partnering with us?{" "}
              <a
                href="mailto:hello@poai.tech"
                className="text-primary font-semibold hover:underline"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
