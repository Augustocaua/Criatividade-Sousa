import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  category: string;
  galleryImages?: string[];
  disableFlip?: boolean;
  categoryLabel?: string;
}

const ProductCard = ({ image, title, price, description, category, galleryImages, disableFlip, categoryLabel }: ProductCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${title} 🎁`);
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  // Carousel controls for static variant
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollByOne = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByOne("prev");
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByOne("next");
    }
  };

  // Variante estática sem flip para a página Produtos
  if (disableFlip) {
    return (
      <div className="w-full mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden" data-sr="up" data-sr-duration="0.7">
        <div className="relative">
          {galleryImages && galleryImages.length > 0 ? (
            <div
              ref={scrollRef}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="w-full aspect-square overflow-x-auto scroll-smooth"
            >
              <div className="flex h-full gap-3 snap-x snap-mandatory">
                {galleryImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    className="min-w-full h-full object-cover snap-start shrink-0 animate-fade-in"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full aspect-square object-cover animate-fade-in"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          )}

          {galleryImages && galleryImages.length > 0 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 hidden md:inline-flex bg-white/70 backdrop-blur-sm hover:bg-white"
                onClick={() => scrollByOne("prev")}
                aria-label="Slide anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex bg-white/70 backdrop-blur-sm hover:bg-white"
                onClick={() => scrollByOne("next")}
                aria-label="Próximo slide"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}

          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {categoryLabel ?? category}
            </span>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-accent">{title}</h3>
          <p className="text-sm sm:text-base text-black">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg sm:text-xl font-bold text-accent">{price}</span>
            <Button
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold px-4 py-2 rounded-full transition-all duration-300"
            >
              💬 Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flip-card aspect-square w-full mx-auto" data-sr="up" data-sr-duration="0.7">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front bg-card border border-border shadow-lg overflow-hidden">
          <div className="relative h-full">
            {
              galleryImages && galleryImages.length > 0 ? (
                <div className="w-full h-3/4 overflow-x-auto scroll-smooth">
                  <div className="flex h-full gap-3 snap-x snap-mandatory">
                    {galleryImages.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${title} ${idx + 1}`}
                        className="min-w-full h-full object-cover snap-start shrink-0 animate-fade-in"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-3/4 object-cover animate-fade-in"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              )
            }
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {categoryLabel ?? category}
              </span>
            </div>
            <div className="p-4 h-1/4 flex items-center justify-center">
              <h3 className="text-base sm:text-lg font-bold text-accent text-center">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-primary to-accent p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold mb-3 text-center text-accent-foreground">{title}</h3>
            <p className="text-sm sm:text-base text-black">{description}</p>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold text-accent-foreground">{price}</span>
            </div>
            
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-white text-accent hover:bg-white/90 font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              💬 Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;