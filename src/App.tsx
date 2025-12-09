import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Depoimentos from "./pages/Depoimentos";
import Contatos from "./pages/contatos";
import NotFound from "./pages/NotFound";
import SobreNos from "./pages/SobreNos";
import PoliticaPrivacidade from "./pages/politica-de-privacidade";
import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

const queryClient = new QueryClient();

function ScrollRevealInit() {
  const location = useLocation();
  useEffect(() => {
    initScrollReveal({ once: true, rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  }, [location.pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRevealInit />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
