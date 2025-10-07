import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Zap, Thermometer, Droplets, BarChart3, Cpu, Layers, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mushroomsImage from "@/assets/fresh-mushrooms.jpg";

const MushroomProduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-forest">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center text-white mb-12">
              <Link to="/#products" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to What we do
              </Link>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Climate Smart Mushroom Production
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Revolutionary vertical hydroponic systems maximizing yield through controlled environment agriculture and IoT technology
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Advanced Vertical Hydroponic Systems
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our state-of-the-art vertical hydroponic mushroom farms utilize precision-controlled 
                  environments with automated climate systems, IoT sensors, and AI-driven optimization. 
                  This technology maximizes yield per square meter while minimizing water usage and 
                  environmental impact through year-round production capabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Layers className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Vertical Growing Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Hydroponic Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">IoT Climate Control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TreePine className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Carbon Negative Farming</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={mushroomsImage}
                  alt="High-tech vertical mushroom farm with hydroponic growing systems and climate control"
                  className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Program Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Climate Smart Technology Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Advanced automation and monitoring systems ensure optimal growing conditions while maximizing resource efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="h-8 w-8 text-earth" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Climate Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Precision temperature and humidity control with automated ventilation systems for optimal mushroom growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-forest" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Hydroponic Nutrition</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced nutrient delivery systems providing optimal mineral balance with 90% water efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-growth" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">IoT Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time sensor networks monitoring air quality, CO2 levels, and growth parameters.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">AI Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Machine learning algorithms optimize growth cycles and predict harvest timing for maximum yield.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-16">
                Performance Metrics & Sustainability
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-8 text-center">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-growth mb-2">500%</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Yield Increase</h3>
                    <p className="text-sm text-muted-foreground">
                      Higher productivity per square meter compared to traditional farming methods
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 text-center">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-growth mb-2">90%</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Water Savings</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduced water consumption through recirculating hydroponic systems
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 text-center">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-growth mb-2">365</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Days Production</h3>
                    <p className="text-sm text-muted-foreground">
                      Year-round harvesting capabilities independent of weather conditions
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Climate Smart Advantages
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Environmental Benefits</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Carbon negative production methods</li>
                      <li>• 90% reduction in water usage</li>
                      <li>• Zero agricultural runoff</li>
                      <li>• Minimal land footprint</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Technology & Efficiency</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• AI-optimized growing conditions</li>
                      <li>• Automated harvesting systems</li>
                      <li>• Real-time quality monitoring</li>
                      <li>• Predictive maintenance alerts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/partnership">
                  <Button variant="growth" size="lg" className="mr-4">
                    Explore Technology
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

export default MushroomProduction;