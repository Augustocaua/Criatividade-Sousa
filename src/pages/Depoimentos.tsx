import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";

const Depoimentos = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi os depoimentos e gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  const galleryImages = [
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.19_28dad750-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.19_e0cfb71c-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.19_e24ada3b-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.19_f5304b10-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.20_8e035176-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.20_914a0751-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.20_e00a3e1e-convertido-de-jpg.jpeg",
    "/depoimentos/Imagem do WhatsApp de 2025-11-03 à(s) 22.52.25_32c1fe1b-convertido-de-jpg.jpeg",
  ];

  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Header fixo apenas na primeira seção */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="sticky top-0 z-50">
          <Header stickyInSection />
        </div>
        <div className="container mx-auto px-4 text-center">
           <h1 data-sr="up" data-sr-duration="0.9" className="text-4xl lg:text-6xl font-bold text-accent mb-6">
             O que nossos{" "}
             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
               clientes
             </span>{" "}
             dizem
           </h1>
           <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-xl text-black max-w-3xl mx-auto mb-8">
             Clientes satisfeitos compartilham suas experiências com nossos presentes personalizados
           </p>
           


         </div>
       </section>

      {/* Depoimentos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((rawSrc, index) => {
              const src = encodeURI(rawSrc);
              return (
                <div
                  key={rawSrc}
                  data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.06}
                  className="group overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] sm:aspect-[4/3]">
                    <img
                      src={src}
                      alt={`Depoimento ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      width="900"
                      height="1200"
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl lg:text-4xl font-bold text-accent mb-6">
            Quer ser o próximo cliente satisfeito?
          </h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que já transformaram <span className="whitespace-nowrap">momentos especiais</span> em lembranças inesquecíveis
          </p>
          
          <div data-sr="up" data-sr-duration="0.7" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-8 py-4 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎁 Faça seu Pedido Agora
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span className="font-medium">Produtos Únicos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-medium">Entrega Expressa</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💯</span>
              <span className="font-medium">Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Depoimentos;