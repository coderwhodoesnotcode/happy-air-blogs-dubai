import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Happy Customers" },
    { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Emergency Service" },
    { icon: <Award className="h-8 w-8" />, value: "5+", label: "Years Experience" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Satisfaction Guarantee" }
  ];

  const whyChooseUs = [
    "Licensed and insured AC technicians",
    "Same-day service available",
    "Transparent pricing with no hidden fees",
    "Warranty on all repair work",
    "Serving all areas of Dubai",
    "Emergency 24/7 response team"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              ABOUT US
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                DUBAI'S TRUSTED
              </span>
              <br />
              AC EXPERTS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Happy Brother Air Conditioning Services has been keeping Dubai cool for over 5 years. 
              We're your local AC repair heroes, available 24/7 for all your cooling needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-bold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 p-3 rounded-lg bg-gradient-primary text-white w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Your AC Repair Heroes in Dubai
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by the Happy Brothers, we started this business with one simple mission: 
                  to provide fast, reliable AC repair services to Dubai residents when they need it most.
                </p>
                <p>
                  Living in Dubai's extreme heat, we understand how crucial a working AC system is. 
                  That's why we offer 24/7 emergency services and guarantee same-day repairs for most issues.
                </p>
                <p>
                  Our team of certified technicians specializes in all major AC brands and systems, 
                  from residential apartments to commercial buildings across Dubai, JBR, Marina, and beyond.
                </p>
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Why Choose Happy Brother?
              </h3>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">We Serve All Dubai Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "JBR", "Dubai Marina", "Downtown Dubai", "Business Bay", 
                "DIFC", "Jumeirah", "Al Barsha", "Dubai Hills", 
                "Arabian Ranches", "Motor City", "Sports City", "Dubai South"
              ].map((area) => (
                <Badge key={area} variant="secondary" className="px-3 py-1">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;