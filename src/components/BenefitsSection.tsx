import { Palette, Truck, Heart, ShieldCheck } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Design Exclusivo",
      description: "Cada produto é único, criado especialmente para você com muito carinho e criatividade"
    },
    {
      icon: Truck,
      title: "Entrega segura",
      description: "Produtos prontos com entrega segura e pontual"
    },
    {
      icon: Heart,
      title: "Presentes Memoráveis",
      description: "Criamos lembranças que ficam para sempre no coração de quem recebe"
    },
    {
      icon: ShieldCheck,
      title: "Compra Segura",
      description: "Atendimento personalizado e garantia de qualidade em todos os produtos"
    }
  ];

  return (
    <section id="sobre-nos" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Por que escolher a{" "}
            <span className="text-accent">Criatividade Sousa?</span>
          </h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black max-w-3xl mx-auto">
            Transformamos ideias em presentes únicos com qualidade e carinho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.06}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-white ${benefit.icon === Truck ? 'animate-truck-forward' : ''} ${benefit.icon === Heart ? 'animate-heart-beat' : ''}`} />
                  </div>
                  {benefit.icon === Truck && (
                    <>
                      <span className="truck-dust truck-dust-1" aria-hidden="true" />
                      <span className="truck-dust truck-dust-2" aria-hidden="true" />
                      <span className="truck-dust truck-dust-3" aria-hidden="true" />
                    </>
                  )}
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                   {benefit.title}
                 </h3>
                
                <p className="text-black leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
      </div>
    </section>
  );
};

export default BenefitsSection;