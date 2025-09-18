import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Users, Award, DollarSign } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: Recycle,
      title: "Sustainable Innovation",
      description: "Waste into mushroom substrates"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Knowledge sharing & livelihoods"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh, chemical-free organic mushrooms"
    },
    {
      icon: DollarSign,
      title: "Accessibility",
      description: "Affordable growing kits for everyone"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-growth/10 rounded-full">
                    <feature.icon className="h-8 w-8 text-growth" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;