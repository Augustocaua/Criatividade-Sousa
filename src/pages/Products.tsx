import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useSearchParams } from "react-router-dom";
import { openSafeWindow } from "@/lib/utils";

// Importar imagens dos produtos
import mugProduct from "@/assets/mug-product.jpg";
import basketProduct from "@/assets/basket-product.jpg";
import corporateKit from "@/assets/corporate-kit.jpg";
// Usando imagem via public (sem import)
const academiaShoppe: string = "/academiashoppe.jpeg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "canecas", name: "Canecas personalizadas" },
    { id: "cestas", name: "Combos de Canecas" },
    { id: "corporativo", name: "Kits Corporativos" },
    { id: "especiais", name: "Adesivos personalizados em Vinil" },
    { id: "fotos", name: "Fotos" },
    { id: "topos-de-bolos", name: "Topos de bolos" }
  ];

  const products = [
    {
      id: 1,
      image: "/canecaturas/1.webp",
      title: "Canecatura",
      price: "R$ 39,00",
      description: "Caneca de cerâmica com impressão de alta qualidade. Personalize com foto, nome ou frase especial.",
      category: "canecas",
      galleryImages: [
        "/canecaturas/1.webp",
        "/canecaturas/2.webp",
        "/canecaturas/3.webp",
      ],
      shoppeLink: "https://shopee.com.br/Caneca-Caricatura-Personalizada-Presente-Criativo-Desenho-Foto-%C3%9Anica-Arte-Namorados-M%C3%A3es-caneca-com-frase-i.1258645456.22694527296?extraParams=%7B%22display_model_id%22%3A199612913833%7D&is_from_login=true"
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
      image: encodeURI("/Presente menino criativo infantil/1.jpeg"),
      title: "Caneca de colorir pinte e lave/Presente menino criativo infantil",
      price: "R$ 38,99",
      description: "Caneca de colorir pinte e lave/Presente Crianças/com caixa e laço/Caneca porcelana/Presente menino criativo infantil 🎨☕",
      category: "canecas",
      galleryImages: [
        encodeURI("/Presente menino criativo infantil/1.jpeg"),
        encodeURI("/Presente menino criativo infantil/2.jpeg"),
        encodeURI("/Presente menino criativo infantil/3.jpeg"),
        encodeURI("/Presente menino criativo infantil/4.jpeg"),
        encodeURI("/Presente menino criativo infantil/5.jpeg"),
      ]
    },

    {
      id: 12,
      image: encodeURI("/Caneca de colorir pinte e lave/1.jpeg"),
      title: "Caneca de colorir pinte e lave /Presente menina criativo infantil",
      price: "R$ 38,99",
      description: "Caneca de colorir pinte e lave / Presente Crianças / com caixa e laço / Caneca porcelana / Presente menina criativo infantil 🎨☕",
      category: "canecas",
      galleryImages: [
        encodeURI("/canecas de colcorir meninas/1.jpeg"),
        encodeURI("/canecas de colcorir meninas/2.jpeg"),
        encodeURI("/canecas de colcorir meninas/3.jpeg"),
        encodeURI("/canecas de colcorir meninas/4.jpeg"),
        encodeURI("/canecas de colcorir meninas/5.jpeg"),
      ]
    },
    {
      id: 5,
      image: "/adesivos-personalizados-em-vinil/1.jpeg",
      title: "Adesivos personalizados em Vinil",
      price: "R$ 65,00",
      description: "Adesivos personalizados em vinil de alta qualidade, perfeitos para decorar cadernos, laptops, agendas, embalagens ou qualquer superfície lisa. Duráveis, resistentes à água e com cores vibrantes que dão um toque único e criativo aos seus objetos. Personalize do seu jeito e cri...",
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
      image: encodeURI("/Topo de bolo Carnaval tropical/foto1.jpeg"),
      title: "Topo de bolo Carnaval tropical",
      price: "R$23,82",
      description: "chique/Decoração carnaval elegante/Topo diferenciado/Pronto para usar 🎭🌴 ",
      category: "topos-de-bolos",
      galleryImages: [
        encodeURI("/Topo de bolo Carnaval tropical/foto1.jpeg"),
        encodeURI("/Topo de bolo Carnaval tropical/foto2.jpeg"),
      ]
    },

    {
      id: 8,
      image: encodeURI("/Flores Paraíso/1.jpeg"),
      title: "Flores Paraíso",
      price: "R$27,99",
      description: "Flores Paraíso para topo de bolo/Decoração sofisticada/Kit com 4 flores/Criação exclusiva Criatividade Sousa 🌸✨",
      category: "topos-de-bolos",
      galleryImages: [
        encodeURI("/Flores Paraíso/1.jpeg"),
        encodeURI("/Flores Paraíso/2.jpeg"),
      ]
    },
    {
      id: 9,
      image: encodeURI("/canecas da vovo/br-11134207-81z1k-mfv8qz4dubrbbf-convertido-de-webp.jpeg"),
      title: "Caneca personalizada para avó",
      price: "R$ 39,90",
      description: "Caneca personalizada para avó / vai com caixa e laço para presentear / Caneca dia dos avós / Presente para avó / Caneca para avó",
      category: "canecas",
      galleryImages: [
        encodeURI("/canecas da vovo/br-11134207-81z1k-mfv8qz4dubrbbf-convertido-de-webp.jpeg"),
        encodeURI("/canecas da vovo/br-11134207-81z1k-mfv8qz4dzy1354@resize_w900_nl-convertido-de-webp.jpeg"),
        encodeURI("/canecas da vovo/br-11134207-81z1k-mfv8qz4e2r5z3c@resize_w900_nl-convertido-de-webp.jpeg"),
      ]
    },
    {
      id: 10,
      image: encodeURI("/Quadro decorativo natal/1.jpeg"),
      title: "Quadro decorativo de Natal",
      price: "R$ 28,90",
      description: "Quadro decorativo natal com foto–Base MDF 15x15cm com suporte- porta retrato personalizado–lembrança criativa–presente",
      category: "fotos",
      galleryImages: [
        encodeURI("/Quadro decorativo natal/1.jpeg"),
        encodeURI("/Quadro decorativo natal/2.jpeg"),
        encodeURI("/Quadro decorativo natal/3.jpeg"),
        encodeURI("/Quadro decorativo natal/4.jpeg"),
      ]
    },
    {
      id: 11,
      image: encodeURI("/bola de natal/ima1.jpeg"),
      title: "Bola de Natal personalizada",
      price: "R$ 31,90",
      description: "Bola de natal personalizada com foto/ Bolinha de natal personalizada com foto/ enfeite de natal/ Bola natalina com foto.",
      category: "fotos",
      galleryImages: [
        encodeURI("/bola de natal/ima1.jpeg"),
        encodeURI("/bola de natal/ima2.jpeg"),
        encodeURI("/bola de natal/ima3.jpeg"),
      ]
    },
    {
      id: 13,
      image: encodeURI("/Caneca Motivacional/br-11134207-81z1k-mf8k8pnstngk39-convertido-de-webp.jpeg"),
      title: "Caneca Motivacional",
      price: "R$ 38,99",
      description: "Caneca Motivacional Treino Academia Presente Fitness- Caneca Porcelana-Frases de Academia- Humor Maromba.",
      category: "canecas",
      galleryImages: [
        encodeURI("/Caneca Motivacional/br-11134207-81z1k-mf8k8pnstngk39-convertido-de-webp.jpeg"),
        encodeURI("/Caneca Motivacional/br-11134207-81z1k-mf8k8pnsv210cb-convertido-de-webp.jpeg"),
      ]
    },
  ];

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de ver o catálogo completo de produtos 🎁");
    openSafeWindow(`https://wa.me/5571987929082?text=${message}`);
  };

  const handleBuyNow = (product: { title: string; price?: string }) => {
    const message = encodeURIComponent(
      `Olá! Quero comprar ${product.title}${product.price ? ` (${product.price})` : ''}. Pode me ajudar?`
    );
    openSafeWindow(`https://wa.me/5571987929082?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Header fixo apenas na primeira seção (Hero) */}
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-16 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
      <div className="sticky top-0 z-50">
      <Header stickyInSection />
      </div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={encodeURI("/video-produto.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              Nossos Produtos
            </h1>
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Descubra nossa coleção completa de presentes personalizados. Cada produto é criado com carinho e atenção aos detalhes.
            </p>
            <div data-sr="up" data-sr-duration="0.7">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                💬 Fale Conosco no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
               <button
                 key={category.id}
                 onClick={() => setSelectedCategory(category.id)}
                 data-sr="up" data-sr-duration="0.6" data-sr-delay={index * 0.04}
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
      <section className="py-16" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.04}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  galleryImages={product.galleryImages}
                  disableFlip
                  shoppeLink={(product as any).shoppeLink}
                />
                {/* Removido botão externo para manter CTA dentro do card */}
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16" data-sr="up" data-sr-duration="0.7">
              <p className="text-lg text-muted-foreground mb-4" data-sr="fade" data-sr-duration="0.8">
                Nenhum produto encontrado nesta categoria.
              </p>
              <div data-sr="up" data-sr-duration="0.7">
                <Button
                  onClick={() => setSelectedCategory("todos")}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Ver Todos os Produtos
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6">
             Não encontrou o que procura?
           </h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-black mb-8 max-w-2xl mx-auto">
            Criamos produtos personalizados sob medida! Entre em contato e conte sua ideia.
          </p>
          <div data-sr="up" data-sr-duration="0.7">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎨 Solicitar Produto Personalizado
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;
