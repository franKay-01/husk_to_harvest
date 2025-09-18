import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sprout, Beaker, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsServices = () => {
  const products = [
    {
      icon: ShoppingCart,
      title: "Fresh Mushrooms",
      description: "Organic and chemical-free grown using state of the art vertical farms and precision farming",
      color: "bg-growth/10 text-growth",
      link: "/fresh-mushrooms"
    },
    {
      icon: Sprout,
      title: "Sustainable Substrates",
      description: "Ready-to-use coir and maize-based substrates",
      color: "bg-earth/10 text-earth",
      link: "/sustainable-substrates"
    },
    {
      icon: Beaker,
      title: "Bio-fertilizers",
      description: "Compost and leftover substrates turned into soil nutrients",
      color: "bg-forest/10 text-forest",
      link: "/bio-fertilizers"
    },
    {
      icon: GraduationCap,
      title: "Mentorship",
      description: "Supporting farmers, entrepreneurs, and students",
      color: "bg-accent/10 text-accent",
      link: "/mentorship"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            What we Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Link key={product.title} to={product.link}>
              <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className={`p-3 rounded-lg inline-flex ${product.color}`}>
                      <product.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsServices;