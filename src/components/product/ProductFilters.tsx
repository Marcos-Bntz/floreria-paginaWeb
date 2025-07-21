import React, { useState } from "react";
import { X, Filter } from "lucide-react";
import { FilterOptions } from "../../types";
import { useFilterStore } from "../../store/filterStore";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

interface ProductFiltersProps {
  filterOptions: FilterOptions;
  className?: string;
  onClose?: () => void;
  isMobile?: boolean;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filterOptions,
  className,
  onClose,
  isMobile = false,
}) => {
  const { filters, setFilter, clearFilters } = useFilterStore();
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange || [0, 2000],
  );

  const handlePriceChange = (value: number, index: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
    setFilter("priceRange", newRange);
  };

  const handleClearFilters = () => {
    clearFilters();
    setPriceRange([0, 2000]);
  };

  return (
    <div className={cn("bg-white p-6 rounded-lg", className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-medium text-xl text-gray-800 flex items-center">
          <Filter size={20} className="mr-2" />
          Filtros
        </h3>

        {isMobile && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar filtros"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Categorías */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Categorías</h4>
        <div className="space-y-2">
          {filterOptions.categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() =>
                  setFilter(
                    "category",
                    filters.category === category ? undefined : category,
                  )
                }
                className="form-radio text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-600 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Estilos */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Estilos</h4>
        <div className="space-y-2">
          {filterOptions.styles.map((style) => (
            <label key={style} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="style"
                checked={filters.style === style}
                onChange={() =>
                  setFilter(
                    "style",
                    filters.style === style ? undefined : style,
                  )
                }
                className="form-radio text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-600 capitalize">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ocasiones */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Ocasiones</h4>
        <div className="space-y-2">
          {filterOptions.occasions.map((occasion) => (
            <label key={occasion} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="occasion"
                checked={filters.occasion === occasion}
                onChange={() =>
                  setFilter(
                    "occasion",
                    filters.occasion === occasion ? undefined : occasion,
                  )
                }
                className="form-radio text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-600 capitalize">{occasion}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colores */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Colores</h4>
        <div className="flex flex-wrap gap-2">
          {filterOptions.colors.map((color) => (
            <button
              key={color}
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-all",
                filters.color === color
                  ? "border-primary scale-110"
                  : "border-transparent hover:border-gray-300",
              )}
              style={{
                backgroundColor: getColorHex(color),
              }}
              onClick={() =>
                setFilter("color", filters.color === color ? undefined : color)
              }
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Rango de precio */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Precio</h4>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">${priceRange[0]}</span>
            <span className="text-gray-600">${priceRange[1]}</span>
          </div>

          <div className="flex gap-4">
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Disponibilidad */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={() => setFilter("inStockOnly", !filters.inStockOnly)}
            className="form-checkbox text-primary focus:ring-primary"
          />
          <span className="ml-2 text-gray-600">Solo productos en stock</span>
        </label>
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleClearFilters}
        >
          Limpiar filtros
        </Button>

        {isMobile && (
          <Button variant="primary" className="flex-1" onClick={onClose}>
            Ver resultados
          </Button>
        )}
      </div>
    </div>
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
