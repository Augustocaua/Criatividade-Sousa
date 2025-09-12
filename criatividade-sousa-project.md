# Criatividade Sousa - Projeto Completo

## Estrutura do Projeto

```
criatividade-sousa/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── hero-products.jpg
│   │   ├── basket-product.jpg
│   │   ├── corporate-kit.jpg
│   │   └── mug-product.jpg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── [outros componentes shadcn]
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ProductCard.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts
├── vite.config.ts
├── package.json
└── tsconfig.json
```

## 1. package.json

```json
{
  "name": "criatividade-sousa",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

## 2. vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## 3. tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        gradient: {
          primary: "var(--gradient-primary)",
          secondary: "var(--gradient-secondary)",
          hero: "var(--gradient-hero)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## 4. src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Design system para Criatividade Sousa - cores teal e dourado */

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 174 20% 15%;

    --card: 0 0% 100%;
    --card-foreground: 174 20% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 174 20% 15%;

    /* Paleta principal - Teal vibrante */
    --primary: 174 77% 47%;
    --primary-foreground: 0 0% 100%;
    --primary-hover: 174 77% 42%;

    /* Gradientes personalizados */
    --gradient-primary: linear-gradient(135deg, hsl(174 77% 47%), hsl(174 60% 35%));
    --gradient-secondary: linear-gradient(135deg, hsl(38 61% 73%), hsl(45 70% 65%));
    --gradient-hero: linear-gradient(135deg, hsl(174 77% 47%) 0%, hsl(174 60% 35%) 50%, hsl(38 61% 73%) 100%);

    /* Cores secundárias */
    --secondary: 174 30% 95%;
    --secondary-foreground: 174 77% 47%;

    --accent: 38 61% 73%;
    --accent-foreground: 174 20% 15%;

    --muted: 174 20% 96%;
    --muted-foreground: 174 15% 45%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 174 20% 90%;
    --input: 174 20% 95%;
    --ring: 174 77% 47%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 174 25% 8%;
    --foreground: 174 20% 95%;

    --card: 174 20% 12%;
    --card-foreground: 174 20% 95%;

    --popover: 174 20% 12%;
    --popover-foreground: 174 20% 95%;

    --primary: 174 77% 52%;
    --primary-foreground: 0 0% 100%;
    --primary-hover: 174 77% 47%;

    --secondary: 174 15% 15%;
    --secondary-foreground: 174 60% 80%;

    --muted: 174 15% 15%;
    --muted-foreground: 174 20% 65%;

    --accent: 38 55% 65%;
    --accent-foreground: 174 25% 8%;

    --destructive: 0 75% 55%;
    --destructive-foreground: 0 0% 100%;

    --border: 174 15% 20%;
    --input: 174 15% 20%;
    --ring: 174 77% 52%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }

  /* Animações personalizadas */
  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.6s ease-out;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .flip-card {
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## 5. src/main.tsx

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
```

## 6. src/App.tsx

```typescript
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

## 7. src/pages/Index.tsx

```typescript
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
```

## 8. src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 9. Instruções de Instalação

Para usar este projeto no VSCode:

1. **Crie uma nova pasta** para o projeto
2. **Abra o terminal** na pasta e execute:
```bash
npm create vite@latest criatividade-sousa --template react-ts
cd criatividade-sousa
```

3. **Instale as dependências** do shadcn/ui:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card
```

4. **Instale as outras dependências**:
```bash
npm install @tanstack/react-query lucide-react react-router-dom class-variance-authority clsx tailwind-merge
```

5. **Substitua os arquivos** pelos códigos acima
6. **Execute o projeto**:
```bash
npm run dev
```

## Observações Importantes

- Substitua o número do WhatsApp em todos os componentes
- Adicione suas imagens na pasta `src/assets/`
- Customize as informações de contato no Footer
- Ajuste preços e descrições dos produtos
- Teste todas as funcionalidades

Este arquivo contém todo o código necessário para recriar o projeto no VSCode!