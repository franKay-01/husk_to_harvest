import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, ArrowRight, Trash2, Recycle } from "lucide-react";
import wasteCollageImage from "@/assets/agricultural-waste-collage.png";

const ProblemSolution = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6">
            Problem → Solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transforming agricultural waste from environmental burden to sustainable opportunity
          </p>
        </div>

        {/* Agricultural Waste Collage */}
        <div className="mb-12 sm:mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={wasteCollageImage}
              alt="Agricultural waste materials - rice husks, coconut husks, cocoa pods, and corn ready for transformation"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain"
            />
          </div>
          
          <div className="mt-4 text-center px-4">
            <p className="text-base sm:text-lg font-bold text-foreground mb-2">Agricultural Waste Crisis</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Rice husks, corn cobs, cocoa pods, and coconut husks dumped in the environment</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Problem Card */}
          <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5"></div>
            <CardContent className="relative p-6 sm:p-8">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-destructive/20 rounded-full mb-4 sm:mb-6 mx-auto">
                <Trash2 className="h-7 w-7 sm:h-8 sm:w-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-center text-foreground mb-3 sm:mb-4">
                The Problem
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed"><strong>18 million tonnes</strong> of crop residues generated in Ghana annually</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed"><strong>6,500+ tonnes</strong> of coconut husks dumped by Accra vendors yearly</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed"><strong>5 million tonnes</strong> of organic waste clog drains nationwide</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed"><strong>5.2 million malaria cases</strong> and 151 deaths in 2022 from poor sanitation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-center my-4 lg:my-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-medium animate-pulse rotate-90 lg:rotate-0">
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>

          {/* Solution Card */}
          <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-growth/10 to-growth/5"></div>
            <CardContent className="relative p-6 sm:p-8">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-growth/20 rounded-full mb-4 sm:mb-6 mx-auto">
                <Recycle className="h-7 w-7 sm:h-8 sm:w-8 text-growth" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-center text-foreground mb-3 sm:mb-4">
                Our Solution
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed">Convert waste into nutrient-rich substrates</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed">Reduce environmental pollution</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed">Create sustainable food production</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-growth mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm leading-relaxed">Support circular farming economy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-growth mb-2">75%</div>
            <p className="text-sm sm:text-base text-muted-foreground">Waste Reduction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-primary mb-2">90%</div>
            <p className="text-sm sm:text-base text-muted-foreground">CO₂ Emission Cut</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-earth mb-2">100%</div>
            <p className="text-sm sm:text-base text-muted-foreground">Organic Output</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;