import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { products } from '../data/mockData';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h2 className="text-primary mb-2">Nosso Cardápio</h2>
        <p className="text-muted-foreground">Escolha seus sabores favoritos</p>
      </div>
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};