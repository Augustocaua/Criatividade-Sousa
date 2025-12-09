import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoFrame from "./LogoFrame";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { name: "Início", href: "#inicio", isRoute: false },
    { name: "Produtos", href: "/produtos", isRoute: true },
    { name: "Sobre nós", href: "/sobre-nos", isRoute: true },
    { name: "Depoimentos", href: "/depoimentos", isRoute: true },
    { name: "Contato", href: "/contatos", isRoute: true },
    { name: "Privacidade", href: "/politica-de-privacidade", isRoute: true },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <LogoFrame width={120} height={60} className="h-12" />

          <span data-sr="fade" data-sr-duration="0.8" className={"text-accent text-2xl font-bold"}>
            Criatividade Sousa
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-sr="up" data-sr-duration="0.6" data-sr-delay={index * 0.04}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                data-sr="up" data-sr-duration="0.6" data-sr-delay={index * 0.04}
                onClick={(e) => {
                  if (!isHomePage && item.href.startsWith('#')) {
                    e.preventDefault();
                    window.location.href = `/${item.href}`;
                  }
                }}
              >
                {item.name}
              </a>
            )
          ))}
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-accent" />
          ) : (
            <Menu className="h-6 w-6 text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  data-sr="up" data-sr-duration="0.6" data-sr-delay={index * 0.04}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
                  data-sr="up" data-sr-duration="0.6" data-sr-delay={index * 0.04}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (!isHomePage && item.href.startsWith('#')) {
                      e.preventDefault();
                      window.location.href = `/${item.href}`;
                    }
                  }}
                >
                  {item.name}
                </a>
              )
            ))}
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 rounded-full"
            >
              Peça Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;