import React from 'react';
import { Button } from './ui/button';
import { categories } from '../data/mockData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className="flex items-center space-x-2"
      >
        <span>🍽️</span>
        <span>Todos</span>
      </Button>
      
      {categories.map(category => (
        <Button
          key={category.id}
          variant={selectedCategory === category.name ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category.name)}
          className="flex items-center space-x-2"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Button>
      ))}
    </div>
  );
};