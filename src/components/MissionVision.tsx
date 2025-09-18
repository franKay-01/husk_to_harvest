import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <Card className="p-8 md:p-12 bg-gradient-forest text-white shadow-strong">
            <CardContent className="p-0">
              <h3 className="text-4xl font-black mb-6">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                We revolutionize food systems by transforming unused agricultural waste into valuable 
                products that support sustainable farming and healthier communities.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="p-8 md:p-12 bg-gradient-earth text-white shadow-strong">
            <CardContent className="p-0">
              <h3 className="text-4xl font-black mb-6">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                A world where agricultural waste powers food production, community growth, 
                and environmental sustainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;