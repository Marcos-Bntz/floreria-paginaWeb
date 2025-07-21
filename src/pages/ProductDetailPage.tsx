import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Share2,
  Truck,
  ShoppingBag,
  ChevronRight,
  Minus,
  Plus,
  Check,
  CreditCard,
} from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import { ProductGrid } from "../components/product/ProductGrid";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { cn } from "../utils/cn";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const navigate = useNavigate();

  // Buscar el producto por ID
  const product = products.find((p) => p.id === id);

  // Productos relacionados (de la misma categoría)
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== id &&
        (p.category === product?.category || p.occasion === product?.occasion),
    )
    .slice(0, 4);

  // Si no se encuentra el producto
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-gray-800 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el producto que estás buscando no existe o ha sido
            removido.
          </p>
          <Link to="/catalogo">
            <Button variant="primary">Volver al catálogo</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        directPurchase: { product, quantity },
      },
    });
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(value, product.stockQuantity)));
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary">
            Inicio
          </Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/catalogo" className="text-gray-500 hover:text-primary">
            Catálogo
          </Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link
            to={`/catalogo?categoria=${product.category}`}
            className="text-gray-500 hover:text-primary capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-700 truncate max-w-[150px]">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Imagen del producto */}
          <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información del producto */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="uppercase text-sm font-medium text-text-secondary tracking-wider">
                  {product.category}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="p-2 text-text-secondary hover:text-primary rounded-full hover:bg-accent dark:hover:bg-accent/20 transition-colors"
                    aria-label="Agregar a favoritos"
                  >
                    <Heart size={20} />
                  </button>
                  <button
                    className="p-2 text-text-secondary hover:text-primary rounded-full hover:bg-accent dark:hover:bg-accent/20 transition-colors"
                    aria-label="Compartir"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-2xl font-semibold text-text-primary">
                  ${product.price.toLocaleString("es-MX")}
                </span>

                {/* Disponibilidad */}
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    product.inStock
                      ? "bg-success/10 text-success"
                      : "bg-error/10 text-error",
                  )}
                >
                  {product.inStock ? "En stock" : "Agotado"}
                </div>
              </div>

              <p className="text-text-secondary mb-6">{product.description}</p>

              {/* Etiquetas */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.style && (
                  <div className="bg-accent dark:bg-accent/20 px-3 py-1 rounded-full text-sm text-text-primary">
                    Estilo:{" "}
                    <span className="font-medium capitalize">
                      {product.style}
                    </span>
                  </div>
                )}

                {product.occasion && (
                  <div className="bg-accent dark:bg-accent/20 px-3 py-1 rounded-full text-sm text-text-primary">
                    Ocasión:{" "}
                    <span className="font-medium capitalize">
                      {product.occasion}
                    </span>
                  </div>
                )}

                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="bg-accent dark:bg-accent/20 px-3 py-1 rounded-full text-sm text-text-primary flex items-center"
                  >
                    <div
                      className="w-3 h-3 rounded-full mr-1"
                      style={{ backgroundColor: getColorHex(color) }}
                    ></div>
                    <span className="capitalize">{color}</span>
                  </div>
                ))}
              </div>

              {/* Cantidad */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Cantidad
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-l-md text-text-secondary hover:bg-accent dark:hover:bg-accent/20 disabled:opacity-50"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value))
                    }
                    min="1"
                    max={product.stockQuantity}
                    className="w-16 text-center border-y border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600 bg-bg-primary text-text-primary"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stockQuantity}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-r-md text-text-secondary hover:bg-accent dark:hover:bg-accent/20 disabled:opacity-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  icon={<ShoppingBag size={18} />}
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  icon={<CreditCard size={18} />}
                  disabled={!product.inStock}
                  onClick={handleBuyNow}
                >
                  Comprar ahora
                </Button>
              </div>

              {/* Información de envío */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-start mb-3">
                  <Truck
                    className="text-primary mt-0.5 mr-2 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Envío a domicilio
                    </h4>
                    <p className="text-sm text-gray-600">
                      Entrega estimada: 24-48 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check
                    className="text-primary mt-0.5 mr-2 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Satisfacción garantizada
                    </h4>
                    <p className="text-sm text-gray-600">
                      Flores frescas con garantía de 7 días
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              También te puede interesar
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

// Función para obtener el valor hexadecimal del color
const getColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    rojo: "#e53e3e",
    rosa: "#ed64a6",
    blanco: "#ffffff",
    amarillo: "#ecc94b",
    naranja: "#ed8936",
    morado: "#805ad5",
    azul: "#4299e1",
    verde: "#48bb78",
  };

  return colorMap[color] || "#cbd5e0";
};
