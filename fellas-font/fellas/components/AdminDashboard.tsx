import React, { useState } from 'react';
import { LogOut, Package, BarChart3, Settings, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useAuth } from './AuthContext';
import { AdminProductManager } from './AdminProductManager';
import { AdminReports } from './AdminReports';

export const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-primary">Painel Administrativo</h2>
          <p className="text-muted-foreground">Bem-vindo, {user?.name}</p>
        </div>
        <Button variant="outline" onClick={logout}>
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="products" className="flex items-center space-x-2">
            <Package className="w-4 h-4" />
            <span>Produtos</span>
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Categorias</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Relatórios</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="mt-6">
          <AdminProductManager />
        </TabsContent>
        
        <TabsContent value="categories" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Categorias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Funcionalidade de gerenciamento de categorias será implementada em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <AdminReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};