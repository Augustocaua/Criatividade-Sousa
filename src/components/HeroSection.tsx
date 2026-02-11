const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <h1
            data-sr="up"
            data-sr-duration="1.0"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg"
          >
            Presentes que Marcam
            <span className="block text-primary-foreground mt-2">Momentos Inesquecíveis</span>
          </h1>
          <p
            data-sr="up"
            data-sr-delay="0.2"
            data-sr-duration="1.0"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md"
          >
            Presentes personalizados para todas as ocasiões especiais da sua vida
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
