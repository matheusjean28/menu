import React, { useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { useCart } from './CartContext';

interface CheckoutProps {
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  const { items, total, clearCart } = useCart();
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    paymentMethod: 'dinheiro',
    changeFor: '',
    observations: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem do pedido
    let message = `*🍕 NOVO PEDIDO - PIZZARIA BELLA*\n\n`;
    message += `*Cliente:* ${customerData.name}\n`;
    message += `*Telefone:* ${customerData.phone}\n`;
    message += `*Endereço:* ${customerData.address}, ${customerData.neighborhood}\n\n`;
    message += `*ITENS DO PEDIDO:*\n`;
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} - ${formatPrice(item.product.price * item.quantity)}\n`;
    });
    
    message += `\n*TOTAL: ${formatPrice(total)}*\n\n`;
    message += `*Forma de Pagamento:* ${customerData.paymentMethod.charAt(0).toUpperCase() + customerData.paymentMethod.slice(1)}`;
    
    if (customerData.paymentMethod === 'dinheiro' && customerData.changeFor) {
      message += `\n*Troco para:* R$ ${customerData.changeFor}`;
    }
    
    if (customerData.observations) {
      message += `\n*Observações:* ${customerData.observations}`;
    }
    
    // Enviar via WhatsApp
    const whatsappUrl = `https://wa.me/5515997220646?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho
    clearCart();
    
    // Voltar para o catálogo
    onBack();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-primary">Finalizar Pedido</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dados do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={customerData.address}
                  onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  id="neighborhood"
                  value={customerData.neighborhood}
                  onChange={(e) => setCustomerData({...customerData, neighborhood: e.target.value})}
                  required
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Forma de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={customerData.paymentMethod} 
                onValueChange={(value) => setCustomerData({...customerData, paymentMethod: value})}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dinheiro" id="dinheiro" />
                  <Label htmlFor="dinheiro">Dinheiro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix">PIX</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao">Cartão (débito/crédito)</Label>
                </div>
              </RadioGroup>
              
              {customerData.paymentMethod === 'dinheiro' && (
                <div className="mt-4">
                  <Label htmlFor="changeFor">Troco para (opcional)</Label>
                  <Input
                    id="changeFor"
                    type="number"
                    step="0.01"
                    value={customerData.changeFor}
                    onChange={(e) => setCustomerData({...customerData, changeFor: e.target.value})}
                    placeholder="Ex: 50.00"
                  />
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Observações</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={customerData.observations}
                onChange={(e) => setCustomerData({...customerData, observations: e.target.value})}
                placeholder="Instruções especiais, ponto de referência, etc."
              />
            </CardContent>
          </Card>
          
          <Card className="bg-pizza-cream">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Total do Pedido</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar Pedido via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};