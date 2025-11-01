import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyMobileCTAProps {
  onRegisterClick: () => void;
}

const StickyMobileCTA = ({ onRegisterClick }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (about 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <Button
          onClick={onRegisterClick}
          size="lg"
          className="w-full rounded-full text-base shadow-2xl hover:shadow-2xl transition-all h-14 font-semibold animate-in slide-in-from-bottom duration-300"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
