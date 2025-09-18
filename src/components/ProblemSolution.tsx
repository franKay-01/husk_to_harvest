import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, ArrowRight, Trash2, Recycle } from "lucide-react";
import coconutWasteImage from "@/assets/realistic-coconut-waste-pollution.jpg";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Problem → Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming agricultural waste from environmental burden to sustainable opportunity
          </p>
        </div>

        {/* Environmental Impact Image */}
        <div className="mb-16 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/77eed569-1003-4b8e-a1ae-b45e7b54f946.png"
              alt="Processing coconut husks for sustainable substrate production"
              className="w-full h-64 md:h-80 object-cover"
            />
            
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-bold mb-2">Environmental Crisis</p>
              <p className="text-sm opacity-90">Coconut waste dumped in Ghana's environment</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Problem Card */}
          <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-destructive/20 rounded-full mb-6 mx-auto">
                <Trash2 className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-black text-center text-foreground mb-4">
                The Problem
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed"><strong>18 million tonnes</strong> of crop residues generated in Ghana annually</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed"><strong>6,500+ tonnes</strong> of coconut husks dumped by Accra vendors yearly</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed"><strong>5 million tonnes</strong> of organic waste clog drains nationwide</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed"><strong>5.2 million malaria cases</strong> and 151 deaths in 2022 from poor sanitation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-medium animate-pulse">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Solution Card */}
          <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-growth/10 to-growth/5"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-growth/20 rounded-full mb-6 mx-auto">
                <Recycle className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-2xl font-black text-center text-foreground mb-4">
                Our Solution
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">Convert waste into nutrient-rich substrates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">Reduce environmental pollution</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">Create sustainable food production</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">Support circular farming economy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-growth mb-2">75%</div>
            <p className="text-muted-foreground">Waste Reduction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">90%</div>
            <p className="text-muted-foreground">CO₂ Emission Cut</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-earth mb-2">100%</div>
            <p className="text-muted-foreground">Organic Output</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;