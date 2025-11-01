import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import poaiLogo from "@/assets/poai-logo-new.png";

interface NavbarProps {
  onRegisterClick: () => void;
}

const Navbar = ({ onRegisterClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Hide navbar CTA on mobile when sticky CTA appears (after 80% of hero height)
      const heroHeight = window.innerHeight;
      setShowMobileCTA(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Why Join", href: "#why-join", onClick: () => document.getElementById('why-join')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Challenges", href: "#challenges", onClick: () => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Champions", href: "#champions", onClick: () => document.getElementById('champions')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Schedule", href: "#schedule", onClick: () => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Partners", href: "#partners", onClick: () => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  const handleNavClick = (onClick: () => void) => {
    onClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={poaiLogo} alt="Poai Logo" className="h-8 sm:h-10 lg:h-12" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Button
                onClick={onRegisterClick}
                size="sm"
                className="rounded-full px-6 text-sm shadow-lg hover:shadow-xl transition-all h-10"
              >
                Register
              </Button>
            </div>

            {/* Mobile Menu Button and CTA */}
            <div className="flex lg:hidden items-center gap-3">
              <Button
                onClick={onRegisterClick}
                size="sm"
                className={`rounded-full px-4 text-sm shadow-lg hover:shadow-xl transition-all h-9 ${
                  showMobileCTA ? "hidden" : ""
                }`}
              >
                Register
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <img src={poaiLogo} alt="Poai Logo" className="h-8" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col p-6 space-y-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.onClick)}
                className="text-left py-3 px-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-border/50">
            <Button
              onClick={() => {
                onRegisterClick();
                setIsMobileMenuOpen(false);
              }}
              size="lg"
              className="w-full rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
