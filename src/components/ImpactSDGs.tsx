import { Card, CardContent } from "@/components/ui/card";

const ImpactSDGs = () => {
  const sdgs = [
    {
      number: "2",
      title: "Zero Hunger",
      description: "Nutritious mushroom production",
      color: "bg-yellow-500"
    },
    {
      number: "8", 
      title: "Decent Work",
      description: "Sustainable jobs and fair incomes",
      color: "bg-red-500"
    },
    {
      number: "12",
      title: "Responsible Consumption",
      description: "Circular farming and eco-products",
      color: "bg-orange-500"
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Reduced CO₂ emissions",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Our Impact & SDGs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the United Nations Sustainable Development Goals through innovative farming solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sdgs.map((sdg, index) => (
            <Card key={sdg.number} className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className={`w-16 h-16 ${sdg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-black text-white">
                    {sdg.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  SDG {sdg.number}: {sdg.title}
                </h3>
                <p className="text-muted-foreground">
                  {sdg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSDGs;