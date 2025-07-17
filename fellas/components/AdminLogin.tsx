import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (!success) {
      setError('Email ou senha incorretos. Tente admin@pizzaria.com / admin123');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <div className="card-header">
          <h2>Acesso Administrativo</h2>
          <p>Faça login para acessar o painel</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card-content">
            {error && (
              <div className="alert error">
                {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="admin@pizzaria.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="alert" style={{ background: '#e3f2fd', color: '#1976d2', border: '1px solid #1976d2' }}>
              <strong>Credenciais de demonstração:</strong><br />
              Email: admin@pizzaria.com<br />
              Senha: admin123
            </div>
          </div>

          <div className="card-footer">
            <button
              type="submit"
              className="button"
              disabled={isLoading}
              style={{ width: '100%' }}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};