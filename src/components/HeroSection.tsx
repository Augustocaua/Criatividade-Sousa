import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]" />
      </div>

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white animate-fade-in">
            Presentes que{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Marcam
            </span>{" "}
            Momentos
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl animate-slide-up leading-relaxed">
            Canecas e Cestas de Presentes Personalizadas para todas as ocasiões especiais da sua vida
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎁 Faça seu Pedido no WhatsApp
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-slide-in-left">
            {[
              "🎨 Design Exclusivo",
              "🚚 Entrega Rápida",
              "💝 Presentes Únicos",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative">
            <img
              src={heroImage}
              alt="Canecas e Cestas Personalizadas"
              className="w-full max-w-lg h-auto rounded-3xl shadow-2xl animate-float"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              🎁 Personalizado
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full font-bold shadow-lg animate-bounce delay-1000">
              ❤️ Com Amor
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;