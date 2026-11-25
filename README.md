# 🍕 Sistema de Pedidos via WhatsApp – Multiusuário

Este projeto é um sistema de pedidos online focado em pizzarias e lanchonetes, permitindo que clientes finais façam pedidos por WhatsApp com visual moderno, e os donos gerenciem seus produtos via painel administrativo.

---

## 📌 Decisões de Arquitetura

- ✅ Estrutura: **Monolito simplificado**, pré-organizado para migração futura para **DDD**
- 🌐 Roteamento por cliente: uso de **subdomínios** (`cliente.sistema.com`) para separar clientes
- 🔐 Autenticação: **JWT**
- 📡 Backend: ASP.NET Core Web API
- 🛠️ Banco: SQLite (para MVP)
- 📦 Frontend: SPA com Vite (React ou JS puro)
- 🚀 Deploy inicial simplificado, com previsão de uso de **NGINX e wildcard DNS** posteriormente

---

## 🎯 Funcionalidades (Foco do MVP)

### 👨‍🍳 Gestão de Produtos (Painel Admin)
- Cadastro de produtos com:
  - Nome
  - Preço
  - Ingredientes
  - Imagem
  - Categoria (pizza, bebida, acompanhamento etc.)
- Edição, exclusão e listagem de produtos
- Isolamento de produtos por cliente logado

### 🛒 Funcionalidade Cliente (Frontend Público)
- Exibição de produtos por categoria
- Carrinho de compras salvo em `localStorage`
- Tela de checkout com:
  - Nome do cliente
  - Endereço de entrega
  - Forma de pagamento
- Geração automática de **link de WhatsApp** com todos os dados do pedido

### 🔐 Autenticação e Multiusuário
- Login e senha por pizzaria
- Isolamento completo dos dados por cliente
- JWT para autenticação segura

### 📊 Relatórios (Versão Completa)
- Relatórios de vendas:
  - Por produto
  - Por categoria
  - Total nos últimos 30 dias
- Exportação ou visualização via dashboard simples

### 💰 Comercialização (Futura)
- Cobrança:
  - Modelo único (pagamento único por instalação)
  - Modelo recorrente (mensal com painel e relatórios)
- Planos:
  - Básico: frontend + WhatsApp
  - Completo: painel + relatórios + autenticação

---

## 📂 Estrutura Inicial (proposta)

/src
/api
/Controllers
/Entities
/DTOs
/Services
/Data
Program.cs
/web
/public
/src
/components
/pages
/utils
README.md



---

## 🔧 Tecnologias
- ASP.NET Core 8
- Entity Framework Core
- JWT Authentication
- SQLite (desenvolvimento)
- Vite + React ou HTML/JS puro
- TailwindCSS (UI rápida)

---

## Configuração local

A chave do JWT e o banco não ficam no repositório. Em `menu4myfellas/Menu4MyFellas.Api`:

```bash
dotnet tool install --global dotnet-ef --version "9.*"
dotnet ef database update

# chave própria, com pelo menos 32 caracteres
export Jwt__Key="sua-chave-longa-e-aleatoria"      # Linux/macOS
$env:Jwt__Key="sua-chave-longa-e-aleatoria"        # PowerShell
dotnet run
```
