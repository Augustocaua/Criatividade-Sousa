import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Header fixo apenas na primeira seção */}
      <WhatsAppFloat />

      <section
        className="relative min-h-screen w-full overflow-hidden pb-16"
        style={{
          backgroundImage: 'url("/imagem deyse.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="sticky top-0 z-50">
          <Header stickyInSection />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1
            data-sr="up"
            data-sr-duration="0.8"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-6 text-center"
          >
            🌟 Sobre a Criatividade Sousa
          </h1>

          <div className="flex justify-center mb-8" />
        </div>
      </section>

      

      

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-foreground">
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
              A Criatividade Sousa nasceu em 2020 com o propósito de transformar histórias em presentes cheios de significado.
              Mais do que produtos personalizados, criamos experiências afetivas que encantam e tornam cada momento inesquecível.
            </p>
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
              De topos de bolo a canecas exclusivas, cada detalhe é pensado com carinho, criatividade e propósito.
              Aqui, acreditamos que presentear é contar uma história, e o nosso papel é dar forma a essa emoção de maneira única.
            </p>
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
              Em cada criação, colocamos amor, qualidade e dedicação — porque o que fazemos vai além do material,
              é sobre tocar corações e celebrar a vida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8 text-foreground">
            <div>
              <h2 data-sr="up" data-sr-duration="0.8" className="text-2xl sm:text-3xl font-bold text-accent">✨ Nossa Missão</h2>
              <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
                Transformar sentimentos e memórias em presentes personalizados que encantam e eternizam histórias.
              </p>
            </div>
            <div>
              <h2 data-sr="up" data-sr-duration="0.8" className="text-2xl sm:text-3xl font-bold text-accent">🌈 Nossa Visão</h2>
              <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
                Ser referência em presentes criativos e emocionais, inspirando pessoas a expressarem carinho de forma única.
              </p>
            </div>
            <div>
              <h2 data-sr="up" data-sr-duration="0.8" className="text-2xl sm:text-3xl font-bold text-accent">🌻 Nossos Valores</h2>
              <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">
                Criatividade, atenção aos detalhes, empatia, confiança, qualidade e atendimento acolhedor.
              </p>
            </div>

            <div className="my-8 border-t border-border" />

            <blockquote data-sr="fade" data-sr-duration="0.8" className="italic text-muted-foreground text-center">
              “Transformamos gestos de carinho em experiências inesquecíveis.”
            </blockquote>
            <div className="space-y-1 text-center" data-sr="up" data-sr-duration="0.7">
              <p>Com carinho,</p>
              <p className="font-semibold">Deyse Criatividade Sousa</p>
              <p>ser feliz é ser criativo 💛</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
