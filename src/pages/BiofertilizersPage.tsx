import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Leaf, Sprout, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import substrateImage from "@/assets/brown-substrate-bags.jpg";

const BiofertilizersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "100% Organic Composition",
    "Improves Soil Structure", 
    "Increases Water Retention",
    "Boosts Plant Immunity",
    "Zero Chemical Residues"
  ];

  const products = [
    {
      name: "Mushroom Substrate Compost",
      description: "Nutrient-rich compost made from spent mushroom substrates",
      benefits: ["High in nitrogen", "Improves soil texture", "Long-lasting nutrition"],
      npk: "N-P-K: 2.5-1.8-2.1"
    },
    {
      name: "Coconut Coir Fertilizer",
      description: "Processed coconut waste enriched with beneficial microorganisms",
      benefits: ["Excellent water retention", "pH neutral", "Disease suppression"],
      npk: "N-P-K: 1.2-0.8-1.5"
    },
    {
      name: "Mixed Organic Blend",
      description: "Premium blend of various agricultural waste composts",
      benefits: ["Balanced nutrition", "Slow-release formula", "Soil conditioning"],
      npk: "N-P-K: 3.0-2.2-2.8"
    }
  ];

  const applications = [
    {
      icon: Sprout,
      title: "Crop Production",
      description: "Ideal for vegetables, grains, and cash crops",
      usage: "Apply 2-3 tons per hectare"
    },
    {
      icon: Leaf,
      title: "Garden & Landscaping", 
      description: "Perfect for gardens, lawns, and ornamental plants",
      usage: "Mix 30% with existing soil"
    },
    {
      icon: Zap,
      title: "Soil Restoration",
      description: "Rehabilitate degraded and nutrient-poor soils",
      usage: "Apply 4-5 tons per hectare"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-forest/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to What We Do
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                  Bio-<span className="text-forest">fertilizers</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your soil with our organic bio-fertilizers made from composted agricultural waste and spent mushroom substrates.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/22bac8be-ab4c-4fc1-9829-fa25450ee2b0.png"
                  alt="Processing organic substrates for bio-fertilizer production"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-forest text-white p-3 sm:p-4 rounded-lg shadow-medium">
                  <div className="text-xl sm:text-2xl font-black">Zero</div>
                  <div className="text-xs sm:text-sm">Chemicals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Why Choose Bio-fertilizers?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-forest" />
                      <h3 className="text-lg font-bold text-foreground">{benefit}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Our Bio-fertilizer Range
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="bg-forest/10 p-3 rounded-lg mb-4">
                      <div className="text-sm font-semibold text-forest">{product.npk}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-forest" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Applications & Usage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-forest/20 rounded-full mb-6 mx-auto">
                      <app.icon className="h-8 w-8 text-forest" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
                    <p className="text-muted-foreground mb-4">{app.description}</p>
                    <div className="bg-forest/10 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-forest">{app.usage}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-foreground mb-6">
                Environmental Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our bio-fertilizers contribute to sustainable agriculture while reducing environmental pollution
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-forest mb-2">500+</div>
                <p className="text-muted-foreground">Tonnes of Waste Recycled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-growth mb-2">60%</div>
                <p className="text-muted-foreground">Soil Health Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-earth mb-2">80%</div>
                <p className="text-muted-foreground">Reduced Chemical Use</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">45%</div>
                <p className="text-muted-foreground">Water Retention Increase</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default BiofertilizersPage;