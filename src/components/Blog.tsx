import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Signs Your AC Needs Immediate Repair",
      description: "Learn the warning signs that indicate your air conditioning system requires urgent professional attention.",
      thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "How to Maintain Your AC During Dubai Summer",
      description: "Essential tips for keeping your air conditioning running efficiently during the extreme heat.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Tips"
    },
    {
      id: 3,
      title: "Energy-Efficient Cooling Solutions",
      description: "Discover ways to reduce your electricity bills while keeping your home comfortable.",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "Energy Saving"
    },
    {
      id: 4,
      title: "Common AC Problems in Dubai",
      description: "The most frequent air conditioning issues faced by Dubai residents and how to prevent them.",
      thumbnail: "https://images.unsplash.com/photo-1635767442118-a4cd1b88cfc9?w=400&h=250&fit=crop",
      date: "2024-05-30",
      readTime: "8 min read",
      category: "Troubleshooting"
    },
    {
      id: 5,
      title: "When to Replace vs Repair Your AC",
      description: "Learn when it's more cost-effective to replace your AC unit rather than repair it.",
      thumbnail: "https://images.unsplash.com/photo-1597149488883-0ad2de3fc093?w=400&h=250&fit=crop",
      date: "2024-05-25",
      readTime: "4 min read",
      category: "Advice"
    },
    {
      id: 6,
      title: "Smart AC Controls and Automation",
      description: "How modern smart controls can improve your AC efficiency and comfort levels.",
      thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop",
      date: "2024-05-20",
      readTime: "6 min read",
      category: "Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AC Service <span className="text-transparent bg-clip-text bg-gradient-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, maintenance tips, and solutions for all your air conditioning needs in Dubai
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="w-full group/button">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need AC Service Right Now?
            </h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Don't wait for problems to get worse. Contact us today for fast, reliable AC repair and maintenance.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;