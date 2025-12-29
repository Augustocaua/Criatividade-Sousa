import React, { Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import ProductsSection from "@/components/ProductsSection";
// import BenefitsSection from "@/components/BenefitsSection";
// import ShopeeSection from "@/components/ShopeeSection";
// import CTASection from "@/components/CTASection";
// import WhatsAppFloat from "@/components/WhatsAppFloat";
// import Footer from "@/components/Footer";

const ProductsSection = React.lazy(() => import("@/components/ProductsSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const ShopeeSection = React.lazy(() => import("@/components/ShopeeSection"));
const CTASection = React.lazy(() => import("@/components/CTASection"));
const WhatsAppFloat = React.lazy(() => import("@/components/WhatsAppFloat"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="produtos">
        <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Carregando produtos...</div>}>
          <ProductsSection />
        </Suspense>
      </section>
      <section id="sobre-nos">
        <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Carregando benefícios...</div>}>
          <BenefitsSection />
        </Suspense>
        <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Carregando seção Shopee...</div>}>
          <ShopeeSection />
        </Suspense>
      </section>
      <section id="contato">
        <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Carregando chamada...</div>}>
          <CTASection />
        </Suspense>
      </section>
      <Suspense fallback={null}>
        <WhatsAppFloat />
      </Suspense>
      <Suspense fallback={<div className="py-10 text-center text-muted-foreground">Carregando rodapé...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
