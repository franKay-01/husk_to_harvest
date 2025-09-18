import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8">
            MycoGrid Story
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium mb-8">
            Discover the story behind our sustainable farming movement and the founders 
            who are transforming agricultural waste into wealth.
          </p>

          <Link to="/our-story">
            <Button variant="growth" size="lg" className="group">
              Learn Our Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;