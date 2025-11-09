import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/criatividade-sousa-logo-novo.svg";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "/produtos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Depoimentos", href: "/depoimentos" },
    { name: "Contato", href: "/contatos" },
  ];

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Criatividade Sousa" className="h-12 w-auto filter brightness-0 invert" />
              <span className="text-2xl font-bold">Criatividade Sousa</span>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Há mais de 5 anos criando presentes únicos e personalizados que marcam momentos especiais. 
              Transformamos suas ideias em realidade com carinho e dedicação.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5571987929082"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/criatividadesousa"
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              
              <a
                href="https://facebook.com/criatividadesousa"
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://shopee.com.br/criatividadesousa#product_list"
                className="bg-[#EE4D2D] hover:bg-[#d54124] p-3 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopee"
              >
                <img src="/icones-shopee.png" alt="Shopee" className="w-6 h-6 object-contain" />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background/60 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">
                   São gonçalo do retiro - Salvador, BA<br />
                    CEP: 41190-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/60 flex-shrink-0" />
                <button
                  onClick={handleWhatsApp}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  (71) 987929082
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60 flex-shrink-0" />
                <a
                  href="mailto:contato@criatividadesousa.com.br"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  contato@criatividadesousa.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Criatividade Sousa. Todos os direitos reservados. 
            Feito com ❤️ para criar momentos especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;