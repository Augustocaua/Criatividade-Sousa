import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Importar imagens dos produtos
import mugProduct from "@/assets/mug-product.jpg";
import basketProduct from "@/assets/basket-product.jpg";
import corporateKit from "@/assets/corporate-kit.jpg";
// Usando imagem via public (sem import)
const academiaShoppe: string = "/academiashoppe.jpeg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "canecas", name: "Canecas personalizadas" },
    { id: "cestas", name: "Combos de Canecas" },
    { id: "corporativo", name: "Kits Corporativos" },
    { id: "especiais", name: "Adesivos personalizados em Vinil" }
  ];

  const products = [
    {
      id: 1,
      image: academiaShoppe,
      title: "Canecatura ",
      price: "R$ 39,00",
      description: "Caneca de cerâmica com impressão de alta qualidade. Personalize com foto, nome ou frase especial.",
      category: "canecas",
      galleryImages: [
        "/canecaturas/caneca-numero-1.jpeg",
        "/canecaturas/numero-2.jpeg",
        "/canecaturas/numero-3.jpeg",
      ]
    },
    {
      id: 2,
      image: basketProduct,
      title: "Cesta Romântica Especial",
      price: "R$ 89,00",
      description: "Cesta completa com chocolates, vinho e itens românticos. Perfeita para datas especiais.",
      category: "cestas"
    },
    {
      id: 3,
      image: corporateKit,
      title: "Kit Corporativo Executivo",
      price: "R$ 120,00",
      description: "Kit profissional com caneca, caderno e caneta personalizados com logo da empresa.",
      category: "corporativo"
    },
    {
      id: 4,
      image: mugProduct,
      title: "Caneca Mágica Personalizada",
      price: "R$ 45,00",
      description: "Caneca que muda de cor com líquido quente. Revela sua mensagem ou foto especial.",
      category: "canecas"
    },
    {
      id: 5,
      image: "/adesivos-personalizados-em-vinil/1.jpeg",
      title: "Adesivos personalizados em Vinil",
      price: "R$ 65,00",
      description: "Adesivos personalizados em vinil de alta qualidade, perfeitos para decorar cadernos, laptops, agendas, embalagens ou qualquer superfície lisa. Duráveis, resistentes à água e com cores vibrantes que dão um toque único e criativo aos seus objetos. Personalize do seu jeito e transforme cada detalhe em algo especial!.",
      category: "especiais",
      categoryLabel: "Adesivos personalizados em Vinil",
      galleryImages: [
        "/adesivos-personalizados-em-vinil/1.jpeg",
        "/adesivos-personalizados-em-vinil/2.jpeg",
        "/adesivos-personalizados-em-vinil/3.jpeg"
      ]
    },
    {
      id: 6,
      image: corporateKit,
      title: "Kit Brindes Promocionais",
      price: "R$ 85,00",
      description: "Conjunto de brindes personalizados para eventos e campanhas promocionais.",
      category: "corporativo"
    },
    {
      id: 7,
      image: mugProduct,
      title: "Caneca Dia das Mães",
      price: "R$ 40,00",
      description: "Caneca especial para o Dia das Mães com design exclusivo e mensagem carinhosa.",
      category: "especiais"
    },
    {
      id: 8,
      image: basketProduct,
      title: "Cesta Aniversário Luxo",
      price: "R$ 150,00",
      description: "Cesta premium com champagne, chocolates gourmet e itens de luxo para aniversários.",
      category: "especiais"
    }
  ];

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de ver o catálogo completo de produtos 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-6">
            Nossos Produtos
          </h1>
          <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto mb-8">
            Descubra nossa coleção completa de presentes personalizados. 
            Cada produto é criado com carinho e atenção aos detalhes.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-accent hover:bg-white/90 font-bold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            💬 Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-white text-accent hover:bg-primary/10 border border-border"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                galleryImages={product.galleryImages}
                disableFlip
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                Nenhum produto encontrado nesta categoria.
              </p>
              <Button
                onClick={() => setSelectedCategory("todos")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Ver Todos os Produtos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-base sm:text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Criamos produtos personalizados sob medida! Entre em contato e conte sua ideia.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            🎨 Solicitar Produto Personalizado
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;