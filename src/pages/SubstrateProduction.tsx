import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Factory, Recycle, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import brownSubstrate from "@/assets/brown-substrate-bags.jpg";
import labMicroscope from "@/assets/lab-microscope-coconut-fiber.jpg";

const SubstrateProduction = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-earth">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center text-white mb-12">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Premium Substrate Production
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Converting agricultural waste into nutrient-rich growing medium for sustainable mushroom cultivation
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={brownSubstrate}
                  alt="Brown substrate materials packed and ready for mushroom cultivation"
                  className="w-full h-96 object-cover rounded-lg shadow-medium"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Transforming Waste into Wealth
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our innovative substrate production process transforms coconut husks and corn cobs—
                  typically considered agricultural waste—into premium growing medium for mushroom 
                  cultivation. This circular economy approach reduces waste while creating valuable 
                  products for sustainable farming.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Recycle className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">95% Waste Reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Factory className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Scalable Production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Quality Assurance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-growth" />
                    <span className="text-foreground font-medium">Consistent Output</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Our Production Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A carefully designed process that ensures consistent quality and optimal nutrition for mushroom growth
              </p>
            </div>

            {/* Process Flow Chart */}
            <div className="mb-16">
              <div className="bg-card rounded-lg p-8 shadow-medium">
                <h3 className="text-2xl font-bold text-foreground text-center mb-8">Production Flow</h3>
                <div className="overflow-x-auto">
                  <div className="min-w-[800px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-earth/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-earth">1</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Collection</h4>
                        <p className="text-sm text-muted-foreground">Raw Materials</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-forest">2</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Sorting</h4>
                        <p className="text-sm text-muted-foreground">Quality Control</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-growth">3</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Shredding</h4>
                        <p className="text-sm text-muted-foreground">Size Reduction</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-earth/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-earth">4</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Composting</h4>
                        <p className="text-sm text-muted-foreground">Decomposition</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-forest">8</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Distribution</h4>
                        <p className="text-sm text-muted-foreground">To Farmers</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-growth">7</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Packaging</h4>
                        <p className="text-sm text-muted-foreground">Final Product</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-earth/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-earth">6</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Sterilization</h4>
                        <p className="text-sm text-muted-foreground">Safety Process</p>
                      </div>
                      <div className="flex-shrink-0 px-4">
                        <div className="w-8 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-20 h-20 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-forest">5</span>
                        </div>
                        <h4 className="font-semibold text-foreground">Treatment</h4>
                        <p className="text-sm text-muted-foreground">pH Optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Research Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Research & Quality Control</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our state-of-the-art laboratory conducts microscopic analysis of coconut fiber structure 
                  to ensure optimal substrate composition. This scientific approach guarantees consistent 
                  quality and maximum nutrient availability for mushroom cultivation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Fiber density analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Nutrient composition testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-growth" />
                    <span className="text-foreground">Contamination screening</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={labMicroscope}
                  alt="Ultramodern laboratory with coconut husk fiber being examined under high-tech microscope for quality analysis"
                  className="w-full h-96 object-cover rounded-lg shadow-medium"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-16">
                Why Choose Our Substrate?
              </h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">Superior Nutrition</h3>
                      <p className="text-muted-foreground">
                        Our substrate provides optimal nitrogen, carbon ratios and micronutrients 
                        essential for healthy mushroom growth and high yields.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">Contamination Resistance</h3>
                      <p className="text-muted-foreground">
                        Advanced sterilization and treatment processes significantly reduce the risk 
                        of harmful bacteria and competing organisms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">Cost Effective</h3>
                      <p className="text-muted-foreground">
                        By utilizing local agricultural waste, we offer premium substrate at 
                        competitive prices while supporting the local economy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">Environmentally Friendly</h3>
                      <p className="text-muted-foreground">
                        Converting waste into valuable products reduces environmental impact 
                        while promoting circular economy principles.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/partnership">
                  <Button variant="growth" size="lg" className="mr-4">
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Back to Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubstrateProduction;