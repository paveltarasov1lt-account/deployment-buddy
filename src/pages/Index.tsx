import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollingCarousel from "@/components/ScrollingCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Curated.Media - Supply Side Trader® | Self-Service Curation Platform</title>
        <meta
          name="description"
          content="The leading independent self-service curation platform for programmatic media buyers. Find in-market prospects, CTV packages, and drive performance."
        />
        <meta name="keywords" content="curation, programmatic, media buying, CTV, advertising, ad tech" />
        <link rel="canonical" href="https://curated.media" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeatureSection />
          <UseCasesSection />
          <HowItWorksSection />
          <ScrollingCarousel />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
