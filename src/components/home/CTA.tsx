import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/6698378/pexels-photo-6698378.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Florista trabajando en la tienda"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/20"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-bg-accent dark:bg-bg-secondary p-12 rounded-lg">
            <div className="space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <Leaf className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
                Sobre Nosotros
              </h2>

              {/* Description */}
              <p className="text-text-secondary text-lg leading-relaxed">
                Somos una pequeña boutique botánica familiar ubicada en San Francisco, CA. 
                Ayudamos a las personas a difundir el amor a través de nuestros arreglos florales 
                artesanales, plantas y regalos curados.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/nosotros">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-dark text-dark hover:bg-dark hover:text-white transition-all duration-300"
                  >
                    SABER MÁS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};