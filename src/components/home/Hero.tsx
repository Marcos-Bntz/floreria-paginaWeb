import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2111192/pexels-photo-2111192.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Flores hermosas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Flores para cada momento especial
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
            Diseños únicos creados con pasión y dedicación para expresar tus sentimientos en cualquier ocasión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Link to="/catalogo">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
              >
                Ver catálogo
              </Button>
            </Link>
            <Link to="/contacto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white text-white hover:bg-white/20"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};