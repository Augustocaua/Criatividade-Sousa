const ShopeeSection = () => {
  return (
    <section
      id="shopee"
      className="relative py-16 sm:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/shoppe.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mx-auto bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg tracking-tight mb-4 animate-fade-in">
              Acompanhe nossa loja da Shopee
            </h2>
            <p className="text-base sm:text-lg text-white drop-shadow-md leading-relaxed tracking-wide max-w-3xl mx-auto animate-slide-up">
              Descubra produtos criativos e exclusivos na Criatividade Sousa. Sempre novidades, qualidade garantida e ofertas especiais.
            </p>
          </div>
        </div>

        <div className="text-center animate-slide-up">
          <a
            href="https://shopee.com.br/criatividadesousa#product_list"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary-hover font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            👉 Clique aqui e confira nossa loja!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopeeSection;