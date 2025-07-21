import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Filter, X, Search } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { ProductGrid } from "../components/product/ProductGrid";
import { ProductFilters } from "../components/product/ProductFilters";
import { Button } from "../components/ui/Button";
import { products, filterOptions } from "../data/products";
import { useFilterStore } from "../store/filterStore";

export const CatalogPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();
  const { filters, searchQuery, setFilter, setSearchQuery } = useFilterStore();

  // Extraer los parámetros de la URL para aplicar filtros
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const categoria = searchParams.get("categoria");
    if (categoria) {
      setFilter("category", categoria);
    }

    const ocasion = searchParams.get("ocasion");
    if (ocasion) {
      setFilter("occasion", ocasion);
    }

    const estilo = searchParams.get("estilo");
    if (estilo) {
      setFilter("style", estilo);
    }

    const color = searchParams.get("color");
    if (color) {
      setFilter("color", color);
    }
  }, [location.search, setFilter]);

  return (
    <Layout>
      <div className="container-custom py-8 pt-32 md:pt-40 lg:pt-44">
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Catálogo de productos
          </h1>
          <p className="text-text-secondary max-w-3xl">
            Explora nuestra colección de arreglos florales, ramos, plantas y
            más. Usa los filtros para encontrar el producto perfecto para tu
            ocasión especial.
          </p>
        </div>

        {/* Barra de búsqueda y filtros mobile */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-bg-primary text-text-primary"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <Button
            variant="outline"
            className="lg:hidden"
            icon={<Filter size={18} />}
            onClick={() => setIsFilterOpen(true)}
          >
            Filtros
          </Button>
        </div>

        {/* Contenido principal y sidebar de filtros */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros (desktop) */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilters filterOptions={filterOptions} />
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1">
            {/* Filtros activos */}
            {Object.values(filters).some(
              (value) => value !== undefined && value !== false,
            ) && (
              <div className="mb-6 p-4 bg-bg-accent dark:bg-bg-secondary rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-text-primary">
                    Filtros activos
                  </h3>
                  <button
                    onClick={() => useFilterStore.getState().clearFilters()}
                    className="text-sm text-primary hover:underline"
                  >
                    Limpiar todos
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.category && (
                    <FilterTag
                      label={`Categoría: ${filters.category}`}
                      onRemove={() => setFilter("category", undefined)}
                    />
                  )}
                  {filters.style && (
                    <FilterTag
                      label={`Estilo: ${filters.style}`}
                      onRemove={() => setFilter("style", undefined)}
                    />
                  )}
                  {filters.occasion && (
                    <FilterTag
                      label={`Ocasión: ${filters.occasion}`}
                      onRemove={() => setFilter("occasion", undefined)}
                    />
                  )}
                  {filters.color && (
                    <FilterTag
                      label={`Color: ${filters.color}`}
                      onRemove={() => setFilter("color", undefined)}
                    />
                  )}
                  {filters.priceRange && (
                    <FilterTag
                      label={`Precio: $${filters.priceRange[0]} - $${filters.priceRange[1]}`}
                      onRemove={() => setFilter("priceRange", undefined)}
                    />
                  )}
                  {filters.inStockOnly && (
                    <FilterTag
                      label="Solo en stock"
                      onRemove={() => setFilter("inStockOnly", false)}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Grid de productos */}
            <ProductGrid
              products={products}
              filters={filters}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Modal de filtros (mobile) */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
            <div className="absolute inset-y-0 right-0 w-full max-w-md bg-bg-primary dark:bg-bg-secondary shadow-xl transition-transform animate-fade-in overflow-auto">
              <div className="p-1">
                <ProductFilters
                  filterOptions={filterOptions}
                  onClose={() => setIsFilterOpen(false)}
                  isMobile
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ label, onRemove }) => {
  return (
    <div className="inline-flex items-center bg-bg-primary dark:bg-bg-secondary rounded-full px-3 py-1 text-sm border border-gray-200 dark:border-gray-700">
      <span className="capitalize text-text-primary">{label}</span>
      <button
        onClick={onRemove}
        className="ml-2 text-gray-400 hover:text-gray-600"
        aria-label={`Eliminar filtro ${label}`}
      >
        <X size={14} />
      </button>
    </div>
  );
};
