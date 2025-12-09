import ProductCard from "./ProductCard";
import mugProduct from "@/assets/mug-product.jpg";
import basketProduct from "@/assets/basket-product.jpg";
import corporateKit from "@/assets/corporate-kit.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: "/imagem home caneca.jpeg",
      title: "Canecas Personalizadas",
      price: "A partir de R$ 36,99",
      description: "Canecas únicas com seu design personalizado para momentos especiais",
      category: "Personalizado"
    },
    {
      image: basketProduct,
      title: "Cestas ",
      price: "A partir de R$ 89",
      description: "Cestas especiais com mimos e presentes para conquistar corações",
      category: "Romance"
    },
    {
      image: "/imagem de combo.jpeg",
      title: "Combos Personalizados",
      price: "A partir de R$ 120",
      description: "Combos personalizados para eventos e comemorações empresariais",
      category: "Corporativo"
    },
    {
      image: "/tete-convertido-de-jpeg.jpeg",
      title: "Topos de Bolos",
      price: "A partir de R$ 45",
      description: "Ideias originais e criativas para surpreender pessoas especiais",
      category: "Criativo"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Nossos Produtos
          </h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black max-w-3xl mx-auto">
            Descubra nossa coleção especial de presentes personalizados. 
            Cada produto é criado com carinho e atenção aos detalhes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              data-sr="up" data-sr-duration="0.8" data-sr-delay={index * 0.08}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-black mb-6">
            Não encontrou o que procura? Temos muito mais!
          </p>
          <a
            href="/produtos"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            Ver todos os produtos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;