import React, { useState } from 'react';
import { products, categories } from '../data/mockData';
import { Product } from './CartContext';

export const AdminProductManager: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    ingredients: '',
    image: '',
    category: 'Pizzas'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const product: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      ingredients: formData.ingredients,
      image: formData.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      category: formData.category
    };

    if (editingProduct) {
      setProductList(prev => prev.map(p => p.id === editingProduct.id ? product : p));
    } else {
      setProductList(prev => [...prev, product]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      ingredients: '',
      image: '',
      category: 'Pizzas'
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      ingredients: product.ingredients,
      image: product.image,
      category: product.category
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      setProductList(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h3>Produtos Cadastrados ({productList.length})</h3>
        <button
          className="button"
          onClick={() => setShowForm(true)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          Adicionar Produto
        </button>
      </div>

      {showForm && (
        <div className="overlay" onClick={(e) => e.target === e.currentTarget && resetForm()}>
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">
                {editingProduct ? 'Editar Produto' : 'Novo Produto'}
              </h3>
              <button className="modal-close" onClick={resetForm}>
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-content">
                <div className="form-group">
                  <label className="form-label">Nome do Produto</label>
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
                  <label className="form-label">Preço (R$)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="form-input"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Ingredientes/Descrição</label>
                  <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    rows={3}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">URL da Imagem</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Categoria</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    {categories.filter(cat => cat !== 'Todas').map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="button secondary" onClick={resetForm}>
                  Cancelar
                </button>
                <button type="submit" className="button">
                  {editingProduct ? 'Salvar Alterações' : 'Adicionar Produto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table" style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Imagem</th>
              <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Nome</th>
              <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Categoria</th>
              <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Preço</th>
              <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(product => (
              <tr key={product.id}>
                <td style={{ padding: '1rem' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: 'var(--border-radius)' }}
                  />
                </td>
                <td style={{ padding: '1rem' }}>
                  <strong>{product.name}</strong>
                  <br />
                  <small style={{ color: 'var(--gray-600)' }}>
                    {product.ingredients.length > 50 
                      ? product.ingredients.substring(0, 50) + '...' 
                      : product.ingredients
                    }
                  </small>
                </td>
                <td style={{ padding: '1rem' }}>{product.category}</td>
                <td style={{ padding: '1rem' }}>
                  <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      className="button small secondary"
                      onClick={() => handleEdit(product)}
                    >
                      Editar
                    </button>
                    <button
                      className="button small"
                      onClick={() => handleDelete(product.id)}
                      style={{ background: 'var(--pizza-red)' }}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};