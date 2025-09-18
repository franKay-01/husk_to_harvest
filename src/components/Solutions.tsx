import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import brownSubstrate from "@/assets/brown-substrate-bags.jpg";
import mushroomsImage from "@/assets/fresh-mushrooms.jpg";
import communityImage from "@/assets/community-training.jpg";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Products Showcase */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Get to know our solutions
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
                <img
                  src="/lovable-uploads/77eed569-1003-4b8e-a1ae-b45e7b54f946.png"
                  alt="Processing coconut husks for sustainable substrate production"
                  className="w-full h-80 object-cover rounded-lg"
                />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-foreground mb-4">Premium Substrate Production</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our innovative process transforms coconut husks and corn cobs into 
                nutrient-rich growing medium for mushroom cultivation.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• 95% agricultural waste reduction</li>
                <li>• High-quality growing medium</li>
                <li>• Scalable production process</li>
                <li>• Consistent substrate quality</li>
              </ul>
              <Link to="/substrate-production">
                <Button variant="growth" className="group mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-left lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">Mushroom Production</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Training farmers to grow premium mushrooms using our substrate, 
                creating sustainable income and food security.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Vertical farming techniques</li>
                <li>• 300+ farmers trained</li>
                <li>• Year-round production</li>
                <li>• Export quality standards</li>
              </ul>
              <Link to="/mushroom-production">
                <Button variant="growth" className="group mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative lg:order-1">
              <img
                src={mushroomsImage}
                alt="Fresh mushrooms from sustainable farming"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mt-12">
            <div className="relative">
              <img
                src={communityImage}
                alt="Community training session for mushroom farming with diverse group of learners"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-foreground mb-4">Community Outreach & Training</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering communities through comprehensive training programs that build 
                capacity, improve nutrition, and promote sustainable livelihoods.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Capacity Building: Trains locals (especially women & youth) in mushroom farming</li>
                <li>• Affordable Nutrition: Increases access to protein-rich food</li>
                <li>• Social & Environmental Awareness: Promotes sustainable agriculture</li>
                <li>• Micro-enterprise development and climate-friendly livelihoods</li>
              </ul>
              <Link to="/community-outreach">
                <Button variant="growth" className="group mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h3 className="text-4xl font-black text-center text-foreground mb-4">
            Our Service Areas
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Find our solutions and partnerships across Ghana and expanding to international markets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold text-foreground mb-2">Local Markets</h4>
                <p className="text-muted-foreground text-sm">Accra, Kumasi, Tamale</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold text-foreground mb-2">Regional Expansion</h4>
                <p className="text-muted-foreground text-sm">West Africa Coverage</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold text-foreground mb-2">Export Markets</h4>
                <p className="text-muted-foreground text-sm">Europe & International</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="growth" size="lg">
              Find Partnership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;