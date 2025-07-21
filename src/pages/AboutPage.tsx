import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Flower, 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Cliente frecuente",
      content: "Lotus ha sido mi floristería de confianza por más de 3 años. Sus arreglos son únicos y siempre llegan perfectos.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Organizador de eventos",
      content: "Para todos mis eventos uso Lotus. Su atención al detalle y creatividad son excepcionales.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Novia",
      content: "Mi ramo de novia fue perfecto. El equipo de Lotus entendió exactamente lo que quería.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  const stats = [
    { number: "500+", label: "Arreglos entregados" },
    { number: "50+", label: "Eventos especiales" },
    { number: "98%", label: "Clientes satisfechos" },
    { number: "5", label: "Años de experiencia" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Flower className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Sobre Lotus
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Somos una boutique floral artesanal dedicada a crear momentos mágicos a través de 
              arreglos florales únicos y experiencias personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Lotus nació de la pasión por las flores y el deseo de crear conexiones emocionales 
                  a través de la belleza natural. Fundada en 2019, comenzamos como un pequeño taller 
                  en el corazón de San Francisco.
                </p>
                <p>
                  Nuestro equipo de diseñadores florales combina técnicas tradicionales con un enfoque 
                  moderno, creando arreglos que no solo son visualmente impactantes, sino que también 
                  cuentan una historia.
                </p>
                <p>
                  Cada flor que seleccionamos, cada ramo que creamos, está pensado para transmitir 
                  emociones y crear momentos inolvidables en la vida de nuestros clientes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6698378/pexels-photo-6698378.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nuestro equipo trabajando"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-bg-accent dark:bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Estos principios guían cada decisión que tomamos y cada arreglo que creamos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                Pasión por la Excelencia
              </h3>
              <p className="text-text-secondary">
                Cada arreglo es una obra de arte única, creada con dedicación y atención al más mínimo detalle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                Calidad Premium
              </h3>
              <p className="text-text-secondary">
                Trabajamos solo con las mejores flores y materiales para garantizar la frescura y durabilidad.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                Servicio Personalizado
              </h3>
              <p className="text-text-secondary">
                Cada cliente es único. Nos tomamos el tiempo para entender sus necesidades y crear algo especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-bg-accent dark:bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-secondary italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Visítanos
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Dirección</h3>
                    <p className="text-text-secondary">
                      123 Calle de las Flores<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Teléfono</h3>
                    <p className="text-text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                    <p className="text-text-secondary">hola@lotus.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Horarios</h3>
                    <p className="text-text-secondary">
                      Lunes - Sábado: 9:00 AM - 7:00 PM<br />
                      Domingo: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5702385/pexels-photo-5702385.jpeg"
                alt="Nuestra tienda"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para crear algo especial?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Permítenos ayudarte a crear el arreglo floral perfecto para tu ocasión especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Catálogo
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="primary" size="lg">
                Contactarnos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}; 