import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";

const Contatos = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido personalizado 🎁");
    window.open(`https://wa.me/5571987929082?text=${message}`, "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/criatividadesousa", "_blank");
  };
  const handleShopee = () => {
    window.open("https://shopee.com.br/criatividadesousa#product_list", "_blank");
  };

  return (
    <div className="min-h-screen bg-background animated-bg">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white text-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 data-sr="up" data-sr-duration="0.9" className="text-4xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
              Estamos aqui para transformar suas ideias em presentes únicos e inesquecíveis. 
              Fale conosco e vamos criar algo especial juntos!
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl font-bold text-accent mb-8">
                    Informações de Contato
                  </h2>
                </div>

                {/* Address */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.00" className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-black">
                    Bairro São gonçalo do retiro <br />
                      Salvador - BA, 40000-000
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.06" className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <p className="text-black">
                      <a href="tel:+5571987929082" className="text-black hover:text-primary transition-colors">
                        (71) 98792-9082
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.12" className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <p className="text-black">
                      <a href="mailto:contato@criatividadesousa.com.br" className="text-black hover:text-primary transition-colors">
                        contato@criatividadesousa.com.br
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.18" className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 14h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & CTA */}
              <div className="space-y-8">
                <div>
                  <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl font-bold text-accent mb-8">
                    Redes Sociais
                  </h2>
                </div>

                {/* WhatsApp */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.00" className="p-8 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-800">WhatsApp</h3>
                      <p className="text-green-600">Atendimento rápido e personalizado</p>
                    </div>
                  </div>
                  <p className="text-green-700 mb-4">
                    Fale conosco diretamente pelo WhatsApp para tirar dúvidas, fazer pedidos ou solicitar orçamentos.
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Conversar no WhatsApp
                  </Button>
                </div>

                {/* Instagram */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.06" className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <Instagram className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-800">Instagram</h3>
                      <p className="text-purple-600">@criatividadesousa</p>
                    </div>
                  </div>
                  <p className="text-purple-700 mb-4">
                    Acompanhe nossos trabalhos, novidades e inspirações para presentes únicos.
                  </p>
                  <Button 
                    onClick={handleInstagram}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Seguir no Instagram
                  </Button>
                </div>
                {/* Shopee */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.12" className="p-8 bg-[#FFF1EB] rounded-lg border border-[#EE4D2D]/40">
                  <div className="flex items-center space-x-4 mb-4">
                    <ShoppingBag className="h-8 w-8 text-[#EE4D2D]" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#B23A21]">Shopee</h3>
                      <p className="text-[#EE4D2D]">Loja <span className="text-accent">Criatividade Sousa</span></p>
                    </div>
                  </div>
                  <p className="text-[#B23A21] mb-4">
                    Confira nossos produtos e ofertas especiais na Shopee.
                  </p>
                  <Button 
                    onClick={handleShopee}
                    className="w-full bg-[#EE4D2D] hover:bg-[#d54124] text-white"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2 text-white" />
                    Acessar loja na Shopee
                  </Button>
                </div>

                {/* Contact CTA */}
                <div data-sr="up" data-sr-duration="0.7" data-sr-delay="0.18" className="p-8 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 data-sr="up" data-sr-duration="0.8" className="text-xl font-semibold text-foreground mb-4">
                    Pronto para criar algo especial?
                  </h3>
                  <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-black mb-6">
                    Entre em contato conosco e vamos transformar sua ideia em um presente inesquecível!
                  </p>
                  <div data-sr="up" data-sr-duration="0.7" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button onClick={handleWhatsApp} className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button onClick={handleInstagram} variant="outline" className="w-full">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contatos;