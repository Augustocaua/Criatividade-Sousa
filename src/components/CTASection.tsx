import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero transformar carinho em um presente inesquecível 💝");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)),transparent)] " />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)),transparent)]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-6">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              carinho
            </span>{" "}
            em presentes{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              inesquecíveis
            </span>
          </h2>
          
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg lg:text-2xl text-black mb-8 leading-relaxed">
            Cada presente é uma oportunidade de demonstrar amor, carinho e atenção. 
            Deixe-nos criar algo especial que ficará para sempre na memória de quem você ama.
          </p>

          <div data-sr="up" data-sr-duration="0.7" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-6 py-3 text-base sm:px-10 sm:py-6 sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎁 Faça seu Pedido Agora
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-medium">Online agora</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div data-sr="up" data-sr-duration="0.7" className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">✨</span>
              <span className="font-medium">Produtos Únicos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🚀</span>
              <span className="font-medium">Entrega Expressa</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">💯</span>
              <span className="font-medium">Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
