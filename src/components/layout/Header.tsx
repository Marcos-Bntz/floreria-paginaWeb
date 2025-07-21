import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Flower, Sun, Moon } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useCartStore();
  const { theme, toggleTheme } = useTheme();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Función para navegar y hacer scroll al top
  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    // Hacer scroll al top instantáneamente sin animación
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const menuItems = [
    { label: 'Tienda', path: '/catalogo' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Preguntas', path: '/preguntas' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-bg-primary/95 backdrop-blur-sm shadow-lg border-b border-bg-accent dark:border-bg-accent"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Flower className={cn(
                "w-8 h-8 transition-all duration-200 group-hover:scale-110",
                "text-primary"
              )} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className={cn(
                "font-heading text-2xl font-bold transition-colors duration-200",
                "text-text-primary"
              )}>
                Lotus
              </span>
              <div className="text-xs text-text-secondary font-medium">Florería Profesional</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-all duration-200 hover:text-primary relative group",
                  "text-text-primary"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart with Badge */}
            <Link to="/carrito" className="relative group">
              <div className="p-2 rounded-full bg-bg-accent dark:bg-bg-accent hover:bg-primary hover:text-white transition-all duration-200">
                <ShoppingCart className="w-5 h-5" />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-200 hover:bg-bg-accent dark:hover:bg-bg-secondary group",
                "text-text-primary"
              )}
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              ) : (
                <Sun className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 transition-colors duration-200",
                "text-text-primary"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left px-4 py-2 text-text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};