import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero transformar carinho em um presente inesquecível 💝");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
        }}
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.4),transparent)] " />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.3),transparent)]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              carinho
            </span>{" "}
            em presentes{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              inesquecíveis
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Cada presente é uma oportunidade de demonstrar amor, carinho e atenção. 
            Deixe-nos criar algo especial que ficará para sempre na memória de quem você ama.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎁 Faça seu Pedido Agora
            </Button>
            
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium">Online agora</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 animate-fade-in">
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
      </div>
    </section>
  );
};

export default CTASection;