import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Using uploaded compost/soil image

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              WHO WE ARE
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
              Sustainable Farm brings you the next generation of sustainable agriculture, 
              transforming waste into wealth through innovative mushroom farming solutions.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not your typical agribusiness
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Indeed, we stand apart. No more agricultural waste going to landfills. 
              Instead, we transform coconut husks and corn cobs into premium substrate 
              within sustainable farming ecosystems.
            </p>

            <Button variant="default" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/6a718b75-69d7-4aec-824f-38590a5e7a6d.png"
                alt="Hands holding rich, dark compost substrate material for mushroom farming"
                className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-4xl font-black text-center text-foreground mb-4">
            What Makes Our Approach Unique?
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Transform agricultural waste into valuable mushroom substrate while empowering 
            communities with sustainable farming knowledge and economic opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "95% Waste Reduction",
                description: "Converting coconut husks and corn cobs into valuable resources"
              },
              {
                title: "Community Empowerment", 
                description: "Training local farmers with new skills and sustainable practices"
              },
              {
                title: "Premium Quality",
                description: "Producing high-grade substrate for optimal mushroom cultivation"
              },
              {
                title: "Global Market Access",
                description: "Connecting African farmers to European and international markets"
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="text-center p-6 hover:shadow-medium transition-all">
                <CardContent className="p-0">
                  <h4 className="text-lg font-bold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;