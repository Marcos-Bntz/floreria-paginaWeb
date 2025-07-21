import React from "react";
import { Link } from "react-router-dom";
import {
  Flower,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower className="w-8 h-8 text-primary" />
              <span className="font-heading text-2xl font-bold">Lotus</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Llevando belleza y alegría a cada ocasión con nuestros arreglos
              florales artesanales.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/catalogo"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ver Todo
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=flores"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Flores
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=plantas"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Plantas & Árboles
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=regalos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Regalos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">
              Atención al Cliente
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  to="/envios"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Información de Envío
                </Link>
              </li>
              <li>
                <Link
                  to="/devoluciones"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">
              Información de Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Calle de las Flores
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">hola@florelia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 Lotus. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacidad"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/terminos"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
