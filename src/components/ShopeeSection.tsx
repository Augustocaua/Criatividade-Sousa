import { Button } from "@/components/ui/button";

const ShopeeSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
      >
        <source src="/video seção shopee.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col justify-between h-full flex-grow">
        
        {/* Top Content */}
        <div className="text-center mt-8 sm:mt-12">
          <h2 
            data-sr="up" 
            data-sr-duration="0.8" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Destaques da Shopee
          </h2>
          <p
            data-sr="fade"
            data-sr-duration="0.8"
            className="text-lg sm:text-xl text-white"
          >
            Confira alguns produtos em destaque na nossa loja da Shopee
          </p>
        </div>

        {/* Center Content */}
        <div className="text-center my-12 flex flex-col items-center justify-center flex-grow">
          <h3 
            data-sr="up" 
            data-sr-duration="0.8" 
            className="text-2xl sm:text-3xl font-semibold text-white mb-6"
          >
            Loja Shopee Criatividade Sousa
          </h3>
          <div
            data-sr="fade"
            data-sr-duration="0.8"
            className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg leading-relaxed"
          >
            <p className="text-white">Acompanhe nossa loja da Shopee.</p>
            <p className="text-white">Descubra produtos criativos e exclusivos na Criatividade Sousa.</p>
            <p className="text-white">Sempre novidades, qualidade garantida e ofertas especiais.</p>
          </div>
        </div>

        {/* Bottom Content (CTA) */}
        <div 
          data-sr="up" 
          data-sr-duration="0.8" 
          className="text-center mb-8 sm:mb-12"
        >
          <Button
            asChild
            className="bg-[#EE4D2D] hover:bg-[#d54124] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-none"
          >
            <a 
              href="https://shopee.com.br/criatividadesousa#product_list" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visitar Loja
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ShopeeSection;
