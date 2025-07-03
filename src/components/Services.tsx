import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Snowflake, 
  Wrench, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle,
  MessageCircle 
} from "lucide-react";

const Services = () => {
  const whatsappNumber = "+971501234567";

  const openWhatsApp = (service: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I need ${service} service in Dubai. When can you come?`, '_blank');
  };

  const services = [
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Emergency AC Repair",
      description: "24/7 emergency repair service. AC not cooling? We'll fix it today!",
      price: "Starting from AED 150",
      features: ["Same-day service", "30min response", "No fix, no fee"],
      variant: "hero" as const,
      urgent: true
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "AC Installation",
      description: "Professional installation of new AC units with warranty",
      price: "Starting from AED 800",
      features: ["Free consultation", "2-year warranty", "Best brands"],
      variant: "accent" as const,
      urgent: false
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "AC Maintenance",
      description: "Regular maintenance to keep your AC running efficiently",
      price: "Starting from AED 100",
      features: ["Monthly plans", "Filter cleaning", "Performance check"],
      variant: "electric" as const,
      urgent: false
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AC Cleaning",
      description: "Deep cleaning service for better air quality and efficiency",
      price: "Starting from AED 120",
      features: ["Antibacterial treatment", "Duct cleaning", "Fresh air guarantee"],
      variant: "secondary" as const,
      urgent: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            OUR SERVICES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              EXPERT AC SOLUTIONS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to routine maintenance, we handle all your AC needs 
            with professional expertise and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-bold transition-all duration-300 group">
              {service.urgent && (
                <Badge variant="destructive" className="absolute -top-3 left-4 z-10 animate-pulse-glow">
                  🚨 URGENT
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-gradient-primary text-white w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={service.variant}
                  size="lg"
                  className="w-full"
                  onClick={() => openWhatsApp(service.title)}
                >
                  <MessageCircle className="h-5 w-5" />
                  BOOK NOW VIA WHATSAPP
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
            <p className="mb-6">Our expert technicians are standing by 24/7 for emergency repairs</p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => openWhatsApp("Emergency AC Repair")}
            >
              <MessageCircle className="h-6 w-6" />
              GET EMERGENCY HELP NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;