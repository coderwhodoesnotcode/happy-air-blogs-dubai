import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Phone, MessageCircle } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog posts data (same as in Blog.tsx)
  const blogPosts = [
    {
      id: 1,
      title: "Signs Your AC Needs Immediate Repair",
      description: "Learn the warning signs that indicate your air conditioning system requires urgent professional attention.",
      content: `
        <p>Your air conditioning system is essential for comfort in Dubai's extreme heat. However, like any complex mechanical system, it can develop problems that require immediate attention. Recognizing these warning signs early can save you from costly repairs and uncomfortable nights.</p>
        
        <h2>1. Strange Noises</h2>
        <p>If your AC unit is making unusual sounds like grinding, squealing, or banging, it's time to call a professional. These noises often indicate worn bearings, loose belts, or debris in the system.</p>
        
        <h2>2. Poor Airflow</h2>
        <p>Weak airflow from your vents could signal a clogged filter, blocked ducts, or a failing compressor. This not only reduces comfort but also forces your system to work harder, increasing energy costs.</p>
        
        <h2>3. Warm Air Instead of Cool</h2>
        <p>If your AC is blowing warm air, check your thermostat settings first. If the settings are correct, you may have a refrigerant leak or compressor issue that requires professional repair.</p>
        
        <h2>4. High Humidity Levels</h2>
        <p>Your AC should moderate humidity levels in your home. If you notice sticky or muggy conditions indoors, your system may not be functioning properly.</p>
        
        <h2>5. Frequent Cycling</h2>
        <p>Short cycling, where your AC turns on and off frequently, can indicate various issues including thermostat problems, refrigerant leaks, or electrical issues.</p>
        
        <p>Don't wait for these problems to worsen. Contact Happy Brother AC Services for fast, reliable repair in Dubai.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "How to Maintain Your AC During Dubai Summer",
      description: "Essential tips for keeping your air conditioning running efficiently during the extreme heat.",
      content: `
        <p>Dubai's summer temperatures can exceed 45°C (113°F), putting enormous strain on your air conditioning system. Proper maintenance during these extreme conditions is crucial for optimal performance and longevity.</p>
        
        <h2>Pre-Summer Preparation</h2>
        <p>Before the heat arrives, schedule a professional maintenance check. This includes cleaning coils, checking refrigerant levels, and inspecting electrical connections.</p>
        
        <h2>Regular Filter Changes</h2>
        <p>During peak summer, change your air filters every 30 days instead of the usual 90 days. Dubai's dust and sand can quickly clog filters, reducing efficiency.</p>
        
        <h2>Keep Outdoor Units Clear</h2>
        <p>Ensure your outdoor unit has at least 2 feet of clearance on all sides. Remove debris, leaves, and dust regularly to maintain proper airflow.</p>
        
        <h2>Monitor Thermostat Settings</h2>
        <p>Set your thermostat to 24-26°C (75-78°F) for optimal efficiency. Every degree lower can increase energy consumption by 6-8%.</p>
        
        <h2>Use Ceiling Fans</h2>
        <p>Ceiling fans can make you feel 3-4 degrees cooler, allowing you to set your thermostat higher while maintaining comfort.</p>
        
        <p>Regular maintenance can extend your AC's life and reduce energy bills by up to 15%. Contact us for professional summer maintenance services.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Tips"
    },
    {
      id: 3,
      title: "Energy-Efficient Cooling Solutions",
      description: "Discover ways to reduce your electricity bills while keeping your home comfortable.",
      content: `
        <p>With rising electricity costs in Dubai, finding ways to cool your home efficiently while reducing energy consumption has become more important than ever.</p>
        
        <h2>Upgrade to Inverter Technology</h2>
        <p>Inverter ACs can save up to 30-50% on electricity bills compared to non-inverter units. They adjust compressor speed based on cooling demand.</p>
        
        <h2>Proper Insulation</h2>
        <p>Good insulation can reduce cooling costs by up to 20%. Focus on windows, doors, and any gaps where cool air might escape.</p>
        
        <h2>Smart Thermostats</h2>
        <p>Programmable thermostats can automatically adjust temperatures when you're away, potentially saving 10-15% on energy costs.</p>
        
        <h2>Regular Maintenance</h2>
        <p>A well-maintained AC unit runs more efficiently. Clean coils, fresh filters, and proper refrigerant levels can improve efficiency by 15%.</p>
        
        <h2>Zone Cooling</h2>
        <p>Cool only the rooms you're using. Close vents in unused areas and use individual room controls when available.</p>
        
        <p>Implementing these strategies can significantly reduce your cooling costs while maintaining comfort. Contact us for energy efficiency consultations.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "Energy Saving"
    },
    {
      id: 4,
      title: "Common AC Problems in Dubai",
      description: "The most frequent air conditioning issues faced by Dubai residents and how to prevent them.",
      content: `
        <p>Dubai's harsh climate creates unique challenges for air conditioning systems. Understanding common problems can help you prevent costly repairs.</p>
        
        <h2>Sand and Dust Accumulation</h2>
        <p>Dubai's desert environment means constant battle against sand and dust. These particles clog filters, coat coils, and reduce system efficiency.</p>
        
        <h2>Refrigerant Leaks</h2>
        <p>Extreme heat can cause refrigerant lines to expand and contract, potentially leading to leaks. Signs include reduced cooling and ice formation on coils.</p>
        
        <h2>Electrical Issues</h2>
        <p>High temperatures stress electrical components. Frequent power fluctuations in some areas can damage sensitive electronics.</p>
        
        <h2>Compressor Overheating</h2>
        <p>When outdoor temperatures exceed 45°C, compressors work overtime and may overheat, especially in poorly maintained units.</p>
        
        <h2>Drainage Problems</h2>
        <p>High humidity combined with dust can clog condensate drains, leading to water leaks and potential water damage.</p>
        
        <h2>Prevention Tips</h2>
        <p>Regular maintenance, quality filters, and prompt repairs can prevent most issues. Don't wait for complete system failure.</p>
        
        <p>Our experienced technicians understand Dubai's unique challenges. Contact us for preventive maintenance and repairs.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1635767442118-a4cd1b88cfc9?w=400&h=250&fit=crop",
      date: "2024-05-30",
      readTime: "8 min read",
      category: "Troubleshooting"
    },
    {
      id: 5,
      title: "When to Replace vs Repair Your AC",
      description: "Learn when it's more cost-effective to replace your AC unit rather than repair it.",
      content: `
        <p>Deciding whether to repair or replace your air conditioning unit can be challenging. Several factors should influence this important decision.</p>
        
        <h2>Age of the Unit</h2>
        <p>If your AC is over 10-12 years old and requires major repairs, replacement might be more economical. Newer units are significantly more efficient.</p>
        
        <h2>Repair Costs vs Replacement</h2>
        <p>As a general rule, if repair costs exceed 50% of a new unit's price, consider replacement. Factor in potential future repairs too.</p>
        
        <h2>Energy Efficiency</h2>
        <p>Older units can cost 20-40% more to operate. A new, efficient unit can pay for itself through energy savings over time.</p>
        
        <h2>Frequency of Repairs</h2>
        <p>If you're calling for repairs multiple times per year, the cumulative costs and inconvenience may justify replacement.</p>
        
        <h2>Refrigerant Type</h2>
        <p>Units using R-22 refrigerant face increasing costs and availability issues. Upgrading to newer refrigerants makes financial sense.</p>
        
        <h2>Performance Issues</h2>
        <p>If your AC can't maintain comfortable temperatures or has persistent humidity problems, replacement might be the solution.</p>
        
        <p>Our experts can help you make this decision based on your specific situation and budget. Contact us for honest assessment.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1597149488883-0ad2de3fc093?w=400&h=250&fit=crop",
      date: "2024-05-25",
      readTime: "4 min read",
      category: "Advice"
    },
    {
      id: 6,
      title: "Smart AC Controls and Automation",
      description: "How modern smart controls can improve your AC efficiency and comfort levels.",
      content: `
        <p>Smart home technology has revolutionized air conditioning control, offering unprecedented convenience and energy savings for Dubai residents.</p>
        
        <h2>Smart Thermostats</h2>
        <p>Learn your schedule and preferences, automatically adjusting temperatures for optimal comfort and efficiency. Some models can save up to 20% on energy costs.</p>
        
        <h2>Mobile App Control</h2>
        <p>Control your AC from anywhere using smartphone apps. Start cooling before you arrive home or adjust settings while away.</p>
        
        <h2>Voice Control Integration</h2>
        <p>Integration with Alexa, Google Assistant, or Siri allows hands-free temperature control and scheduling.</p>
        
        <h2>Occupancy Sensors</h2>
        <p>Automatically adjust cooling based on room occupancy, ensuring energy isn't wasted cooling empty spaces.</p>
        
        <h2>Weather Integration</h2>
        <p>Smart systems can adjust based on weather forecasts, pre-cooling before extreme heat or reducing output during milder periods.</p>
        
        <h2>Energy Monitoring</h2>
        <p>Track energy usage in real-time and receive insights on how to optimize your cooling schedule for maximum savings.</p>
        
        <p>Upgrading to smart controls can improve comfort while reducing energy costs. Contact us about smart AC automation solutions.</p>
      `,
      thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop",
      date: "2024-05-20",
      readTime: "6 min read",
      category: "Technology"
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || ''));

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "+971501234567";
  const phoneNumber = "+971501234567";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I read your blog about "${post.title}" and need AC services in Dubai.`, '_blank');
  };

  const callPhone = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-primary p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need AC Service Right Now?
            </h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Don't wait for problems to get worse. Contact us today for fast, reliable AC repair and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={callPhone} className="bg-white text-primary hover:bg-white/90">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button variant="secondary" size="lg" onClick={openWhatsApp} className="bg-white text-primary hover:bg-white/90">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;