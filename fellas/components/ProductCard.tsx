import React from 'react';
import { Product, useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-ingredients">{product.ingredients}</p>
        
        <div className="product-footer">
          <span className="product-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button
            className="button small"
            onClick={handleAddToCart}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 7v4H5.83l-.42-2H15V7h4zm-4 12a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2zm-8 0a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2zm-1-5h10l.94-2H5.24l-.94 2H6z"/>
            </svg>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};