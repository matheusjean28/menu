import React, { useState } from 'react';
import { useCart } from './CartContext';

interface CheckoutProps {
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    paymentMethod: 'pix',
    observations: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Preparar mensagem do WhatsApp
    const orderItems = items.map(item => 
      `${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    const message = `🍕 *NOVO PEDIDO - Pizzaria Bella*

👤 *Cliente:* ${formData.name}
📱 *Telefone:* ${formData.phone}
📍 *Endereço:* ${formData.address}, ${formData.neighborhood}

📋 *Pedido:*
${orderItems}

💰 *Valor Total:* R$ ${(total + 5).toFixed(2).replace('.', ',')}
💳 *Forma de Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX' : formData.paymentMethod === 'card' ? 'Cartão' : 'Dinheiro'}

${formData.observations ? `📝 *Observações:* ${formData.observations}` : ''}

Aguardando confirmação! 🚚`;

    // Enviar para WhatsApp (substitua pelo número real da pizzaria)
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho e voltar
    clearCart();
    alert('Pedido enviado com sucesso! Você será redirecionado para o WhatsApp.');
    onBack();
    
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h2 className="empty-state-title">Carrinho vazio</h2>
          <p className="empty-state-description">
            Adicione itens ao carrinho antes de finalizar o pedido.
          </p>
          <button className="button" onClick={onBack}>
            Voltar ao Cardápio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Finalizar Pedido</h2>
          <button className="button secondary small" onClick={onBack}>
            Voltar
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card-content">
            <h3 style={{ marginBottom: '1rem' }}>Resumo do Pedido</h3>
            {items.map(item => (
              <div key={item.product.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem',
                padding: '0.5rem',
                background: 'var(--gray-100)',
                borderRadius: 'var(--border-radius)'
              }}>
                <span>{item.quantity}x {item.product.name}</span>
                <span>R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}</span>
              </div>
            ))}
            
            <div className="total-line final" style={{ marginTop: '1rem' }}>
              <span>Total + Taxa de entrega:</span>
              <span>R$ {(total + 5).toFixed(2).replace('.', ',')}</span>
            </div>

            <h3 style={{ margin: '2rem 0 1rem 0' }}>Dados do Cliente</h3>
            
            <div className="form-group">
              <label className="form-label">Nome Completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telefone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Endereço Completo *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Rua, número, complemento"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Bairro *</label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Forma de Pagamento *</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="pix">PIX</option>
                <option value="card">Cartão (na entrega)</option>
                <option value="cash">Dinheiro</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Observações</label>
              <textarea
                name="observations"
                value={formData.observations}
                onChange={handleInputChange}
                className="form-input form-textarea"
                placeholder="Alguma observação especial sobre o pedido..."
                rows={3}
              />
            </div>
          </div>

          <div className="card-footer">
            <button
              type="submit"
              className="button success"
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? (
                <>
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.24.69-1.77.93-2.01.24-.24.58-.29.77-.29s.41.01.59.11c.15.08.27.14.35.29.08.15.25.6.33.81.08.2.36.62.07.96-.29.34-.87.12-.87.12s-.13.88.35 1.36c.48.48 1.09.35 1.09.35s-.22-.58.12-.87c.27-.23.57-.05.57-.05z"/>
                  </svg>
                  Enviar Pedido via WhatsApp
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};