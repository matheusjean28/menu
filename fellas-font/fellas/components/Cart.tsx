import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useCart } from './CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartProps {
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="mb-2">Seu carrinho está vazio</h3>
            <p className="text-muted-foreground">Adicione alguns itens deliciosos ao seu pedido!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-primary mb-6">Seu Carrinho</h2>
        
        <div className="space-y-4 mb-6">
          {items.map(item => (
            <Card key={item.product.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="mb-1">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {item.product.ingredients}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary">
                        {formatPrice(item.product.price)}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-pizza-cream">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Total do Pedido</span>
              <span className="text-primary">{formatPrice(total)}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={onCheckout} className="w-full bg-primary hover:bg-primary/90">
              Finalizar Pedido
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};