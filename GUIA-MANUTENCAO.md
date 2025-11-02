# 📋 Guia de Manutenção - Criatividade Sousa

## 🏗️ Estrutura Geral do Projeto

### Tecnologias Utilizadas
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework de estilos
- **Shadcn/ui** - Biblioteca de componentes
- **React Router** - Roteamento
- **Lucide React** - Ícones

### Estrutura de Pastas
```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   └── ui/         # Componentes base do Shadcn/ui
├── hooks/          # Custom hooks
├── lib/            # Utilitários e configurações
├── pages/          # Páginas da aplicação
├── App.tsx         # Componente raiz
├── main.tsx        # Ponto de entrada
└── index.css       # Estilos globais
```

## ⚙️ Arquivos de Configuração

### package.json
**Localização:** `package.json`
**Função:** Define dependências e scripts do projeto

**Scripts principais:**
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linting do código

### vite.config.ts
**Localização:** `vite.config.ts`
**Função:** Configuração do Vite

**Configurações importantes:**
- Servidor roda na porta 8080
- Alias `@` aponta para `./src`
- Plugin React SWC para performance

### tailwind.config.ts
**Localização:** `tailwind.config.ts`
**Função:** Configuração do Tailwind CSS

**Personalizações:**
- Cores da marca (teal e dourado)
- Gradientes personalizados
- Animações customizadas
- Variáveis CSS para temas

## 🎨 Sistema de Cores e Estilos

### Paleta de Cores Principal
**Arquivo:** `src/index.css`

```css
/* Cores principais */
--primary: 174 77% 47%;        /* Teal vibrante */
--accent: 38 61% 73%;          /* Dourado */
--secondary: 174 30% 95%;      /* Teal claro */
--background: 0 0% 100%;       /* Branco */
--foreground: 174 20% 15%;     /* Texto escuro */
```

### Como Alterar Cores
1. Abra `src/index.css`
2. Modifique as variáveis CSS na seção `:root`
3. Use formato HSL: `hue saturation lightness`
4. As cores se aplicam automaticamente em todo o projeto

## 📱 Componentes Principais

### Header (Cabeçalho)
**Arquivo:** `src/components/Header.tsx`

**Funcionalidades:**
- Logo da empresa
- Menu de navegação responsivo
- Botão WhatsApp
- Efeito de scroll (muda aparência ao rolar)

**Como modificar:**
```typescript
// Alterar itens do menu
const menuItems = [
  { name: "Início", href: "#inicio" },
  { name: "Produtos", href: "#produtos" },
  // Adicione novos itens aqui
];

// Alterar número do WhatsApp
const handleWhatsApp = () => {
  const message = encodeURIComponent("Sua mensagem aqui");
  window.open(`https://wa.me/SEU_NUMERO?text=${message}`, "_blank");
};
```

### HeroSection (Seção Principal)
**Arquivo:** `src/components/HeroSection.tsx`

**Funcionalidades:**
- Título principal com gradiente
- Descrição do negócio
- Botão de call-to-action
- Imagem de destaque
- Animações CSS

**Como modificar:**
```typescript
// Alterar título
<h1 className="text-5xl lg:text-7xl font-bold text-white">
  Seu Novo Título{" "}
  <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
    Destacado
  </span>
</h1>

// Alterar descrição
<p className="text-xl lg:text-2xl text-white/90">
  Sua nova descrição aqui
</p>
```

### ProductsSection (Seção de Produtos)
**Arquivo:** `src/components/ProductsSection.tsx`

**Funcionalidades:**
- Lista de produtos
- Cards com flip animation
- Integração com WhatsApp

**Como adicionar produto:**
```typescript
const products = [
  {
    image: suaImagem,
    title: "Nome do Produto",
    price: "A partir de R$ XX",
    description: "Descrição do produto",
    category: "Categoria"
  },
  // Adicione novos produtos aqui
];
```

### Footer (Rodapé)
**Arquivo:** `src/components/Footer.tsx`

**Funcionalidades:**
- Informações da empresa
- Links rápidos
- Redes sociais
- Informações de contato

**Como modificar contatos:**
```typescript
// Alterar informações de contato
const contactInfo = [
  {
    icon: Phone,
    text: "(11) 99999-9999",
    href: "tel:+5511999999999"
  },
  {
    icon: Mail,
    text: "contato@criatividadesousa.com",
    href: "mailto:contato@criatividadesousa.com"
  }
];
```

## 🖼️ Gerenciamento de Imagens

### Localização
**Pasta:** `src/assets/`

### Como Adicionar Novas Imagens
1. Coloque a imagem na pasta `src/assets/`
2. Importe no componente:
```typescript
import minhaImagem from "@/assets/minha-imagem.jpg";
```
3. Use no JSX:
```typescript
<img src={minhaImagem} alt="Descrição" />
```

### Formatos Recomendados
- **JPG/JPEG** - Para fotos de produtos
- **PNG** - Para imagens com transparência
- **SVG** - Para logos e ícones (preferível)

## 🔗 Sistema de Roteamento

### Configuração Principal
**Arquivo:** `src/App.tsx`

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Como Adicionar Nova Página
1. Crie o componente em `src/pages/`
2. Importe no `App.tsx`
3. Adicione a rota:
```typescript
<Route path="/nova-pagina" element={<NovaPagina />} />
```

## 📱 WhatsApp Integration

### Configuração Atual
**Número:** `5511999999999` (exemplo)

### Como Alterar
Procure por `wa.me/5511999999999` em todos os arquivos e substitua pelo seu número:

```bash
# Buscar todas as ocorrências
grep -r "5511999999999" src/
```

### Personalizar Mensagens
```typescript
// Mensagem padrão
const message = encodeURIComponent("Olá! Gostaria de fazer um pedido 🎁");

// Mensagem específica por produto
const message = encodeURIComponent(`Interesse no produto: ${productName}`);
```

## 🛠️ Comandos de Desenvolvimento

### Iniciar Desenvolvimento
```bash
npm run dev
# Acesse: http://localhost:8080
```

### Build para Produção
```bash
npm run build
# Arquivos gerados em: dist/
```

### Verificar Código
```bash
npm run lint
```

## 🎯 Tarefas Comuns de Manutenção

### 1. Alterar Informações da Empresa
**Arquivos a modificar:**
- `src/components/Header.tsx` - Nome no cabeçalho
- `src/components/Footer.tsx` - Informações de contato
- `src/components/HeroSection.tsx` - Descrição principal

### 2. Adicionar Novo Produto
1. Adicione a imagem em `src/assets/`
2. Importe a imagem em `ProductsSection.tsx`
3. Adicione o produto no array `products`

### 3. Alterar Cores do Site
1. Abra `src/index.css`
2. Modifique as variáveis CSS em `:root`
3. As mudanças se aplicam automaticamente

### 4. Modificar Textos
- **Título principal:** `HeroSection.tsx`
- **Descrições:** Cada componente respectivo
- **Menu:** `Header.tsx` - array `menuItems`

### 5. Atualizar Redes Sociais
**Arquivo:** `src/components/Footer.tsx`
```typescript
// Alterar links das redes sociais
<a href="https://instagram.com/SEU_PERFIL">
<a href="https://facebook.com/SEU_PERFIL">
```

## 🚨 Solução de Problemas Comuns

### Erro: "Module not found"
- Verifique se o caminho do import está correto
- Use `@/` para referenciar a pasta `src/`

### Imagem não carrega
- Verifique se a imagem está em `src/assets/`
- Confirme se o import está correto
- Verifique o nome do arquivo (case-sensitive)

### Estilos não aplicam
- Verifique se as classes Tailwind estão corretas
- Confirme se o arquivo CSS está importado
- Limpe o cache: `npm run dev` (reinicie)

### WhatsApp não funciona
- Verifique se o número está no formato correto
- Confirme se a mensagem está encodada
- Teste o link manualmente

## 📚 Recursos Úteis

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Shadcn/ui:** https://ui.shadcn.com/
- **Lucide Icons:** https://lucide.dev/
- **React Router:** https://reactrouter.com/
- **Vite:** https://vitejs.dev/

## 🔄 Atualizações e Backup

### Antes de Fazer Alterações
1. Faça backup do projeto
2. Teste em ambiente de desenvolvimento
3. Verifique se tudo funciona antes de publicar

### Versionamento
- Use Git para controle de versão
- Faça commits frequentes com mensagens descritivas
- Mantenha branches separadas para features

---

**📞 Suporte:** Em caso de dúvidas, consulte este guia ou procure ajuda técnica especializada.

**🔄 Última atualização:** Janeiro 2025