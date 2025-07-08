import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Buscas un arreglo personalizado?
            </h2>
            <p className="text-gray-600 mb-6">
              En Florelia podemos crear el arreglo floral perfecto para tu ocasión especial. 
              Nuestros diseñadores florales trabajarán contigo para crear una pieza única que 
              refleje tus gustos y necesidades.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Visítanos</h4>
                  <p className="text-gray-600">Av. de las Flores 123, Col. Jardines, Ciudad de México</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Horario</h4>
                  <p className="text-gray-600">Lunes a Sábado: 9:00 - 19:00<br />Domingo: 10:00 - 14:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Contáctanos</h4>
                  <p className="text-gray-600">+52 55 1234 5678<br />info@florelia.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button variant="primary" size="lg">
                  Solicitar cotización
                </Button>
              </Link>
              <a href="https://wa.me/5212345678" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">
                  WhatsApp directo
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Diseñadora floral trabajando" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <img 
                src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Arreglo floral personalizado" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};