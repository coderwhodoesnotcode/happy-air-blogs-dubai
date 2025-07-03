import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-ac-service.jpg";

const Hero = () => {
  const whatsappNumber = "+971501234567";
  const phoneNumber = "+971501234567";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I need emergency AC repair in Dubai. Please send a technician ASAP.`, '_blank');
  };

  const callPhone = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="AC Service Dubai"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge */}
          <Badge variant="destructive" className="mb-6 text-sm font-bold px-4 py-2 animate-pulse-glow">
            🚨 24/7 EMERGENCY AC REPAIR
          </Badge>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              DUBAI'S #1
            </span>
            <br />
            <span className="text-foreground">
              AC REPAIR HEROES
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <strong>Same-day service</strong> in JBR, Dubai Marina & all Dubai areas. 
            No fix, no fee guarantee!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-success" />
              <span className="font-semibold">30min Response</span>
            </div>
            <Badge variant="secondary" className="font-semibold">
              500+ Happy Customers
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={openWhatsApp}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-6 w-6" />
              BOOK VIA WHATSAPP
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={callPhone}
              className="w-full sm:w-auto"
            >
              <Phone className="h-6 w-6" />
              CALL NOW: {phoneNumber}
            </Button>
          </div>

          {/* Service Areas */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Serving all Dubai areas:</strong>
            </p>
            <p className="text-sm text-foreground">
              JBR • Dubai Marina • Downtown • Business Bay • DIFC • Jumeirah • Barsha
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;