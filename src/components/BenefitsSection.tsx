import { Palette, Truck, Heart, ShieldCheck } from "lucide-react";
import { useState } from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Presentes Memoráveis",
      description:
        "Transforme momentos em lembranças únicas com presentes personalizados feitos com carinho.",
      icon: Heart,
      color: "text-white", // borda branca
    },
    {
      title: "Entrega Segura",
      description:
        "Seu pedido chega com segurança e qualidade garantida, pronto para encantar.",
      icon: Truck,
      color: "text-white", // borda branca
    },
    {
      title: "Produtos Personalizados",
      description:
        "Escolha entre canecas, adesivos, quadros e muito mais. Tudo feito sob medida.",
      icon: Palette,
      color: "text-white", // borda branca
    },
    {
      title: "Compra Confiável",
      description:
        "Atendimento dedicado, pagamentos seguros e transparência em cada etapa.",
      icon: ShieldCheck,
      color: "text-white", // borda branca
    },
  ];

  const [heartAnimating, setHeartAnimating] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher a Criatividade Sousa?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isHeart = Icon === Heart;
            const isTruck = Icon === Truck;
            const containerClasses = "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-[hsl(var(--golden-beige-light))] ring-2 ring-primary/30";
            return (
              <div
                key={idx}
                className="p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {isHeart ? (
                  <div
                    onClick={() => setHeartAnimating((v) => !v)}
                    role="button"
                    tabIndex={0}
                    className={containerClasses + " cursor-pointer select-none"}
                  >
                    <Icon
                      className={`${benefit.color} ${heartAnimating ? "animate-heart-beat" : ""}`}
                      size={32}
                      fill="none" // sem preenchimento, só contorno
                    />
                  </div>
                ) : (
                  <div className={containerClasses}>
                    <Icon
                      className={`${benefit.color} ${isTruck ? "animate-truck-forward" : ""}`}
                      size={32}
                      fill="none" // sem preenchimento, só contorno
                    />
                  </div>
                )}

                {isTruck && (
                  <>
                    <span className="truck-dust truck-dust-1" />
                    <span className="truck-dust truck-dust-2" />
                    <span className="truck-dust truck-dust-3" />
                  </>
                )}

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