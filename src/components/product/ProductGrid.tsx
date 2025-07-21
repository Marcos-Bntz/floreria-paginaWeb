import React from "react";
import { ProductCard } from "./ProductCard";
import { Product, ProductFilters } from "../../types";

interface ProductGridProps {
  products: Product[];
  filters?: ProductFilters;
  searchQuery?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  filters = {},
  searchQuery = "",
}) => {
  // Aplicar filtros a los productos
  const filteredProducts = products.filter((product) => {
    // Filtrar por búsqueda
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filtrar por estilo
    if (filters.style && product.style !== filters.style) {
      return false;
    }

    // Filtrar por ocasión
    if (filters.occasion && product.occasion !== filters.occasion) {
      return false;
    }

    // Filtrar por color
    if (filters.color && !product.colors.includes(filters.color)) {
      return false;
    }

    // Filtrar por categoría
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Filtrar por rango de precios
    if (
      filters.priceRange &&
      (product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1])
    ) {
      return false;
    }

    // Filtrar por disponibilidad
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    return true;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          No hay productos que coincidan con tu búsqueda
        </h3>
        <p className="text-gray-500">
          Intenta con otros filtros o términos de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
