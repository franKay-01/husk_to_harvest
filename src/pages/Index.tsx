import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import ProblemSolution from "@/components/ProblemSolution";
import ProductsServices from "@/components/ProductsServices";
import Impact from "@/components/Impact";
import CallToAction from "@/components/CallToAction";
import ContactSocial from "@/components/ContactSocial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <MissionVision />
        <WhatMakesUsDifferent />
        <ProblemSolution />
        <ProductsServices />
        <Impact />
        <CallToAction />
        <ContactSocial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
