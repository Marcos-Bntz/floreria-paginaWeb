import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  // Filtrar solo productos destacados
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Arreglos destacados
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Nuestras creaciones más populares, diseñadas con las mejores flores de temporada para 
              ocasiones especiales.
            </p>
          </div>
          <Link 
            to="/catalogo" 
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
          >
            Ver todo el catálogo
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};