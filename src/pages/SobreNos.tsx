import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background animated-bg">
      <Header />
      <WhatsAppFloat />

      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 animate-fade-in motion-reduce:animate-none">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-6 text-center animate-slide-up motion-reduce:animate-none">
            🌟 Sobre a Criatividade Sousa
          </h1>

          <div className="flex justify-center mb-8">
             <img
                src="/imagem deyse.jpeg"
                alt="Deyse Criatividade Sousa"
                className="w-full max-w-sm sm:max-w-md rounded-2xl border border-border shadow-sm object-cover"
                loading="lazy"
             />
           </div>

          <div className="max-w-3xl mx-auto space-y-6 text-foreground">
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.1s" }}>
              A Criatividade Sousa nasceu em 2020 com o propósito de transformar histórias em presentes cheios de significado.
              Mais do que produtos personalizados, criamos experiências afetivas que encantam e tornam cada momento inesquecível.
            </p>
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.2s" }}>
              De topos de bolo a canecas exclusivas, cada detalhe é pensado com carinho, criatividade e propósito.
              Aqui, acreditamos que presentear é contar uma história, e o nosso papel é dar forma a essa emoção de maneira única.
            </p>
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.3s" }}>
              Em cada criação, colocamos amor, qualidade e dedicação — porque o que fazemos vai além do material,
              é sobre tocar corações e celebrar a vida.
            </p>

            <div className="my-8 border-t border-border" />

            <h2 className="text-2xl sm:text-3xl font-bold text-accent animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.1s" }}>✨ Nossa Missão</h2>
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.15s" }}>
              Transformar sentimentos e memórias em presentes personalizados que encantam e eternizam histórias.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-accent animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.2s" }}>🌈 Nossa Visão</h2>
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.25s" }}>
              Ser referência em presentes criativos e emocionais, inspirando pessoas a expressarem carinho de forma única.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-accent animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.3s" }}>🌻 Nossos Valores</h2>
            <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.35s" }}>
              Criatividade, atenção aos detalhes, empatia, confiança, qualidade e atendimento acolhedor.
            </p>

            <div className="my-8 border-t border-border" />

            <blockquote className="italic text-muted-foreground text-center animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.4s" }}>
              “Transformamos gestos de carinho em experiências inesquecíveis.”
            </blockquote>

            <div className="space-y-1 text-center">
              <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.45s" }}>Com carinho,</p>
              <p className="font-semibold animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.5s" }}>Deyse Criatividade Sousa</p>
              <p className="animate-slide-up motion-reduce:animate-none" style={{ animationDelay: "0.55s" }}>ser feliz é ser criativo 💛</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;