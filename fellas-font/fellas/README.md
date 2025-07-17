# 🍕 Pizzaria Bella - Sistema de Pedidos Online

Sistema completo de pedidos online para pizzarias com foco em mobile e desktop responsivo.

## 🚀 Funcionalidades

### Para Clientes
- **Catálogo de Produtos**: Visualização de pizzas, bebidas, acompanhamentos e sobremesas
- **Filtros por Categoria**: Navegação fácil entre diferentes tipos de produtos
- **Carrinho de Compras**: Adicionar, remover e gerenciar quantidades
- **Checkout Completo**: Formulário com dados do cliente e forma de pagamento
- **Integração WhatsApp**: Envio automático do pedido via WhatsApp

### Para Administradores
- **Painel Admin**: Interface completa para gerenciar o sistema
- **Gerenciamento de Produtos**: Adicionar, editar e remover produtos
- **Relatórios de Vendas**: Análise de vendas por produto e categoria
- **Autenticação**: Sistema de login seguro

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna
- **Tailwind CSS v4** - Framework CSS
- **Shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd pizzaria-online
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🎨 Design System

### Cores Principais
- **Vermelho**: #d32f2f (primary)
- **Laranja**: #ff9800 (secondary)
- **Amarelo**: #ffc107 (accent)
- **Verde**: #4caf50 (success)
- **Creme**: #fff8e1 (background-alt)

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botões e áreas de toque adequadas para mobile

## 👤 Credenciais de Teste

### Painel Administrativo
- **Email**: admin@pizzaria.com
- **Senha**: admin123

## 📱 Funcionalidades Detalhadas

### Catálogo
- Grid responsivo de produtos
- Imagens otimizadas com fallback
- Filtros por categoria
- Informações detalhadas (ingredientes, preços)

### Carrinho
- Adicionar/remover produtos
- Controle de quantidade
- Cálculo automático de totais
- Persistência local

### Checkout
- Formulário validado
- Múltiplas formas de pagamento
- Integração com WhatsApp
- Campos para observações

### Admin
- Dashboard com métricas
- CRUD completo de produtos
- Relatórios de vendas
- Interface intuitiva

## 🔄 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes Shadcn/ui
│   ├── figma/           # Componentes do Figma
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── ProductCatalog.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── AdminLogin.tsx
│   ├── AdminDashboard.tsx
│   └── ...
├── data/
│   └── mockData.ts      # Dados de exemplo
├── styles/
│   └── globals.css      # Estilos globais
└── App.tsx              # Componente principal
```

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta dist/
```

## 📞 Configuração do WhatsApp

Para configurar o envio via WhatsApp:

1. Abra o arquivo `src/components/Checkout.tsx`
2. Localize a linha com o número do WhatsApp:
```typescript
const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
```
3. Substitua `5511999999999` pelo número da pizzaria (com código do país)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato:
- Email: contato@pizzariabella.com
- WhatsApp: (11) 99999-9999

---

**Feito com ❤️ e 🍕 para pizzarias que querem crescer!**