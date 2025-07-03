import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Zap
} from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+971501234567";
  const phoneNumber = "+971501234567";
  const email = "info@happybrotherac.com";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I need AC service in Dubai. Please provide a quote.`, '_blank');
  };

  const callPhone = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const sendEmail = () => {
    window.open(`mailto:${email}?subject=AC Service Request&body=Hello, I need AC service in Dubai. Please contact me.`, '_self');
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              CONTACT US
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                GET INSTANT HELP
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to fix your AC? Contact us now for immediate assistance. 
              We respond within 30 minutes!
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-primary p-8 rounded-xl text-white text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-8 w-8 animate-pulse-glow" />
              <h3 className="text-2xl font-bold">EMERGENCY HOTLINE</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              AC not working? Call us now for immediate assistance!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                onClick={callPhone}
                className="text-primary"
              >
                <Phone className="h-6 w-6" />
                CALL: {phoneNumber}
              </Button>
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-6 w-6" />
                WHATSAPP NOW
              </Button>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <Card className="hover:shadow-bold transition-all duration-300 cursor-pointer" onClick={openWhatsApp}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 rounded-lg bg-success/10 text-success w-fit">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant quotes and book services directly via WhatsApp
                </p>
                <Button variant="whatsapp" className="w-full">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="hover:shadow-bold transition-all duration-300 cursor-pointer" onClick={callPhone}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 rounded-lg bg-electric/10 text-electric w-fit">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Call</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our AC experts for immediate help
                </p>
                <Button variant="electric" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-bold transition-all duration-300 cursor-pointer" onClick={sendEmail}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 rounded-lg bg-primary/10 text-primary w-fit">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Send us detailed information about your AC issues
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Hours */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <span>{whatsappNumber}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <span>Serving all Dubai areas including JBR, Marina, Downtown, Business Bay, and more</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Service Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Emergency Service</span>
                    <Badge variant="destructive">24/7 Available</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Regular Service Hours</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend Service</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="pt-4 text-sm text-muted-foreground">
                    <p>
                      <strong>Emergency repairs available 24/7</strong> - We understand that AC problems 
                      don't wait for business hours, especially in Dubai's heat!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;