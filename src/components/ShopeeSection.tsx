import { useEffect, useState, useRef } from "react";

const ShopeeSection = () => {
  // Imagens do carrossel (carrossel com espaço no nome da pasta)
  const images = [
    "/carrossel%20shopee/image%201.jpeg",
    "/carrossel%20shopee/image%202.jpeg",
    "/carrossel%20shopee/image%203.jpeg",
    "/carrossel%20shopee/image%204.jpeg",
  ];
  const TRANSITION_MS = 250; // duração da animação do slide
  const INTERVAL_MS = 6000; // tempo por imagem
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !isInView) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, isInView]);
  return (
    <section id="shopee" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Layout lado a lado: imagem e texto */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Imagem à esquerda (carrossel automático) */}
          <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
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
                    className="w-full h-full object-cover object-center flex-shrink-0 rounded-xl"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Texto à direita */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F2F] tracking-tight mb-2">
              Loja Shopee Criatividade Sousa
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FA4F26] tracking-tight mb-4 animate-fade-in">
              Acompanhe nossa loja da Shopee
            </h2>
            <p className="text-base sm:text-lg text-[#3A3A3A] leading-relaxed tracking-wide max-w-xl animate-slide-up">
              Descubra produtos criativos e exclusivos na Criatividade Sousa. Sempre novidades, qualidade garantida e ofertas especiais.
            </p>

            <div className="mt-6">
              <a
                href="https://shopee.com.br/criatividadesousa#product_list"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FA4F26] hover:bg-[#E7461F] text-white rounded-lg p-3 sm:p-3.5 shadow-sm no-underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4F26]/40 min-w-[44px] min-h-[44px] transform-gpu transition-transform duration-200 ease-out hover:scale-105 focus-visible:scale-105 active:scale-105 motion-reduce:transform-none"
                aria-label="Abrir loja Shopee Criatividade Sousa"
              >
                <img src="/shopee.svg" alt="" aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopeeSection;