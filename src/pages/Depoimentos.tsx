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
    "/depoimentos/depoimento-1.jpeg",
    "/depoimentos/depoimento-2.jpeg",
    "/depoimentos/depoimento-3.jpeg",
    "/depoimentos/depoimento-4.jpeg",
    "/depoimentos/depoimento-5.jpeg",
    "/depoimentos/depoimento-6.jpeg",
    "/depoimentos/depoimento-7.jpeg",
  ];

  return (
    <div className="min-h-screen bg-background animated-bg">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center animate-fade-in motion-reduce:animate-none">
          <h1 className="text-4xl lg:text-6xl font-bold text-accent mb-6 animate-slide-up motion-reduce:animate-none">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clientes
            </span>{" "}
            dizem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.15s" }}>
            Mais de 500 clientes satisfeitos compartilham suas experiências com nossos presentes personalizados
          </p>
          
          {/* Estatísticas */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="group overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] sm:aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Depoimento ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto px-4 text-center animate-fade-in motion-reduce:animate-none">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6 animate-slide-up motion-reduce:animate-none">
            Quer ser o próximo cliente satisfeito?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.15s" }}>
            Junte-se a centenas de pessoas que já transformaram momentos especiais em lembranças inesquecíveis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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