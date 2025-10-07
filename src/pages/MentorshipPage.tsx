import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Users, Lightbulb, Target, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import trainingImage from "@/assets/community-training.jpg";

const MentorshipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      icon: GraduationCap,
      title: "Student Mentorship",
      description: "Guidance for students in agricultural sciences and entrepreneurship",
      features: ["Research support", "Career guidance", "Internship opportunities", "Academic projects"],
      duration: "6-12 months",
      participants: "University & Technical students"
    },
    {
      icon: Users,
      title: "Farmer Development",
      description: "Supporting smallholder farmers to adopt sustainable practices",
      features: ["Technical training", "Business skills", "Market access", "Financial literacy"],
      duration: "3-6 months",
      participants: "Smallholder farmers"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneur Support",
      description: "Nurturing agripreneurs in the circular economy space",
      features: ["Business planning", "Funding guidance", "Network access", "Market validation"],
      duration: "12-18 months",
      participants: "Agricultural entrepreneurs"
    }
  ];

  const mentorshipAreas = [
    {
      title: "Sustainable Agriculture",
      description: "Modern farming techniques and sustainable practices",
      topics: ["Vertical farming", "Organic production", "Waste recycling", "Soil health"]
    },
    {
      title: "Business Development",
      description: "Building successful agricultural enterprises",
      topics: ["Business planning", "Financial management", "Marketing strategies", "Scaling operations"]
    },
    {
      title: "Technology Innovation",
      description: "Leveraging technology in agriculture",
      topics: ["Farm automation", "Data analytics", "IoT applications", "Digital marketing"]
    },
    {
      title: "Research & Development",
      description: "Scientific research in agricultural sciences",
      topics: ["Research methodology", "Data analysis", "Publication writing", "Grant applications"]
    }
  ];

  const mentorProfiles = [
    {
      name: "Mr. Eben Amankwa",
      role: "Lead Agricultural Scientist",
      expertise: "Mushroom cultivation, Substrate development, Circular farming",
      experience: "15+ years in sustainable agriculture"
    },
    {
      name: "Ms. Fidelia Amankwa",
      role: "Business Development Lead",
      expertise: "Agricultural entrepreneurship, Market development, Community engagement",
      experience: "12+ years in agribusiness"
    }
  ];

  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Agricultural Student, UG",
      quote: "The mentorship program helped me understand practical applications of sustainable farming. I'm now starting my own mushroom farm!",
      program: "Student Mentorship"
    },
    {
      name: "Akosua Mensah",
      role: "Smallholder Farmer",
      quote: "Thanks to the training, I've increased my income by 250% and reduced waste on my farm. The support was incredible.",
      program: "Farmer Development"
    },
    {
      name: "Joseph Oppong",
      role: "Agripreneur",
      quote: "The business guidance and network access helped me secure funding and scale my bio-fertilizer business to 3 regions.",
      program: "Entrepreneur Support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to What We Do
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                  <span className="text-accent">Mentorship</span> Programs
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Empowering the next generation of agricultural leaders, entrepreneurs, and sustainable farming advocates across Ghana.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={trainingImage} 
                  alt="Mentorship and training session" 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-3 sm:p-4 rounded-lg shadow-medium">
                  <div className="text-xl sm:text-2xl font-black">500+</div>
                  <div className="text-xs sm:text-sm">Mentees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Our Mentorship Programs
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    
                    <div className="space-y-3">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-accent">For: {program.participants}</div>
                      </div>
                      
                      <div className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">• {feature}</div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              Areas of Mentorship
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mentorshipAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {area.topics.map((topic, idx) => (
                        <div key={idx} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                          {topic}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Application Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-black text-center text-foreground mb-12">
              How to Apply
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-bold text-foreground mb-2">Apply Online</h4>
                  <p className="text-muted-foreground text-sm">Submit your application with goals and background</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-bold text-foreground mb-2">Interview</h4>
                  <p className="text-muted-foreground text-sm">Brief interview to understand your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-bold text-foreground mb-2">Matching</h4>
                  <p className="text-muted-foreground text-sm">Paired with the right mentor and program</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-bold text-foreground mb-2">Start Journey</h4>
                  <p className="text-muted-foreground text-sm">Begin your mentorship experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MentorshipPage;