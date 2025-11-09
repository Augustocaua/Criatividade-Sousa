import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ShopeeSection from "@/components/ShopeeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="produtos">
        <ProductsSection />
      </section>
      <section id="beneficios">
        <BenefitsSection />
        <ShopeeSection />
      </section>
      <section id="contato">
        <CTASection />
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
