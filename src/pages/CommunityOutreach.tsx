import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, BookOpen, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communityImage from "@/assets/community-training.jpg";

const CommunityOutreach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center text-white mb-12">
              <Link to="/#products" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to What we do
              </Link>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Community Outreach & Training
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Empowering communities through education, nutrition, and sustainable livelihood programs
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={communityImage}
                  alt="Community training session with diverse group of participants learning mushroom farming"
                  className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-lg shadow-medium"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Building Stronger Communities
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our community outreach programs focus on holistic development through education, 
                  nutrition improvement, and sustainable livelihood creation. We believe in empowering 
                  communities, especially women and youth, with knowledge and skills that create 
                  lasting positive change.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Community Focus</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Nutrition Improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Capacity Building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sprout className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Sustainable Livelihoods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Our Community Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive programs designed to address multiple aspects of community development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-earth/20 rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="h-8 w-8 text-earth" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Capacity Building Programs</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide comprehensive training programs that build local capacity in mushroom 
                    farming, business management, and sustainable agriculture practices.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Technical skills training in mushroom cultivation</li>
                    <li>• Business development and entrepreneurship</li>
                    <li>• Financial literacy and record keeping</li>
                    <li>• Leadership development for women and youth</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-forest" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nutrition & Food Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Our programs improve access to protein-rich food while educating communities 
                    about nutrition and healthy eating practices.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Affordable access to fresh mushrooms</li>
                    <li>• Nutrition education workshops</li>
                    <li>• School feeding program support</li>
                    <li>• Community garden initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-growth/20 rounded-full flex items-center justify-center mb-6">
                    <Sprout className="h-8 w-8 text-growth" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Environmental Awareness</h3>
                  <p className="text-muted-foreground mb-4">
                    We promote environmental consciousness and sustainable practices that protect 
                    natural resources for future generations.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Waste reduction and recycling education</li>
                    <li>• Climate-smart agriculture training</li>
                    <li>• Tree planting and conservation programs</li>
                    <li>• Renewable energy awareness</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Micro-Enterprise Development</h3>
                  <p className="text-muted-foreground mb-4">
                    We support the creation of small businesses and cooperatives that provide 
                    sustainable income opportunities for community members.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Cooperative formation and management</li>
                    <li>• Market linkage and value chain support</li>
                    <li>• Access to microfinance and credit</li>
                    <li>• Product development and marketing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-16">
                Community Impact
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-8 text-center bg-earth/10">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-earth mb-2">1000+</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">People Reached</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct beneficiaries across our community programs
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 text-center bg-forest/10">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-forest mb-2">75%</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Women & Youth</h3>
                    <p className="text-sm text-muted-foreground">
                      Percentage of program participants who are women and youth
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 text-center bg-growth/10">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-growth mb-2">15</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Active communities participating in our programs
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Program Outcomes
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Social Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Improved household nutrition and food security</li>
                      <li>• Enhanced community cohesion and cooperation</li>
                      <li>• Increased leadership roles for women and youth</li>
                      <li>• Greater environmental awareness and action</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Economic Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• New income streams for households</li>
                      <li>• Reduced dependency on external food sources</li>
                      <li>• Increased savings and financial literacy</li>
                      <li>• Job creation in rural areas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/partnership">
                  <Button variant="growth" size="lg" className="mr-4">
                    Get Involved
                  </Button>
                </Link>
                <Link to="/#products">
                  <Button variant="outline" size="lg">
                    Back to What we do
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityOutreach;