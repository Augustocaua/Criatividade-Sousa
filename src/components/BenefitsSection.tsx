import { Palette, Truck, Heart, ShieldCheck, Check } from "lucide-react";
import { useState } from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Presentes Memoráveis",
      description:
        "Transforme momentos em lembranças únicas com presentes personalizados feitos com carinho.",
      icon: Heart,
      color: "text-white",
      id: "heart",
    },
    {
      title: "Entrega Segura",
      description:
        "Seu pedido chega com segurança e qualidade garantida, pronto para encantar.",
      icon: Truck,
      color: "text-white",
      id: "truck",
    },
    {
      title: "Produtos Personalizados",
      description:
        "Escolha entre canecas, adesivos, quadros e muito mais. Tudo feito sob medida.",
      icon: Palette,
      color: "text-white",
      id: "palette",
    },
    {
      title: "Compra Confiável",
      description:
        "Atendimento dedicado, pagamentos seguros e transparência em cada etapa.",
      icon: ShieldCheck,
      color: "text-white",
      id: "shield",
    },
  ];

  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const handleInteractionStart = (id: string) => {
    setAnimatingId(id);
  };

  const handleInteractionEnd = () => {
    setAnimatingId(null);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher a Criatividade Sousa?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isAnimating = animatingId === benefit.id;
            const containerClasses =
              "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-[hsl(var(--golden-beige-light))] ring-2 ring-primary/30 transition-transform duration-300";

            return (
              <div
                key={idx}
                className="p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onMouseEnter={() => handleInteractionStart(benefit.id)}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={() => handleInteractionStart(benefit.id)}
                onTouchEnd={handleInteractionEnd}
                onTouchCancel={handleInteractionEnd}
              >
                <div className={containerClasses}>
                  <div className="relative">
                    <Icon
                      className={`${benefit.color} transition-all duration-300 ${
                        isAnimating
                          ? benefit.id === "heart"
                            ? "animate-heart-beat"
                            : benefit.id === "truck"
                            ? "animate-truck-forward"
                            : benefit.id === "palette"
                            ? "animate-rotate-slight"
                            : ""
                          : ""
                      }`}
                      size={32}
                      fill="none"
                    />
                    {benefit.id === "shield" && (
                      <Check
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold transition-all duration-300 ${
                          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        size={16}
                        strokeWidth={4}
                      />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;