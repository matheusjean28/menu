import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AdminProductManager } from './AdminProductManager';
import { AdminReports } from './AdminReports';

type AdminView = 'products' | 'reports';

export const AdminDashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<AdminView>('products');
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div>
            <h2>Painel Administrativo</h2>
            <p>Bem-vindo, {user?.name}!</p>
          </div>
          <button className="button secondary" onClick={logout}>
            Sair
          </button>
        </div>

        <div className="nav" style={{ padding: '1rem', borderBottom: '1px solid var(--gray-200)' }}>
          <button
            className={`nav-button ${currentView === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentView('products')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Gerenciar Produtos
          </button>
          
          <button
            className={`nav-button ${currentView === 'reports' ? 'active' : ''}`}
            onClick={() => setCurrentView('reports')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            Relatórios
          </button>
        </div>

        <div className="card-content">
          {currentView === 'products' && <AdminProductManager />}
          {currentView === 'reports' && <AdminReports />}
        </div>
      </div>
    </div>
  );
};