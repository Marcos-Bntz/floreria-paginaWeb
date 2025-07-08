import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FloreriaImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

const floreriaImages: FloreriaImage[] = [
  {
    id: 1,
    title: 'Florería Jardín Secreto',
    description: 'Especialistas en arreglos románticos y bodas. Más de 20 años creando momentos únicos.',
    imageUrl: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Centro Histórico'
  },
  {
    id: 2,
    title: 'Flores del Valle',
    description: 'Arreglos frescos diarios con las mejores flores de temporada. Entrega a domicilio.',
    imageUrl: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Zona Rosa'
  },
  {
    id: 3,
    title: 'Botánica Moderna',
    description: 'Diseños contemporáneos y plantas exóticas. Perfectos para espacios modernos.',
    imageUrl: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Polanco'
  },
  {
    id: 4,
    title: 'Rosas y Más',
    description: 'La mayor variedad de rosas importadas y nacionales. Especialistas en San Valentín.',
    imageUrl: 'https://images.pexels.com/photos/1070947/pexels-photo-1070947.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Condesa'
  },
  {
    id: 5,
    title: 'Florería Artesanal',
    description: 'Arreglos únicos hechos a mano con técnicas tradicionales y flores silvestres.',
    imageUrl: 'https://images.pexels.com/photos/1070948/pexels-photo-1070948.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Coyoacán'
  }
];

export const FloreriaCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === floreriaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? floreriaImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === floreriaImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Nuestras Florerías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras ubicaciones especializadas, cada una con su propio estilo y 
            especialidad para brindarte la mejor experiencia floral.
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main carousel container */}
          <div className="relative h-[500px] md:h-[600px]">
            {floreriaImages.map((floreria, index) => (
              <div
                key={floreria.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <img
                  src={floreria.imageUrl}
                  alt={floreria.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">
                    <div className="inline-block bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {floreria.location}
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                      {floreria.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                      {floreria.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {floreriaImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-white scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / floreriaImages.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-2">
          {floreriaImages.map((floreria, index) => (
            <button
              key={floreria.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
                index === currentIndex 
                  ? "border-primary scale-110 shadow-lg" 
                  : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={floreria.imageUrl}
                alt={floreria.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};