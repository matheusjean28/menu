## 📦 `README.md` — Menu4MyFellas Backend

---

### 🇧🇷 **Documentação em Português**

#### ✅ Visão Geral

Menu4MyFellas é uma API REST em .NET voltada para pequenos negócios que vendem produtos por WhatsApp. O sistema permite que o cliente cadastre seus produtos, categorias e tenha uma página pública com seus itens, além de autenticação JWT.

---

### 📁 Estrutura do Projeto

* `Entities/`: Entidades principais (`Client`, `Product`, `Category`, `Order`)
* `Products/`: Lógica e controller para produtos
* `DTOs/InputData/`: DTOs de entrada para produtos e categorias
* `Controllers/`: Controllers organizados por recurso
* `Auth/`: Geração de token JWT
* `Data/`: Contexto EF Core com SQLite

---

### 🔐 Autenticação

* JWT usando `Bearer token` via cabeçalho `Authorization`
* Claims incluem: `sub`, `email`, `slug`, `jti`
* Necessário para rotas privadas de criação/edição de produtos e categorias

---

### 📌 Entidades

#### `Client`

* `Id`, `BusinessName`, `Slug`, `Email`, `PasswordHash`
* Relações: Produtos, Categorias, Pedidos

#### `Product`

* `Id`, `Name`, `Price`, `Ingredients`, `ImageUrl`
* Relacionamentos:

  * 1 `Category`
  * 1 `Client`

#### `Category`

* `Id`, `Name`
* Pertence a 1 `Client`
* Contém vários `Products`

---

### 🔄 Regras de Negócio

* Um produto **precisa obrigatoriamente** estar vinculado a uma categoria.
* Caso não informada, será classificado automaticamente na categoria "Outros".
* Cada `Client` só vê e gerencia seus próprios produtos/categorias.
* O relacionamento Produto-Categoria é **1\:N (um para muitos)** no momento, mas planejamos mudar para **N\:N (muitos para muitos)** no futuro.

---

### 🧪 Rotas Existentes

#### Autenticação

```http
POST /api/Auth/login
```

> Realiza login e retorna um token JWT.

---

#### Categoria

```http
GET    /api/Category
POST   /api/Category
PUT    /api/Category/{id}
DELETE /api/Category/{id}
```

---

#### Produto

```http
GET    /api/Product
POST   /api/Product
PUT    /api/Product/{id}
DELETE /api/Product/{id}
```

---

#### Produto Público

```http
GET /api/Product/public/{slug}
```

Parâmetros opcionais:

* `?category=pizzas`
* `?orderBy=name` ou `orderBy=price`

Exemplo funcional:

```
http://localhost:5194/api/Product/public/4myfellas?category=pizzas&orderBy=price
```

---

### 💡 Ideias Futuras (Memória Salva)

* Mudar relacionamento Produto ↔ Categoria para muitos-para-muitos.
* Sistema de pedidos com histórico por cliente.
* PDF diário com resumo de estoque e movimentações.
* Frontend público simples que consome o endpoint `/public/{slug}`.
* Sistema de checkout que envia pedido por WhatsApp.
* Multiusuário com subdomínios: `cliente.meusistema.com`.
* NGINX e WAF (Cloudflare) planejado para o futuro.

---

### 🧪 Testando

* Usar `Insomnia`, `Postman` ou `Swagger` (`/swagger`)
* Autenticação com `Bearer {token}` no header
* Tokens têm validade de 7 dias
* Banco: SQLite (`menu4myfellas.db`)

---

---

## 🇺🇸 English Documentation

### ✅ Overview

**Menu4MyFellas** is a .NET REST API for small businesses selling via WhatsApp. Each client can register their own products and categories. A public endpoint allows listing the client's products by slug. Authentication is handled via JWT.

---

### 📁 Project Structure

* `Entities/`: Core entities (`Client`, `Product`, `Category`, `Order`)
* `Products/`: Product controller and logic
* `DTOs/InputData/`: Product and category input models
* `Controllers/`: Resource controllers
* `Auth/`: JWT generation
* `Data/`: EF Core context (SQLite)

---

### 🔐 Authentication

* Uses JWT with `Bearer` token in `Authorization` header
* Claims include `sub`, `email`, `slug`, `jti`
* Required for protected routes like creating/editing categories/products

---

### 📌 Entities

#### `Client`

* `Id`, `BusinessName`, `Slug`, `Email`, `PasswordHash`
* Relationships: Products, Categories, Orders

#### `Product`

* `Id`, `Name`, `Price`, `Ingredients`, `ImageUrl`
* Belongs to one `Category` and one `Client`

#### `Category`

* `Id`, `Name`, `ClientId`
* Belongs to one `Client`, has many `Products`

---

### 🔄 Business Rules

* Products **must** be assigned to a category.
* If not specified, they will default to the category "Others".
* Each `Client` can only manage their own items.
* Product ↔ Category is **one-to-many** now, with planned switch to **many-to-many** in the future.

---

### 🧪 Existing Routes

#### Authentication

```http
POST /api/Auth/login
```

---

#### Category

```http
GET    /api/Category
POST   /api/Category
PUT    /api/Category/{id}
DELETE /api/Category/{id}
```

---

#### Product

```http
GET    /api/Product
POST   /api/Product
PUT    /api/Product/{id}
DELETE /api/Product/{id}
```

---

#### Public Products

```http
GET /api/Product/public/{slug}
```

Query string options:

* `?category=pizzas`
* `?orderBy=name` or `orderBy=price`

Example:

```
http://localhost:5194/api/Product/public/4myfellas?category=pizzas&orderBy=price
```

---

### 💡 Future Plans (Saved Memory)

* Switch Product ↔ Category to many-to-many
* Implement Order system with daily history export (PDF)
* Build a public frontend using the `/public/{slug}` endpoint
* WhatsApp checkout system
* Multi-tenant with custom subdomains: `client.myapp.com`
* NGINX and Cloudflare WAF planned for production

---

### 🧪 Testing Tips

* Tools: Swagger (`/swagger`), Postman, Insomnia
* JWT needed for protected routes (use `Bearer {token}`)
* Tokens expire in 7 days
* Uses SQLite (`menu4myfellas.db`)

---