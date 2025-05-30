import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/contacto" element={
          <Layout>
            <div className="container-custom py-16">
              <h1 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
                Página en construcción
              </h1>
              <p className="text-center text-gray-600">
                Esta página estará disponible próximamente.
              </p>
            </div>
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <div className="container-custom py-16 text-center">
              <h1 className="font-heading text-4xl font-bold text-gray-800 mb-4">
                404 - Página no encontrada
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Lo sentimos, la página que estás buscando no existe.
              </p>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;