import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown, Sparkles, Heart, Flower } from 'lucide-react';
import { Button } from '../ui/Button';

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
    alt: 'Un ramo de flores sentado encima de una mesa de madera',
    title: 'Arreglos Profesionales'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80',
    alt: 'Una mujer sosteniendo un ramo de flores en sus manos',
    title: 'Experiencia Floral'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1589244159943-460088ed5c1b?auto=format&fit=crop&w=800&q=80',
    alt: 'Un ramo de flores está envuelto en papel marrón',
    title: 'Empaque Elegante'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80',
    alt: 'Un jarrón lleno de flores rosas y blancas',
    title: 'Diseños Únicos'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroImages.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="hero-section">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-accent-alt via-primary/20 to-bg-secondary dark:from-bg-primary dark:via-bg-secondary dark:to-bg-accent"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Content */}
          <div className="text-text-primary space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 bg-bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full border border-bg-accent">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text-primary">Florería Profesional</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow">
              Un ramo para cada ocasión.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              ¿Quieres enviar tus felicitaciones, condolencias o tu amor y apoyo? 
              No importa el mensaje que quieras compartir, tenemos un ramo para ti.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-text-secondary">Flores frescas garantizadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flower className="w-4 h-4 text-primary" />
                <span className="text-text-secondary">Diseños únicos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-text-secondary">Entrega profesional</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/catalogo">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="text-lg px-8 py-4 hover:bg-primary/90 transition-all duration-300 shadow-lg"
                >
                  VER TODAS LAS FLORES
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Carrusel de Imágenes */}
          <div className="relative lg:flex lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {heroImages.map((image, index) => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.alt}
                      className={`w-full h-[400px] object-cover transition-all duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute top-0 left-0'
                      }`}
                    />
                  ))}
                  
                  {/* Image Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-bg-primary/90 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-sm font-medium text-text-primary text-center">
                        {heroImages[currentSlide].title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Professional Badge */}
                <div className="absolute top-6 left-6 bg-bg-primary/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Flower className="w-5 h-5 text-primary" />
                    <span className="font-heading text-sm font-bold text-text-primary">Lotus</span>
                  </div>
                </div>
                
                {/* Quality Badge */}
                <div className="absolute bottom-6 right-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  Premium
                </div>
              </div>
              
              {/* Professional Stats */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-bg-primary/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-bg-accent">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">500+</div>
                    <div className="text-xs text-text-secondary">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Navigation */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-bg-primary/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors shadow-lg border border-bg-accent"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <div className="text-text-secondary text-sm font-medium bg-bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
            {currentSlide + 1} DE {totalSlides}
          </div>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-bg-primary/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors shadow-lg border border-bg-accent"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-primary' 
                    : 'bg-bg-accent dark:bg-bg-accent'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};