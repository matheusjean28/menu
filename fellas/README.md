# 🍕 Pizzaria Bella - React Puro

Sistema completo de pedidos online para pizzarias desenvolvido apenas com **React puro**, sem bibliotecas externas.

## ✨ Características

- **100% React Puro** - Sem dependências externas (exceto React e ReactDOM)
- **CSS Personalizado** - Estilos próprios sem frameworks
- **Ícones SVG Inline** - Sem bibliotecas de ícones
- **Responsivo** - Design mobile-first
- **TypeScript** - Tipagem completa

## 🚀 Funcionalidades

### 👥 Para Clientes
- **Catálogo Completo** - Pizzas, bebidas, acompanhamentos e sobremesas
- **Filtros e Busca** - Por categoria e texto livre
- **Carrinho Inteligente** - Persistência local, controle de quantidade
- **Checkout Simples** - Formulário intuitivo com validação
- **WhatsApp Integration** - Envio automático do pedido

### 👨‍💼 Para Administradores
- **Login Seguro** - Autenticação com persistência
- **Gestão de Produtos** - CRUD completo com modal
- **Relatórios Completos** - Vendas por produto e categoria
- **Interface Intuitiva** - Dashboard responsivo

## 🛠️ Tecnologias

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida
- **CSS Puro** - Estilos personalizados
- **LocalStorage** - Persistência de dados

## 📋 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repo>
cd pizzaria-react-puro
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

## 🎨 Design System

### Cores Principais
```css
--pizza-red: #d32f2f      /* Vermelho principal */
--pizza-orange: #ff9800   /* Laranja secundário */
--pizza-yellow: #ffc107   /* Amarelo destaque */
--pizza-green: #4caf50    /* Verde sucesso */
--pizza-cream: #fff8e1    /* Creme fundo */
--pizza-dark: #1a1a1a     /* Texto escuro */
```

### Layout Responsivo
- **Mobile**: < 768px - Layout em coluna única
- **Tablet**: 768px - 1024px - Grid adaptativo
- **Desktop**: > 1024px - Layout completo

## 👤 Credenciais de Teste

### Painel Admin
- **Email:** `admin@pizzaria.com`
- **Senha:** `admin123`

## 📱 Componentes Principais

```
components/
├── Header.tsx           # Navegação principal
├── ProductCatalog.tsx   # Catálogo com filtros
├── ProductCard.tsx      # Card individual do produto
├── CategoryFilter.tsx   # Filtros de categoria
├── Cart.tsx            # Carrinho de compras
├── Checkout.tsx        # Finalização do pedido
├── AdminLogin.tsx      # Login administrativo
├── AdminDashboard.tsx  # Dashboard principal
├── AdminProductManager.tsx # Gestão de produtos
├── AdminReports.tsx    # Relatórios de vendas
├── CartContext.tsx     # Contexto do carrinho
└── AuthContext.tsx     # Contexto de autenticação
```

## 🎯 Funcionalidades Detalhadas

### Carrinho de Compras
- Adicionar/remover produtos
- Controle de quantidade com botões +/-
- Cálculo automático de totais
- Persistência no localStorage
- Indicador visual na navegação

### Sistema de Checkout
- Formulário validado em tempo real
- Campos obrigatórios marcados
- Integração com WhatsApp
- Múltiplas formas de pagamento
- Campo para observações

### Painel Administrativo
- Dashboard com métricas principais
- CRUD completo de produtos com modal
- Upload de imagens via URL
- Relatórios de vendas detalhados
- Gestão de categorias

### Busca e Filtros
- Busca em tempo real por nome e ingredientes
- Filtros por categoria
- Indicador de resultados encontrados
- Estado vazio personalizado

## 🔧 Personalização

### Alterar Número do WhatsApp
No arquivo `components/Checkout.tsx`, linha 67:
```typescript
const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
```

### Modificar Cores
No arquivo `styles/globals.css`, seção `:root`:
```css
:root {
  --pizza-red: #sua-cor;
  /* ... outras cores */
}
```

### Adicionar Produtos
Edite o arquivo `data/mockData.ts`:
```typescript
export const products: Product[] = [
  {
    id: 'novo-id',
    name: 'Novo Produto',
    price: 29.90,
    ingredients: 'Ingredientes...',
    image: 'https://url-da-imagem.jpg',
    category: 'Categoria'
  }
];
```

## 📊 Estrutura de Dados

### Produto
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
}
```

### Item do Carrinho
```typescript
interface CartItem {
  product: Product;
  quantity: number;
}
```

## 🚀 Build para Produção

```bash
# Gerar build otimizada
npm run build

# Testar build localmente
npm run preview
```

Os arquivos serão gerados na pasta `dist/`.

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
```

## 🌟 Destaques Técnicos

- **Zero Dependências Externas** - Apenas React
- **CSS Grid e Flexbox** - Layout moderno
- **Context API** - Gerenciamento de estado
- **LocalStorage** - Persistência local
- **TypeScript** - Tipagem completa
- **Responsive Design** - Mobile-first
- **Performance** - Lazy loading de imagens
- **Acessibilidade** - Navegação por teclado

## 📞 Configurações

### WhatsApp Business
Para usar com WhatsApp Business:
1. Substitua o número no checkout
2. Configure mensagens automáticas
3. Ative notificações de pedidos

### Personalização Visual
1. Modifique as variáveis CSS
2. Ajuste breakpoints responsivos
3. Personalize ícones SVG
4. Altere imagens de placeholder

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit: `git commit -m 'Adiciona feature'`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

**Desenvolvido com ❤️ e 🍕 usando apenas React puro!**