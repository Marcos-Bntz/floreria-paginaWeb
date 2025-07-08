import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'ramos',
    name: 'Ramos',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ramos elegantes para toda ocasión',
    count: 24
  },
  {
    id: 'arreglos',
    name: 'Arreglos',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Composiciones florales únicas',
    count: 18
  },
  {
    id: 'plantas',
    name: 'Plantas',
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Plantas ornamentales y de interior',
    count: 15
  },
  {
    id: 'ocasiones',
    name: 'Ocasiones especiales',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Arreglos para bodas y eventos',
    count: 22
  }
];

export const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Explora nuestras categorías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia variedad de opciones para cada ocasión y espacio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/catalogo?categoria=${category.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",
                  "flex flex-col justify-end p-6 text-white"
                )}>
                  <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium">
                    {category.count} productos
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};