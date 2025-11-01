import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const scheduleItems = [
    { time: "9.30-10.00", event: "Registration" },
    { time: "10.00-10.15", event: "Introduction to Poai, Hackathon overview" },
    { time: "10.15-10.30", event: "Speed Networking" },
    { time: "10.30-11.00", event: "2 Challenge Champions detail out the challenges (Aparna & ...)" },
    { time: "11.00-11.45", event: "Vibe Coding with Krishna Goutham" },
    { time: "11.45-12.00", event: "Break" },
    { time: "12.00-17.00", event: "Hackathon", highlight: true },
    { time: "15.00-15.30", event: "Challenge Champions Check-in" },
    { time: "17.00", event: "Hackathon ends" },
    { time: "17.00-17.30", event: "Judging" },
    { time: "17.30-18.00", event: "Judges announce winners" },
    { time: "18.00-18.15", event: "Closure & What's Next with Poai" },
  ];

  return (
    <section id="schedule" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Schedule
            </h2>
            <p className="text-2xl text-primary font-semibold">
              15th November, Saturday - 10am to 6.30pm
            </p>
          </div>

          <div className="bg-background rounded-2xl shadow-card overflow-hidden">
            <div className="divide-y divide-border">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 hover:bg-muted/50 transition-colors ${
                    item.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="font-bold text-primary sm:col-span-1">
                    {item.time}
                  </div>
                  <div className="text-foreground/80 sm:col-span-2 font-medium">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Location Card */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Venue
              </h3>
              <p className="text-lg text-muted-foreground">
                Join us in person at our beautiful Goa location
              </p>
            </div>

            <div className="bg-background rounded-3xl shadow-xl overflow-hidden border border-border/50 hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Map Preview */}
                <div className="md:col-span-2 relative h-64 md:h-auto min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.8267895!2d73.7392!3d15.4954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI5JzQzLjQiTiA3M8KwNDQnMjEuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Maverick & Farmer Anjuna Location"
                  />
                </div>

                {/* Location Details */}
                <div className="md:col-span-3 p-6 sm:p-8 lg:p-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                        Maverick & Farmer
                      </h4>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        Anjuna, Goa
                      </p>
                      <p className="text-sm text-muted-foreground">
                        A creative co-working space nestled in the heart of Anjuna, perfect for innovation and collaboration.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://maps.app.goo.gl/Q4AEaXLL6wdo5xbL8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="lg"
                        className="w-full rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/Q4AEaXLL6wdo5xbL8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full rounded-full border-2 hover:bg-muted"
                      >
                        Get Directions
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center">
                      <span className="font-semibold text-foreground">Attending online?</span> You'll receive a Zoom link via email after registration.
                    </p>
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

export default Schedule;
