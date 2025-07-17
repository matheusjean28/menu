import { Product } from '../components/CartContext';

export const products: Product[] = [
  // Pizzas
  {
    id: '1',
    name: 'Pizza Margherita',
    price: 32.90,
    ingredients: 'Molho de tomate, mussarela, manjericão fresco, azeite',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400',
    category: 'Pizzas'
  },
  {
    id: '2',
    name: 'Pizza Pepperoni',
    price: 38.90,
    ingredients: 'Molho de tomate, mussarela, pepperoni, orégano',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400',
    category: 'Pizzas'
  },
  {
    id: '3',
    name: 'Pizza Quatro Queijos',
    price: 41.90,
    ingredients: 'Molho branco, mussarela, gorgonzola, parmesão, provolone',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
    category: 'Pizzas'
  },
  {
    id: '4',
    name: 'Pizza Portuguesa',
    price: 45.90,
    ingredients: 'Molho de tomate, mussarela, presunto, ovos, cebola, azeitona',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400',
    category: 'Pizzas'
  },
  {
    id: '5',
    name: 'Pizza Calabresa',
    price: 36.90,
    ingredients: 'Molho de tomate, mussarela, calabresa, cebola, orégano',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    category: 'Pizzas'
  },
  {
    id: '6',
    name: 'Pizza Vegetariana',
    price: 39.90,
    ingredients: 'Molho de tomate, mussarela, abobrinha, berinjela, pimentão, tomate cereja',
    image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=400',
    category: 'Pizzas'
  },

  // Bebidas
  {
    id: '7',
    name: 'Coca-Cola 350ml',
    price: 6.90,
    ingredients: 'Refrigerante de cola gelado',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400',
    category: 'Bebidas'
  },
  {
    id: '8',
    name: 'Suco de Laranja 500ml',
    price: 8.90,
    ingredients: 'Suco natural de laranja',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400',
    category: 'Bebidas'
  },
  {
    id: '9',
    name: 'Água Mineral 500ml',
    price: 3.50,
    ingredients: 'Água mineral natural',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400',
    category: 'Bebidas'
  },
  {
    id: '10',
    name: 'Cerveja Heineken 350ml',
    price: 12.90,
    ingredients: 'Cerveja premium gelada',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
    category: 'Bebidas'
  },

  // Acompanhamentos
  {
    id: '11',
    name: 'Batata Frita Grande',
    price: 18.90,
    ingredients: 'Batatas cortadas e fritas, temperadas com sal',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e4d224975?w=400',
    category: 'Acompanhamentos'
  },
  {
    id: '12',
    name: 'Porção de Anéis de Cebola',
    price: 16.90,
    ingredients: 'Anéis de cebola empanados e fritos',
    image: 'https://images.unsplash.com/photo-1619740454712-b38b21cabf6e?w=400',
    category: 'Acompanhamentos'
  },
  {
    id: '13',
    name: 'Pão de Alho',
    price: 12.90,
    ingredients: 'Pão italiano com manteiga de alho e queijo',
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400',
    category: 'Acompanhamentos'
  },

  // Sobremesas
  {
    id: '14',
    name: 'Pudim de Leite',
    price: 14.90,
    ingredients: 'Pudim cremoso com calda de caramelo',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    category: 'Sobremesas'
  },
  {
    id: '15',
    name: 'Sorvete de Chocolate',
    price: 12.90,
    ingredients: '2 bolas de sorvete de chocolate com cobertura',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400',
    category: 'Sobremesas'
  },
  {
    id: '16',
    name: 'Torta de Morango',
    price: 16.90,
    ingredients: 'Fatia de torta com morangos frescos e chantilly',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
    category: 'Sobremesas'
  }
];

export const categories = ['Todas', 'Pizzas', 'Bebidas', 'Acompanhamentos', 'Sobremesas'];

// Dados simulados de vendas para relatórios
export const salesData = [
  { product: 'Pizza Margherita', quantity: 45, revenue: 1480.50 },
  { product: 'Pizza Pepperoni', quantity: 38, revenue: 1478.20 },
  { product: 'Pizza Quatro Queijos', quantity: 32, revenue: 1340.80 },
  { product: 'Pizza Portuguesa', quantity: 28, revenue: 1285.20 },
  { product: 'Pizza Calabresa', quantity: 35, revenue: 1291.50 },
  { product: 'Coca-Cola 350ml', quantity: 125, revenue: 862.50 },
  { product: 'Batata Frita Grande', quantity: 42, revenue: 793.80 },
  { product: 'Cerveja Heineken 350ml', quantity: 48, revenue: 619.20 }
];

export const categorySales = [
  { category: 'Pizzas', quantity: 178, revenue: 6876.20 },
  { category: 'Bebidas', quantity: 248, revenue: 1842.30 },
  { category: 'Acompanhamentos', quantity: 89, revenue: 1456.70 },
  { category: 'Sobremesas', quantity: 34, revenue: 501.60 }
];