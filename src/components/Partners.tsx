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
      name: "Ethico",
      role: "Community Outreach",
      logo: "/Ethico-Color-logo.png",
      url: "https://www.ethicoindia.com/",
      category: "community"
    },
    {
      name: "Startup Goa",
      role: "Community Outreach",
      logo: "/startup-goa_logo.png",
      url: "https://startupgoa.org/",
      category: "community"
    },
    {
      name: "Asia Startup Network",
      role: "Ecosystem Partner",
      logo: "/ASN Colour-White.avif",
      url: "https://www.asiastartupnetwork.com/",
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
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-xl transition-all border border-border/50 group block"
              >
                <div className="space-y-4">
                  {/* Partner Logo or Name */}
                  <div className="min-h-[60px] flex items-center justify-center">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto max-w-full object-contain group-hover:scale-105 transition-transform"
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
              </a>
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
