import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <h1
            data-sr="up"
            data-sr-duration="1.0"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg"
          >
            Presentes que Marcam
            <span className="block text-primary-foreground mt-2">Momentos Inesquecíveis</span>
          </h1>
          <p
            data-sr="up"
            data-sr-delay="0.2"
            data-sr-duration="1.0"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md"
          >
            Presentes personalizados para todas as ocasiões especiais da sua vida
          </p>
          <div
            data-sr="up"
            data-sr-delay="0.4"
            data-sr-duration="1.0"
            className="flex flex-col items-center gap-6 mt-8"
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-lg sm:text-xl rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[300px]"
            >
              🎁 Faça seu Pedido no WhatsApp
            </Button>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white font-semibold text-base sm:text-lg">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <span>🎨</span>
                <span>Design Exclusivo</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <span>💝</span>
                <span>Presentes Únicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
