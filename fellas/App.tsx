import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductCatalog } from './components/ProductCatalog';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { CartProvider } from './components/CartContext';
import { AuthProvider, useAuth } from './components/AuthContext';
import './styles/globals.css';

type View = 'catalog' | 'cart' | 'checkout' | 'admin';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const { user } = useAuth();

  const handleViewChange = (view: View) => {
    setCurrentView(view);
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const handleBackToCatalog = () => {
    setCurrentView('catalog');
  };

  return (
    <div className="app">
      <Header currentView={currentView} onViewChange={handleViewChange} />
      
      <main className="main-content">
        {currentView === 'catalog' && <ProductCatalog />}
        {currentView === 'cart' && <Cart onCheckout={handleCheckout} />}
        {currentView === 'checkout' && <Checkout onBack={handleBackToCatalog} />}
        {currentView === 'admin' && (
          user ? <AdminDashboard /> : <AdminLogin />
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}