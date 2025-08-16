import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Heart, Star } from "lucide-react";

const Fanpage = () => {
  const fanpages = [
    {
      name: "KLARISSENATICS OFFICIAL",
      platform: "Facebook",
      followers: "Fan Community",
      description: "Official fan page for Klarissenatics - devoted fans of Klarisse de Guzman",
      link: "https://www.facebook.com/share/1BB7Ms5YxQ/",
      icon: "📘",
      color: "bg-blue-500"
    },
    {
      name: "KLARISSENATICS OFFICIAL",
      platform: "Instagram",
      followers: "Fan Community",
      description: "Follow the official Klarissenatics community on Instagram",
      link: "https://www.facebook.com/share/1BB7Ms5YxQ/",
      icon: "📸",
      color: "bg-pink-500"
    },
    {
      name: "@KLARISSEnatics_",
      platform: "Twitter/X",
      followers: "Fan Community",
      description: "Official Twitter account for Klarissenatics fan community",
      link: "https://x.com/KLARISSEnatics_?t=yi1BxfMkRQxv9RTXCukr2w&s=09",
      icon: "🐦",
      color: "bg-sky-500"
    },
    {
      name: "KLANGOTS OFFICIAL",
      platform: "Facebook",
      followers: "Fan Community",
      description: "Official fan page for Klangots - another amazing fan community",
      link: "https://www.facebook.com/share/1DzuSVjNAF/",
      icon: "📘",
      color: "bg-blue-600"
    },
    {
      name: "KLANGOTS OFFICIAL",
      platform: "Instagram",
      followers: "Fan Community",
      description: "Follow the official Klangots community on Instagram",
      link: "https://www.facebook.com/share/1DzuSVjNAF/",
      icon: "📸",
      color: "bg-pink-600"
    },
    {
      name: "@theklangots",
      platform: "Twitter/X",
      followers: "Fan Community",
      description: "Official Twitter account for Klangots fan community",
      link: "https://x.com/theklangots?t=yP1vgOIB5hqdKI8ieoBaHw&s=09",
      icon: "🐦",
      color: "bg-sky-600"
    }
  ];

  return (
    <section id="fanpages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Official <span className="text-gradient">Fan Communities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the amazing fan communities dedicated to Klarisse de Guzman! Connect with fellow fans and stay updated.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-primary mr-2" />
            </div>
            <div className="text-3xl font-bold text-foreground">2</div>
            <div className="text-sm text-muted-foreground">Fan Communities</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
            </div>
            <div className="text-3xl font-bold text-foreground">Active</div>
            <div className="text-sm text-muted-foreground">Community</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
            </div>
            <div className="text-3xl font-bold text-foreground">Dedicated</div>
            <div className="text-sm text-muted-foreground">Fans</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <ExternalLink className="h-8 w-8 text-accent mr-2" />
            </div>
            <div className="text-3xl font-bold text-foreground">6</div>
            <div className="text-sm text-muted-foreground">Platforms</div>
          </div>
        </div>

        {/* Fanpages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fanpages.map((fanpage, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Platform Icon and Name */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${fanpage.color} rounded-lg flex items-center justify-center min-w-[52px] min-h-[52px]`}>
                      <span className="text-2xl">{fanpage.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {fanpage.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground">{fanpage.name}</p>
                    </div>
                  </div>

                  {/* Community Type */}
                  <div className="text-center py-2">
                    <div className="text-lg font-bold text-primary mb-1">
                      {fanpage.followers}
                    </div>
                    <div className="text-sm text-muted-foreground">Official Fan Page</div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fanpage.description}
                  </p>

                  {/* Follow Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all"
                    onClick={() => window.open(fanpage.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Follow on {fanpage.platform}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Join the Fan Communities</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with fellow fans from around the world through these official fan communities. 
              Share your love for Klarisse's music and stay updated with fan activities and events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => window.open('https://www.facebook.com/share/1BB7Ms5YxQ/', '_blank')}
              >
                Join Klarissenatics
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => window.open('https://www.facebook.com/share/1DzuSVjNAF/', '_blank')}
              >
                Join Klangots
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fanpage;