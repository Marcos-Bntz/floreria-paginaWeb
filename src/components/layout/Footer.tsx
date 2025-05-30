import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Flower } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Flower className="h-8 w-8 text-primary mr-2" strokeWidth={1.5} />
              <span className="font-heading text-2xl font-bold text-gray-800">Florelia</span>
            </Link>
            <p className="text-gray-600 pr-4">
              Creamos arreglos florales únicos y hermosos para todas las ocasiones especiales de tu vida.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4 text-gray-800">Enlaces útiles</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalogo" className="text-gray-600 hover:text-primary transition-colors">Catálogo de productos</Link>
              </li>
              <li>
                <Link to="/ocasiones" className="text-gray-600 hover:text-primary transition-colors">Flores por ocasión</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-600 hover:text-primary transition-colors">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-primary transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog y consejos</Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4 text-gray-800">Información</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/envios" className="text-gray-600 hover:text-primary transition-colors">Políticas de envío</Link>
              </li>
              <li>
                <Link to="/devoluciones" className="text-gray-600 hover:text-primary transition-colors">Devoluciones</Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="text-gray-600 hover:text-primary transition-colors">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-600 hover:text-primary transition-colors">Términos y condiciones</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-600 hover:text-primary transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4 text-gray-800">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Av. de las Flores 123, Col. Jardines, Ciudad de México</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:+525512345678" className="text-gray-600 hover:text-primary transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@florelia.com" className="text-gray-600 hover:text-primary transition-colors">
                  info@florelia.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-gray-800 mb-2">Horario de atención</h4>
              <p className="text-gray-600">Lunes a Sábado: 9:00 - 19:00</p>
              <p className="text-gray-600">Domingo: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="font-heading text-lg font-medium mb-3 text-gray-800">Suscríbete a nuestro boletín</h3>
            <p className="text-gray-600 mb-4">Recibe información sobre ofertas especiales y consejos de cuidado de flores.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded-l-md border-gray-300 focus:ring-primary focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Florelia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};