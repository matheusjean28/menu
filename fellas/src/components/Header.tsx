import React from 'react';
import { ShoppingCart, User, Pizza } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from './CartContext';

interface HeaderProps {
  currentView: 'catalog' | 'cart' | 'checkout' | 'admin';
  onViewChange: (view: 'catalog' | 'cart' | 'checkout' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('catalog')}
          >
            <div className="bg-primary p-2 rounded-full">
              <Pizza className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-primary">Pizzaria Bella</h1>
              <p className="text-sm text-muted-foreground">Delivery &amp; Balcão</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button 
              variant={currentView === 'catalog' ? 'default' : 'ghost'}
              onClick={() => onViewChange('catalog')}
              className="hidden md:inline-flex"
            >
              Menu
            </Button>
            
            <Button 
              variant={currentView === 'cart' ? 'default' : 'ghost'}
              onClick={() => onViewChange('cart')}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Carrinho</span>
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-white min-w-5 h-5 flex items-center justify-center rounded-full p-0">
                  {itemCount}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant={currentView === 'admin' ? 'default' : 'ghost'}
              onClick={() => onViewChange('admin')}
            >
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Admin</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};