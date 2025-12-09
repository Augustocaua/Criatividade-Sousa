import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)),transparent)]" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 data-sr="up" data-sr-stagger="chars" data-sr-duration="0.9" data-sr-ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)" data-sr-step="0.06" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent">
            Presentes que{" "}
            <span className="inline-flex whitespace-nowrap items-baseline">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Marcam
              </span>&nbsp;Momentos
            </span>
          </h1>
          
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)" data-sr-step="0.08" className="text-base sm:text-lg lg:text-2xl text-black max-w-2xl leading-relaxed">
             Presentes Personalizadas para todas as ocasiões especiais da sua vida
          </p>

          <div data-sr="up" data-sr-duration="0.7" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎁 Faça seu Pedido no WhatsApp
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {["🎨 Design Exclusivo", "💝 Presentes Únicos"].map((feature, index) => (
              <div
                key={feature}
                data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.06}
                className="bg-card border border-border px-3 py-2 rounded-full text-black font-medium text-sm sm:text-base shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/principal.jpeg"
              alt="Imagem principal do herói"
              data-sr="up" data-sr-duration="0.8"
              className="w-[180px] sm:w-[220px] md:w-[256px] lg:w-[384px] xl:w-[512px] h-auto rounded-3xl shadow-2xl"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg" data-sr="fade" data-sr-duration="0.8">
               🎁 Personalizado
             </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg" data-sr="fade" data-sr-duration="0.8">
               ❤️ Com Amor
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;