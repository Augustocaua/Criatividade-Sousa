import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/carrossel shopee/image 1.jpeg",
  "/carrossel shopee/image 2.jpeg",
  "/carrossel shopee/image 3.jpeg",
  "/carrossel shopee/image 4.jpeg",
].map((p) => encodeURI(p));

const TRANSITION_MS = 3500; // tempo entre trocas

const ShopeeSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const images = IMAGES;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, TRANSITION_MS);
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <section id="shopee" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">Destaques da Shopee</h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black">Confira alguns produtos em destaque na nossa loja da Shopee</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Imagem à esquerda (carrossel automático) */}
          <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            data-sr="up" data-sr-duration="0.8"
            className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 w-full sm:max-w-md lg:max-w-lg aspect-[4/3] mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              {/* Slide horizontal: track com translateX */}
              <div
                className="h-full w-full flex transition-transform ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)`, transitionDuration: `${TRANSITION_MS}ms` }}
              >
                {images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Carrossel Shopee Criatividade Sousa"
                    className="w-full h-full object-cover object-center flex-shrink-0 rounded-xl animate-fade-in"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Texto à direita */}
          <div className="text-center lg:text-left">
            <h3 data-sr="up" data-sr-duration="0.8" className="text-2xl sm:text-3xl font-bold text-[#2F2F2F] tracking-tight mb-2 lg:text-center">
            -              Loja Shopee Criatividade Sousa
            +              Loja Shopee <span className="text-accent">Criatividade Sousa</span>
            </h3>
            <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FA4F26] tracking-tight mb-4">
              Acompanhe nossa loja da Shopee
            </h2>
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-[#3A3A3A] leading-relaxed tracking-wide max-w-xl">
              Descubra produtos criativos e exclusivos na Criatividade Sousa. Sempre novidades, qualidade garantida e ofertas especiais.
            </p>

            <div data-sr="up" data-sr-duration="0.7" className="mt-6 flex justify-center lg:justify-center">
              <a
                href="https://shopee.com.br/criatividadesousa#product_list"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4D2D] hover:bg-[#d54124] text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition"
              >
                Visitar Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopeeSection;