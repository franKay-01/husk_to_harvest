import { Button } from "@/components/ui/button";
import { Handshake, TrendingUp } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Be Part of the Change
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform waste into wealth through circular resource use and sustainable mushroom production.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;