import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  category: string;
}

const ProductCard = ({ image, title, price, description, category }: ProductCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${title} 🎁`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="flip-card h-80 w-full max-w-sm mx-auto">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front bg-card border border-border shadow-lg overflow-hidden">
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-3/4 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
            <div className="p-4 h-1/4 flex items-center justify-center">
              <h3 className="text-lg font-bold text-foreground text-center">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-primary to-accent text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
            <p className="text-lg mb-4 text-center opacity-90">{description}</p>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold">{price}</span>
            </div>
            
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-white text-primary hover:bg-white/90 font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              💬 Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;