import { Product } from '../components/CartContext';

export const categories = [
  { id: '1', name: 'Pizzas', icon: '🍕' },
  { id: '2', name: 'Bebidas', icon: '🥤' },
  { id: '3', name: 'Acompanhamentos', icon: '🍟' },
  { id: '4', name: 'Sobremesas', icon: '🍰' }
];

export const products: Product[] = [
  // Pizzas
  {
    id: '1',
    name: 'Pizza Margherita',
    price: 35.90,
    ingredients: 'Molho de tomate, mussarela, manjericão, azeite',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    id: '2',
    name: 'Pizza Calabresa',
    price: 42.90,
    ingredients: 'Molho de tomate, mussarela, calabresa, cebola, orégano',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    id: '3',
    name: 'Pizza Pepperoni',
    price: 45.90,
    ingredients: 'Molho de tomate, mussarela, pepperoni, orégano',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    id: '4',
    name: 'Pizza Quatro Queijos',
    price: 48.90,
    ingredients: 'Molho branco, mussarela, gorgonzola, parmesão, provolone',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    id: '5',
    name: 'Pizza Portuguesa',
    price: 52.90,
    ingredients: 'Molho de tomate, mussarela, presunto, ovos, ervilha, cebola',
    image: 'https://images.unsplash.com/photo-1594007654729-04rushed9b10c?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    id: '6',
    name: 'Pizza Frango com Catupiry',
    price: 46.90,
    ingredients: 'Molho de tomate, mussarela, frango desfiado, catupiry, milho',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  
  // Bebidas
  {
    id: '7',
    name: 'Coca-Cola 350ml',
    price: 6.90,
    ingredients: 'Refrigerante de cola gelado',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    category: 'Bebidas'
  },
  {
    id: '8',
    name: 'Guaraná 350ml',
    price: 6.90,
    ingredients: 'Refrigerante de guaraná gelado',
    image: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=400&h=300&fit=crop',
    category: 'Bebidas'
  },
  {
    id: '9',
    name: 'Suco de Laranja 500ml',
    price: 8.90,
    ingredients: 'Suco natural de laranja',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
    category: 'Bebidas'
  },
  {
    id: '10',
    name: 'Água Mineral 500ml',
    price: 4.90,
    ingredients: 'Água mineral natural',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'Bebidas'
  },
  
  // Acompanhamentos
  {
    id: '11',
    name: 'Batata Frita',
    price: 18.90,
    ingredients: 'Batatas fritas crocantes temperadas',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Acompanhamentos'
  },
  {
    id: '12',
    name: 'Pão de Alho',
    price: 12.90,
    ingredients: 'Pão italiano com alho, manteiga e orégano',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop',
    category: 'Acompanhamentos'
  },
  {
    id: '13',
    name: 'Salada Verde',
    price: 15.90,
    ingredients: 'Mix de folhas verdes, tomate, cebola roxa, molho vinagrete',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'Acompanhamentos'
  },
  
  // Sobremesas
  {
    id: '14',
    name: 'Pudim de Leite',
    price: 16.90,
    ingredients: 'Pudim cremoso com calda de caramelo',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    category: 'Sobremesas'
  },
  {
    id: '15',
    name: 'Sorvete 2 Bolas',
    price: 14.90,
    ingredients: 'Duas bolas de sorvete (chocolate, baunilha ou morango)',
    image: 'https://images.unsplash.com/photo-1551024046-b3b2dd2d6a51?w=400&h=300&fit=crop',
    category: 'Sobremesas'
  }
];

export const salesData = [
  { id: '1', productName: 'Pizza Margherita', quantity: 12, total: 430.80, date: '2024-01-15' },
  { id: '2', productName: 'Pizza Calabresa', quantity: 8, total: 343.20, date: '2024-01-15' },
  { id: '3', productName: 'Pizza Pepperoni', quantity: 6, total: 275.40, date: '2024-01-14' },
  { id: '4', productName: 'Coca-Cola 350ml', quantity: 25, total: 172.50, date: '2024-01-14' },
  { id: '5', productName: 'Pizza Quatro Queijos', quantity: 4, total: 195.60, date: '2024-01-13' },
];