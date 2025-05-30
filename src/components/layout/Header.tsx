import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Flower, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCartStore } from '../../store/cartStore';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { items } = useCartStore();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);
  
  const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Catálogo', path: '/catalogo' },
    { label: 'Ocasiones', path: '/ocasiones' },
    { label: 'Sobre Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' }
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Flower className="h-8 w-8 text-primary mr-2" strokeWidth={1.5} />
          <span className="font-heading text-2xl font-bold text-gray-800">Florelia</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                'font-medium transition-colors hover:text-primary',
                location.pathname === item.path ? 'text-primary' : 'text-gray-700'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
          
          <Link to="/mi-cuenta" className="p-2 text-gray-700 hover:text-primary transition-colors" aria-label="Mi cuenta">
            <User size={20} />
          </Link>
          
          <Link to="/carrito" className="relative p-2 text-gray-700 hover:text-primary transition-colors" aria-label="Carrito de compras">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/carrito" className="relative p-2 text-gray-700" aria-label="Carrito de compras">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <div className="container-custom">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20 animate-fade-in md:hidden overflow-auto">
          <div className="container-custom py-6 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={cn(
                    'py-2 text-lg font-medium border-b border-gray-100',
                    location.pathname === item.path ? 'text-primary' : 'text-gray-700'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                <Link to="/mi-cuenta">
                  <Button variant="outline" className="w-full justify-start" icon={<User size={18} />}>
                    Mi cuenta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};