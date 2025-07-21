import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/preguntas" element={<FAQPage />} />
          <Route
            path="*"
            element={
              <Layout>
                <div className="container-custom py-16 text-center">
                  <h1 className="font-heading text-4xl font-bold text-text-primary mb-4">
                    404 - Página no encontrada
                  </h1>
                  <p className="text-text-secondary mb-8 text-lg">
                    Lo sentimos, la página que estás buscando no existe.
                  </p>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
