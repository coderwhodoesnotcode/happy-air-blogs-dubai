import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "+971501234567"; // Replace with actual number
  const phoneNumber = "+971501234567";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I need AC repair services in Dubai.`, '_blank');
  };

  const callPhone = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <div className="text-white font-bold text-xl">HB</div>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Happy Brother</h1>
              <p className="text-sm text-muted-foreground">AC Services Dubai</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="electric" size="sm" onClick={callPhone}>
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button variant="whatsapp" size="sm" onClick={openWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="electric" size="sm" onClick={callPhone}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="whatsapp" size="sm" onClick={openWhatsApp}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;