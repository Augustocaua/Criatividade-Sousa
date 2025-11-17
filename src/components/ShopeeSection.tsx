const ShopeeSection = () => {
  return (
    <section id="shopee" className="py-16 sm:py-20 bg-[#EE4D2D] bg-cover bg-center" style={{ backgroundImage: "url('/fundo shopee.jpeg')" }}>
      <div className="container mx-auto px-4 !text-[#FFFFFF]">
        {/* Textos acima da imagem */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !text-[#FFFFFF] tracking-tight mb-4 animate-fade-in">
            Acompanhe nossa loja da Shopee
          </h2>
          <p className="text-base sm:text-lg !text-[#FFFFFF] leading-relaxed tracking-wide max-w-3xl mx-auto animate-slide-up">
            Descubra produtos criativos e exclusivos na Criatividade Sousa. Sempre novidades, qualidade garantida e ofertas especiais.
          </p>
        </div>

        {/* Frame com imagem (quadrado) sem fundo extra, sobre seção laranja */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square max-w-3xl mx-auto ring-1 ring-white/30">
          <img
            src="/shope.jpeg"
            alt="Loja Shopee Criatividade Sousa"
            className="absolute inset-0 z-10 w-full h-full object-cover object-center"
          />
        </div>

        {/* Botão/Link abaixo da imagem */}
        <div className="text-center mt-6">
          <a
            href="https://shopee.com.br/criatividadesousa#product_list"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[#FFFFFF] font-semibold no-underline hover:!no-underline transition-colors"
          >
            👉 Clique aqui e confira nossa loja!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopeeSection;