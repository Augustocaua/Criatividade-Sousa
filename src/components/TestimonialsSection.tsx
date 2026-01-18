const TestimonialsSection = () => {
  const galleryImages = [
    "/depoimentos/depoimento-1.jpeg",
    "/depoimentos/depoimento-2.jpeg",
    "/depoimentos/depoimento-3.jpeg",
    "/depoimentos/depoimento-4.jpeg",
    "/depoimentos/depoimento-5.jpeg",
    "/depoimentos/depoimento-6.jpeg",
    "/depoimentos/depoimento-7.jpeg",
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi os depoimentos e gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
             O que nossos clientes dizem
           </h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black max-w-3xl mx-auto">
            Depoimentos reais de pessoas que escolheram nossos presentes personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.04}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] sm:aspect-[4/3]">
                <img
                  src={src}
                  alt={`Depoimento ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div data-sr="up" data-sr-duration="0.7" className="text-center bg-card p-6 sm:p-8 rounded-3xl shadow-lg border border-border">
          <h3 data-sr="up" data-sr-duration="0.8" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Quer surpreender alguém especial?
          </h3>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black mb-6 max-w-2xl mx-auto">
            Fale com a gente no WhatsApp agora mesmo! Nossa equipe está pronta para criar algo único e especial para você.
          </p>
          
          <button
            data-sr="up" data-sr-duration="0.7"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full transition-all duração-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
            </svg>
            Falar no WhatsApp Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
