import React from 'react';
import { useCart } from './CartContext';

interface HeaderProps {
  currentView: 'catalog' | 'cart' | 'checkout' | 'admin';
  onViewChange: (view: 'catalog' | 'cart' | 'checkout' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="#ff9800"/>
            <circle cx="12" cy="12" r="8" fill="#d32f2f"/>
            <circle cx="9" cy="9" r="1.5" fill="#ffc107"/>
            <circle cx="15" cy="9" r="1.5" fill="#4caf50"/>
            <circle cx="12" cy="15" r="1.5" fill="#ffc107"/>
            <circle cx="9" cy="15" r="1" fill="#ff5722"/>
            <circle cx="15" cy="15" r="1" fill="#ff5722"/>
          </svg>
          Pizzaria Bella
        </div>
        
        <nav className="nav">
          <button
            className={`nav-button ${currentView === 'catalog' ? 'active' : ''}`}
            onClick={() => onViewChange('catalog')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
            Cardápio
          </button>
          
          <button
            className={`nav-button ${currentView === 'cart' ? 'active' : ''}`}
            onClick={() => onViewChange('cart')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            Carrinho
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
          
          <button
            className={`nav-button ${currentView === 'admin' ? 'active' : ''}`}
            onClick={() => onViewChange('admin')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V5C15 3.9 14.1 3 13 3H11C9.9 3 9 3.9 9 5V5.5L3 7V9L9 10.5V19H11V10.5L21 9Z"/>
            </svg>
            Admin
          </button>
        </nav>
      </div>
    </header>
  );
};