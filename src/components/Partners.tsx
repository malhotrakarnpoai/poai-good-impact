const Partners = () => {
  const partners = [
    {
      name: "Maverick & Farmer",
      role: "Venue Partner",
      logo: "/M&F_LOGO.png",
      url: "https://www.instagram.com/maverickandfarmer/",
      category: "venue"
    },
    {
      name: "Bolt.new",
      role: "Credits Partner",
      logo: "/BOLT_LOGO FULL_DARK.png",
      url: "https://bolt.new/",
      category: "credits"
    },
    {
      name: "Asia Startup Network",
      role: "Ecosystem Partner",
      logo: "/ASN Colour-White.avif",
      url: "https://www.asiastartupnetwork.com/",
      category: "ecosystem"
    },
    {
      name: "Startup Goa",
      role: "Community Outreach",
      logo: "/startup-goa_logo.png",
      url: "https://startupgoa.org/",
      category: "community"
    },
    {
      name: "Ethico",
      role: "Community Outreach",
      logo: "/Ethico-Color-logo.png",
      url: "https://www.ethicoindia.com/",
      category: "community"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all border border-border/30 group block aspect-square flex flex-col items-center justify-center"
              >
                {/* Partner Logo */}
                <div className="flex items-center justify-center mb-3">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-10 sm:h-12 w-auto max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <h3 className="text-sm sm:text-base font-bold text-foreground text-center group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                  )}
                </div>

                {/* Partner Role Badge */}
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium text-center">
                  {partner.role}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
