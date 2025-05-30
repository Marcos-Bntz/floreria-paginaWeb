import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María Fernández',
    avatar: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'El arreglo floral que pedí para el cumpleaños de mi madre fue simplemente espectacular. Superó todas mis expectativas y el servicio de entrega fue puntual. Definitivamente volveré a comprar aquí.',
    date: '12/04/2024'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Mi esposa quedó encantada con el ramo de aniversario. La calidad de las flores es excepcional y duraron muchísimo tiempo. El proceso de compra fue muy sencillo y la entrega fue perfecta.',
    date: '28/03/2024'
  },
  {
    id: 3,
    name: 'Laura Torres',
    avatar: 'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    text: 'Compré un centro de mesa para una cena especial y todos mis invitados quedaron impresionados. El diseño era único y las flores estaban frescas. Lo único que podría mejorar es más opciones de entrega.',
    date: '15/03/2024'
  },
  {
    id: 4,
    name: 'Javier Ruiz',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'La corona que encargué para el funeral de un ser querido fue hermosa y digna. El equipo fue muy atento y comprensivo en un momento difícil. Agradezco su profesionalismo y cuidado.',
    date: '02/03/2024'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Opiniones de quienes han confiado en nosotros para sus momentos especiales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
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
              
              <p className="text-gray-600 text-sm mb-3">
                "{testimonial.text}"
              </p>
              
              <p className="text-xs text-gray-500">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};