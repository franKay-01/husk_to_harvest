import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Lightbulb, Heart } from "lucide-react";
import { useEffect } from "react";

const OurStoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const founders = [
    {
      name: "Ebenezer Tuah",
      role: "Founder",
      description: "An education professional and community advocate with over four years of teaching and program coordination experience. Holding a Master's degree in Development Studies from Erasmus University Rotterdam, he specialized in governance and local development strategies. Driven by sustainability and innovation, passionate about creating values from unused resources, he has led research and practical trials for the past three years on transforming agricultural waste—coconut husks, rice husks, and corn cobs—into high-value substrates for mushroom farming. His lifelong farming background and academic expertise position him at the intersection of education, sustainability, and agritech innovation."
    },
    {
      name: "Fidelia Owusu Konadu", 
      role: "Co-Founder",
      description: "A passionate advocate for equality, justice, anti-corruption, and conflict resolution, with a strong track record of driving social impact through research and community-focused innovation. With expertise spanning advocacy, governance, and social policy, Fidelia brings a people-centered perspective to MycoGrid's mission. She is particularly driven by the belief that sustainability must go hand in hand with social justice, championing models that create equitable opportunities for women, youth, and underserved communities while reducing environmental harm."
    },
    {
      name: "Obeng Owusu",
      role: "Chief Executive Officer", 
      description: "An entrepreneur and strategist with over a decade of experience in building and scaling ventures across finance, digital platforms, and agritech. His career has been shaped by leading initiatives that mobilize capital for underserved communities, strengthen small businesses, and create inclusive pathways for growth. With a strong background in managing impact-driven funds and developing innovative business solutions, he brings a results-oriented approach to enterprise building. Obeng's expertise lies in combining financial acumen with sustainable development strategies, enabling him to design models that are both commercially viable and socially impactful. At MycoGrid, he is responsible for strategy, partnerships, and scaling operations, ensuring the enterprise delivers on its vision of transforming agricultural waste into wealth through circular economy innovation."
    }
  ];

  const milestones = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We began by experimenting with how agricultural residues could be converted into substrates that boost mushroom yields and reduce waste."
    },
    {
      icon: Heart,
      title: "From Waste to Wealth",
      description: "What started as trials with coconut husks and maize cobs has grown into a scalable solution with global export potential."
    },
    {
      icon: Users,
      title: "Impact at the Core",
      description: "Our model creates food security, new incomes for farmers, and jobs across the value chain — while protecting the planet."
    },
    {
      icon: GraduationCap,
      title: "The Bigger Mission",
      description: "Through our circular approach, we're proving that sustainable agribusiness can power both prosperity and environmental protection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                MycoGrid Story
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 shadow-medium mb-16">
                <CardContent className="p-0">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">
                    About Us
                  </h2>
                  
                  {/* Who We Are */}
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Who We Are
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      MycoGrid is a social enterprise that converts coconut husks, maize cobs, and rice husks into premium mushroom substrates and mushrooms. Guided by circular economy principles, we create solutions where nothing is wasted, generating value for farmers, communities, and global markets.
                    </p>
                  </div>

                  {/* Our Vision */}
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Our Vision
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      We see a world where waste fuels growth. By turning farm residues into food, income, and climate solutions, MycoGrid is proving that circular economy is the future of fair and sustainable trade.
                    </p>
                  </div>

                  {/* Our Mission */}
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Our Mission
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      We transform agricultural waste into wealth by producing high-quality substrates and mushrooms. In doing so, we create jobs, increase farmer incomes, improve food security, and deliver sustainable, traceable products to the world.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Movement Behind the Mission */}
              <Card className="p-8 md:p-12 shadow-medium">
                <CardContent className="p-0">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
                    The Movement Behind the Mission
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    MycoGrid was founded on a simple but powerful idea: waste should never be wasted. By transforming coconut husks, maize cobs, and rice husks into premium substrates and mushrooms, we are creating food, livelihoods, and climate solutions from resources that once went unused.
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Our Founders
                  </h3>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    MycoGrid is led by a team of changemakers committed to circular innovation and social impact.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {founders.map((founder, index) => (
                      <Card key={founder.name} className="p-6 bg-muted/30">
                        <CardContent className="p-0">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {founder.name}
                          </h3>
                          <p className="text-growth font-semibold mb-3">
                            {founder.role}
                          </p>
                          <p className="text-muted-foreground">
                            {founder.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey Milestones */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-4">
                🌱 Our Journey
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {milestones.map((milestone, index) => (
                  <Card key={milestone.title} className="p-6 hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <div className="p-3 bg-growth/10 rounded-lg inline-flex">
                          <milestone.icon className="h-6 w-6 text-growth" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Looking Forward
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our story is just beginning. Every day, we're working to expand our impact, 
                reach more communities, and prove that sustainable agriculture isn't just possible—it's profitable, 
                scalable, and essential for our planet's future.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurStoryPage;