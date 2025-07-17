import React from 'react';
import { salesData, categorySales } from '../data/mockData';

export const AdminReports: React.FC = () => {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalProducts = salesData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h3 style={{ marginBottom: '2rem' }}>Relatórios de Vendas - Últimos 30 dias</h3>

      {/* Cards de resumo */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem', 
        marginBottom: '3rem' 
      }}>
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: 'var(--pizza-green)', marginBottom: '0.5rem' }}>
              💰
            </div>
            <h4>Faturamento Total</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--pizza-red)' }}>
              R$ {totalRevenue.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: 'var(--pizza-orange)', marginBottom: '0.5rem' }}>
              📦
            </div>
            <h4>Produtos Vendidos</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--pizza-red)' }}>
              {totalProducts}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: 'var(--pizza-yellow)', marginBottom: '0.5rem' }}>
              📊
            </div>
            <h4>Ticket Médio</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--pizza-red)' }}>
              R$ {(totalRevenue / totalProducts).toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>

      {/* Vendas por Produto */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h4>Vendas por Produto</h4>
        </div>
        <div className="card-content">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Produto</th>
                  <th style={{ padding: '1rem', textAlign: 'center', background: 'var(--pizza-cream)' }}>Quantidade</th>
                  <th style={{ padding: '1rem', textAlign: 'right', background: 'var(--pizza-cream)' }}>Faturamento</th>
                  <th style={{ padding: '1rem', textAlign: 'center', background: 'var(--pizza-cream)' }}>Participação</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '1rem' }}>{item.product}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{item.quantity}</td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      R$ {item.revenue.toFixed(2).replace('.', ',')}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      {((item.revenue / totalRevenue) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Vendas por Categoria */}
      <div className="card">
        <div className="card-header">
          <h4>Vendas por Categoria</h4>
        </div>
        <div className="card-content">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', background: 'var(--pizza-cream)' }}>Categoria</th>
                  <th style={{ padding: '1rem', textAlign: 'center', background: 'var(--pizza-cream)' }}>Quantidade</th>
                  <th style={{ padding: '1rem', textAlign: 'right', background: 'var(--pizza-cream)' }}>Faturamento</th>
                  <th style={{ padding: '1rem', textAlign: 'center', background: 'var(--pizza-cream)' }}>Participação</th>
                </tr>
              </thead>
              <tbody>
                {categorySales.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '1rem' }}>
                      <strong>{item.category}</strong>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <strong>{item.quantity}</strong>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <strong>R$ {item.revenue.toFixed(2).replace('.', ',')}</strong>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <strong>{((item.revenue / categorySales.reduce((sum, cat) => sum + cat.revenue, 0)) * 100).toFixed(1)}%</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};