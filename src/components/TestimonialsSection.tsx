import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Amei a caneca personalizada! O design ficou perfeito e a qualidade é excelente. Recomendo muito!",
      rating: 5,
      occasion: "Presente de aniversário"
    },
    {
      name: "João Santos",
      text: "A cesta romântica foi um sucesso! Minha esposa ficou emocionada. Atendimento nota 10!",
      rating: 5,
      occasion: "Dia dos namorados"
    },
    {
      name: "Ana Costa",
      text: "Kits corporativos impecáveis! Nossos colaboradores adoraram. Entrega super rápida!",
      rating: 5,
      occasion: "Evento corporativo"
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi os depoimentos e gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Depoimentos reais de pessoas que escolheram nossos presentes personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-center mb-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <h4 className="font-bold text-foreground mb-1">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-primary font-medium">
                  {testimonial.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center bg-card p-8 rounded-3xl shadow-lg border border-border animate-slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Quer surpreender alguém especial?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fale com a gente no WhatsApp agora mesmo! Nossa equipe está pronta para criar algo único e especial para você.
          </p>
          
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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