import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Leaf, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mushroomImage from "@/assets/fresh-mushrooms.jpg";
import verticalFarmImage from "/lovable-uploads/6ec91040-8624-46ee-8ea0-c8127ec9ed3a.png";

const FreshMushrooms = () => {
  const benefits = [
    "100% Organic & Chemical-Free",
    "Rich in Protein & Nutrients", 
    "Sustainably Grown",
    "Fresh Daily Harvest",
    "Supporting Local Economy"
  ];

  const varieties = [
    {
      name: "Oyster Mushrooms",
      description: "High in protein, vitamins B and D, perfect for soups and stir-fries",
      nutrients: "20% protein, rich in potassium"
    },
    {
      name: "Shiitake Mushrooms", 
      description: "Immune-boosting properties, earthy flavor, great for medicinal uses",
      nutrients: "Rich in selenium, copper, and B vitamins"
    },
    {
      name: "Button Mushrooms",
      description: "Versatile cooking mushroom, mild flavor, high in antioxidants",
      nutrients: "Low calories, high in riboflavin"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-growth/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                  Fresh <span className="text-growth">Mushrooms</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Organic, nutrient-rich mushrooms grown using state-of-the-art vertical farming and precision agriculture techniques.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={mushroomImage} 
                  alt="Fresh organic mushrooms" 
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-growth text-white p-4 rounded-lg shadow-medium">
                  <div className="text-2xl font-black">100%</div>
                  <div className="text-sm">Organic</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Why Choose Our Mushrooms?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-growth" />
                      <h3 className="text-lg font-bold text-foreground">{benefit}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Varieties Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Our Mushroom Varieties
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {varieties.map((variety, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-foreground mb-3">{variety.name}</h3>
                    <p className="text-muted-foreground mb-4">{variety.description}</p>
                    <div className="text-sm text-growth font-semibold">{variety.nutrients}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Growing Process Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-foreground mb-6">
                  Precision Vertical Farming
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our mushrooms are grown in controlled vertical farm environments using sustainable substrates made from agricultural waste. This ensures consistent quality, maximum nutrition, and minimal environmental impact.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Leaf className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Climate-controlled growing chambers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Zero pesticides or chemicals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Energy-efficient LED lighting</span>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src={verticalFarmImage} 
                  alt="Vertical mushroom farming facility" 
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-growth text-white text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the superior taste and nutrition of our sustainably grown mushrooms.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreshMushrooms;