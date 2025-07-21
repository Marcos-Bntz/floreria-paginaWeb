import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'flores',
    name: 'Flores',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hermosos ramos y arreglos',
    count: 24
  },
  {
    id: 'plantas',
    name: 'Plantas & Árboles',
    image: 'https://images.pexels.com/photos/6551854/pexels-photo-6551854.jpeg',
    description: 'Plantas de interior y exterior',
    count: 18
  },
  {
    id: 'regalos',
    name: 'Regalos',
    image: 'https://images.pexels.com/photos/5745371/pexels-photo-5745371.jpeg',
    description: 'Colecciones de regalos curados',
    count: 12
  }
];

export const Categories: React.FC = () => {
  return (
    <section className="relative py-20">
      {/* Background Split */}
      <div className="absolute inset-0">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-secondary"></div>
          <div className="bg-accent"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            NUESTROS PRODUCTOS
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalogo?categoria=${category.id}`}
              className="group"
            >
              <div className="category-card bg-bg-primary dark:bg-bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                      {category.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <p className="text-text-secondary mt-2 text-sm">
                    {category.count} productos disponibles
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/catalogo">
            <button className="inline-flex items-center space-x-2 bg-dark text-white px-8 py-4 rounded-lg hover:bg-primary transition-colors duration-200 font-medium">
              <span>Ver Todos los Productos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};