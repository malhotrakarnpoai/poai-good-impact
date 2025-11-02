import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("https://hook.us1.make.com/dutcfextwvq545x9e1emlf9lmiatf5tp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-brown text-brown-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <div className="text-xl font-semibold">Poai</div>
            <p className="text-brown-foreground/80">
              Breaking bread over warm conversations about technology
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-brown-foreground/10 border border-brown-foreground/20 text-brown-foreground placeholder:text-brown-foreground/50 focus:outline-none focus:ring-2 focus:ring-brown-foreground/30"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-md bg-brown-foreground text-brown hover:bg-brown-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <p className={`text-sm mt-2 text-center ${message.includes("Thanks") ? "text-brown-foreground/80" : "text-brown-foreground/60"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className="text-center text-sm text-brown-foreground/60 pt-8 border-t border-brown-foreground/20">
            © 2024 Poai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
