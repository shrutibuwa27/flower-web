import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlowersSection from "@/components/FlowersSection";
import BouquetsSection from "@/components/BouquetsSection";
import DecorSection from "@/components/DecorSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FlowersSection />
      <BouquetsSection />
      <DecorSection />
      <AccessoriesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;