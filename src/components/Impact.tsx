import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const stats = [
    { number: "50,000+", label: "tons of CO₂ prevented annually by reducing open burning" },
    { number: "300+", label: "green jobs created in waste collection, processing, and farming" },
    { number: "20–30%", label: "more income for smallholder farmers supplying agri-waste" },
    { number: "$8M+", label: "annual revenue potential in substrates and mushrooms by Year 5" },
    { number: "100%", label: "traceable, circular supply chains aligned with global sustainability goals" }
  ];

  const partners = [
    "Ghana Ministry of Agriculture",
    "European Import Partners",
    "Local Farmer Cooperatives",
    "Sustainable Development NGOs",
    "Agricultural Universities",
    "Export Quality Certifiers"
  ];

  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Stats */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 sm:mb-12">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;