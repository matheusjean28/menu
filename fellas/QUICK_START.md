# 🚀 Início Rápido - Pizzaria Bella

## ⚡ Comandos Essenciais

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar desenvolvimento
npm run dev

# 3. Abrir no navegador
http://localhost:3000
```

## 🔐 Login Admin
- **Email**: admin@pizzaria.com
- **Senha**: admin123

## 📱 Funcionalidades Principais

### 🍕 Cliente
- Navegar pelo catálogo
- Adicionar ao carrinho
- Finalizar pedido
- Enviar via WhatsApp

### 👨‍💼 Admin
- Login no painel
- Gerenciar produtos
- Ver relatórios
- Editar categorias

## 🛠️ Estrutura de Arquivos

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes Shadcn/ui
│   ├── Header.tsx       # Cabeçalho
│   ├── ProductCatalog.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   └── Admin*.tsx       # Componentes do admin
├── data/
│   └── mockData.ts      # Dados de exemplo
├── styles/
│   └── globals.css      # Estilos globais
└── App.tsx              # App principal
```

## 🎨 Personalização

### Cores (globals.css)
```css
--primary: #d32f2f;      /* Vermelho */
--secondary: #ff9800;    /* Laranja */
--accent: #ffc107;       /* Amarelo */
```

### WhatsApp (Checkout.tsx)
```typescript
// Linha 67 - Altere o número
const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta dist/
```

## 📞 Suporte

Se tiver problemas:
1. Verifique se o Node.js está instalado
2. Delete `node_modules` e rode `npm install` novamente
3. Verifique se a porta 3000 está livre

---

**Pronto para começar! 🍕**