import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  occasion?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María y Carlos',
    avatar: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Nuestro ramo de novia fue el toque perfecto para nuestra boda. Las flores estaban frescas y el diseño era exactamente lo que queríamos. Todos nuestros invitados quedaron impresionados.',
    date: '15/04/2024',
    occasion: 'Boda'
  },
  {
    id: 2,
    name: 'Laura Torres',
    avatar: 'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    text: 'Compré un centro de mesa para una cena especial y todos mis invitados quedaron impresionados. El diseño era único y las flores estaban frescas.',
    date: '15/03/2024',
    occasion: 'Cena especial'
  },
  {
    id: 3,
    name: 'Ana y Roberto',
    avatar: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Los arreglos para nuestro aniversario de bodas fueron espectaculares. El servicio fue excepcional y las flores duraron más de dos semanas. Definitivamente volveremos.',
    date: '28/03/2024',
    occasion: 'Aniversario'
  },
  {
    id: 4,
    name: 'Javier Ruiz',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La corona que encargué para el funeral de un ser querido fue hermosa y digna. El equipo fue muy atento y comprensivo en un momento difícil.',
    date: '02/03/2024',
    occasion: 'Funeral'
  },
  {
    id: 5,
    name: 'Sofía y Miguel',
    avatar: 'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Nuestros ramos de novia y novio fueron perfectos. La coordinación con el florista fue excelente y el resultado superó nuestras expectativas.',
    date: '10/04/2024',
    occasion: 'Boda'
  },
  {
    id: 6,
    name: 'Carmen Fernández',
    avatar: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'El arreglo floral que pedí para el cumpleaños de mi madre fue simplemente espectacular. Superó todas mis expectativas y el servicio de entrega fue puntual.',
    date: '12/04/2024',
    occasion: 'Cumpleaños'
  },
  {
    id: 7,
    name: 'Patricia y Diego',
    avatar: 'https://images.pexels.com/photos/1024999/pexels-photo-1024999.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Los centros de mesa para nuestra boda fueron hermosos. Cada mesa tenía un diseño único pero coordinado. Nuestros invitados no paraban de tomar fotos.',
    date: '05/04/2024',
    occasion: 'Boda'
  },
  {
    id: 8,
    name: 'Isabel Mendoza',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    text: 'El ramo de compromiso que pedí fue perfecto. Las rosas estaban en su punto y el diseño era elegante y romántico. Mi novio quedó muy impresionado.',
    date: '20/03/2024',
    occasion: 'Compromiso'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-bg-primary dark:bg-bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Opiniones de quienes han confiado en nosotros para sus momentos especiales
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-bg-secondary dark:bg-bg-secondary p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                {testimonial.occasion && (
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-md">
                    {testimonial.occasion}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={14}
                        fill={i < testimonial.rating ? "#FACC15" : "none"}
                        stroke={i < testimonial.rating ? "#FACC15" : "#CBD5E0"}
                        className="mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="text-xs text-text-secondary/70">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-bg-accent dark:bg-bg-accent hover:bg-primary hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-bg-accent dark:bg-bg-accent'
                  }`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-bg-accent dark:bg-bg-accent hover:bg-primary hover:text-white transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};