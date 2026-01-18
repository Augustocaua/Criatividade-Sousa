const ShopeeSection = () => {
  return (
    <section
      id="shopee"
      className="relative py-20 sm:py-24 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={encodeURI("/video seção shopee.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2
                data-sr="up"
                data-sr-duration="0.8"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Destaques da Shopee
              </h2>
              <p
                data-sr="fade"
                data-sr-stagger="words"
                data-sr-duration="0.8"
                data-sr-step="0.06"
                className="text-base sm:text-lg text-white/90"
              >
                Confira alguns produtos em destaque na nossa loja da Shopee
              </p>
            </div>

            <div className="space-y-4">
              <h3
                data-sr="up"
                data-sr-duration="0.8"
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                Loja Shopee Criatividade Sousa
              </h3>
              <p
                data-sr="fade"
                data-sr-stagger="words"
                data-sr-duration="0.8"
                data-sr-step="0.06"
                className="text-base sm:text-lg text-white/90 leading-relaxed"
              >
                Acompanhe nossa loja da Shopee. Descubra produtos criativos e
                exclusivos na Criatividade Sousa. Sempre novidades, qualidade
                garantida e ofertas especiais.
              </p>
            </div>

            <div
              data-sr="up"
              data-sr-duration="0.7"
              className="pt-4 flex justify-center"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#EE4D2D] hover:bg-[#d54124] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
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
