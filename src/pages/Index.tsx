import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSection from "@/components/TechSection";
import ImpactSection from "@/components/ImpactSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <TechSection />
      <ImpactSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
