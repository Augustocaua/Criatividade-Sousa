
const ShopeeSection = () => {
  return (
    <section id="shopee" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Title & Subtitle */}
          <div className="space-y-4 mb-10 sm:mb-16">
            <h2
              data-sr="up"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
            >
              Destaques da Shopee
            </h2>
            <p
              data-sr="fade"
              className="text-lg sm:text-xl text-black max-w-2xl mx-auto"
            >
              Confira alguns produtos em destaque na nossa loja da Shopee
            </p>
          </div>

          {/* Immersive Video Container */}
          <div
            data-sr="fade"
            className="relative w-[95%] md:w-[80%] mb-12 sm:mb-16"
          >
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={encodeURI("/video seção shopee.mp4")} type="video/mp4" />
            </video>
          </div>

          {/* Bottom Content */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h3
              data-sr="up"
              className="text-2xl sm:text-3xl font-bold !text-[#D4AA6E]"
            >
              Loja Shopee Criatividade Sousa
            </h3>
            <p
              data-sr="fade"
              className="text-lg text-black max-w-2xl mx-auto leading-relaxed"
            >
              Acompanhe nossa loja da Shopee. Descubra produtos criativos e
              exclusivos na Criatividade Sousa. Sempre novidades, qualidade
              garantida e ofertas especiais.
            </p>

            <div data-sr="up" className="pt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#EE4D2D] hover:bg-[#d54124] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
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
