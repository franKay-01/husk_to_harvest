import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import fallbackHero from "@/assets/vertical-mushroom-farm-hero-updated.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/856c4d3b-12ca-4e43-8081-7623a1f2827e.png"
          alt="Sustainable mushroom farming using coconut husks and corn cob substrates"
          className="w-full h-full object-cover"
          onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (img.dataset.fallback === '1') return; img.src = fallbackHero; img.dataset.fallback = '1'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-growth-glow rounded-full animate-pulse-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-earth-light rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-growth/50 rounded-full animate-bounce-slow opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          {/* Enhanced headline with better typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] mb-6 tracking-tight drop-shadow-2xl">
            TURNING
            <br />
            <span className="bg-gradient-to-r from-growth-glow to-earth-light bg-clip-text text-transparent drop-shadow-2xl" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
              WASTE
            </span>
            <br />
            INTO WEALTH
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 font-medium leading-relaxed max-w-2xl drop-shadow-xl bg-black/20 backdrop-blur-sm rounded-lg p-4">
            Transforming agricultural waste into premium sustainable mushrooms through innovative farming, fueling jobs, food security and climate action.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;