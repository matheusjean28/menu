import React from 'react';
import { useCart } from './CartContext';

interface CartProps {
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <div className="empty-state-icon">🛒</div>
          <h2 className="empty-state-title">Seu carrinho está vazio</h2>
          <p className="empty-state-description">
            Adicione alguns itens deliciosos do nosso cardápio!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Seu Carrinho</h2>
          <button
            className="button secondary small"
            onClick={clearCart}
          >
            Limpar Carrinho
          </button>
        </div>

        <div className="card-content">
          {items.map(item => (
            <div key={item.product.id} className="cart-item">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="cart-item-image"
              />
              
              <div className="cart-item-info">
                <h4 className="cart-item-name">{item.product.name}</h4>
                <p className="cart-item-price">
                  R$ {item.product.price.toFixed(2).replace('.', ',')} cada
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div style={{ marginLeft: '1rem' }}>
                <p className="cart-item-price">
                  R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                </p>
                <button
                  className="button secondary small"
                  onClick={() => removeFromCart(item.product.id)}
                  style={{ marginTop: '0.5rem' }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <div className="total-line">
            <span>Subtotal:</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="total-line">
            <span>Taxa de entrega:</span>
            <span>R$ 5,00</span>
          </div>
          <div className="total-line final">
            <span>Total:</span>
            <span>R$ {(total + 5).toFixed(2).replace('.', ',')}</span>
          </div>
          
          <button
            className="button success"
            onClick={onCheckout}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};