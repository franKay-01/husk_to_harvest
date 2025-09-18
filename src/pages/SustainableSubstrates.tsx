import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Recycle, Leaf, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatermarkCleaner from "@/components/WatermarkCleaner";
import substrateImage from "/lovable-uploads/8ecdf72a-3ab1-4e63-a215-fd847283e3e6.png";
import materialImage from "@/assets/substrate-materials.jpg";
import fineSubstrate from "@/assets/packed-substrates-fine.jpg";
import texturedSubstrate from "@/assets/packed-substrates-textured.jpg";
import ultrafineSubstrate from "@/assets/packed-substrates-ultrafine.jpg";

const SustainableSubstrates = () => {
  const benefits = [
    "Made from Agricultural Waste",
    "Nutrient-Rich Formula",
    "Ready-to-Use Packaging",
    "Consistent Quality",
    "Environmentally Friendly"
  ];

  const substrates = [
    {
      name: "Fine Coir Substrate",
      image: fineSubstrate,
      description: "Premium coconut coir blend perfect for oyster and shiitake mushrooms",
      features: ["pH balanced", "High water retention", "Sterile processing"]
    },
    {
      name: "Textured Maize Substrate", 
      image: texturedSubstrate,
      description: "Corn-based substrate ideal for gourmet mushroom varieties",
      features: ["Rich in nutrients", "Excellent aeration", "Fast colonization"]
    },
    {
      name: "Rice and Cocoa Blend",
      image: ultrafineSubstrate, 
      description: "Specialized rice husk and cocoa waste mixture for premium mushroom varieties",
      features: ["Ultra-fine texture", "Enhanced nutrition", "Premium quality"]
    }
  ];

  const process = [
    {
      icon: Recycle,
      title: "Waste Collection",
      description: "We collect coconut husks and maize waste from local vendors and farmers"
    },
    {
      icon: Leaf,
      title: "Processing",
      description: "Organic waste is processed, sterilized, and enriched with nutrients"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Ready-to-use substrates are packaged in sterile, eco-friendly materials"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-earth/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                  Sustainable <span className="text-earth">Substrates</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Premium growing media made from agricultural waste, providing the perfect foundation for mushroom cultivation.
                </p>
              </div>
              
              <div className="relative">
                <WatermarkCleaner 
                  originalImagePath={substrateImage} 
                  alt="Sustainable mushroom substrates" 
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-earth text-white p-4 rounded-lg shadow-medium">
                  <div className="text-2xl font-black">100%</div>
                  <div className="text-sm">Sustainable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Why Our Substrates?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-earth" />
                      <h3 className="text-lg font-bold text-foreground">{benefit}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Varieties */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Our Substrate Range
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {substrates.map((substrate, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={substrate.image} 
                      alt={substrate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{substrate.name}</h3>
                    <p className="text-muted-foreground mb-4">{substrate.description}</p>
                    <div className="space-y-2">
                      {substrate.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-earth" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              From Waste to Wonder
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-earth/20 rounded-full mb-6 mx-auto">
                      <step.icon className="h-8 w-8 text-earth" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Source Materials */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={materialImage} 
                  alt="Raw substrate materials" 
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
              
              <div>
                <h2 className="text-4xl font-black text-foreground mb-6">
                  Premium Source Materials
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our substrates are made from carefully selected agricultural waste materials, ensuring optimal nutrition and growing conditions for mushrooms while supporting circular economy principles.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-earth mt-0.5" />
                    <div>
                      <strong className="text-foreground">Coconut Coir:</strong>
                      <span className="text-muted-foreground ml-2">High water retention and excellent structure</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-earth mt-0.5" />
                    <div>
                      <strong className="text-foreground">Maize Residues:</strong>
                      <span className="text-muted-foreground ml-2">Rich in nutrients and organic matter</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-earth mt-0.5" />
                    <div>
                      <strong className="text-foreground">Natural Additives:</strong>
                      <span className="text-muted-foreground ml-2">pH balancers and growth enhancers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-earth text-white text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black mb-6">
              Start Growing Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get premium substrates delivered to your farm and start your sustainable mushroom cultivation journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request Quote
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-earth" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SustainableSubstrates;