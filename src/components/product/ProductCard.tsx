import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, CreditCard } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
import { useCartStore } from '../../store/cartStore';
import { cn } from '../../utils/cn';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const navigate = useNavigate();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/checkout', { 
      state: { 
        directPurchase: { product, quantity: 1 } 
      } 
    });
  };
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <Link to={`/producto/${product.id}`} className="block">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="product-card-img"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-md">
              Destacado
            </span>
          )}
          {!product.inStock && (
            <span className="bg-error text-white text-xs px-2 py-1 rounded-md">
              Agotado
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-8 h-8 bg-white dark:bg-bg-secondary rounded-full flex items-center justify-center shadow-md hover:bg-secondary dark:hover:bg-bg-accent transition-colors"
            aria-label="Agregar a favoritos"
          >
            <Heart size={16} className="text-gray-700 dark:text-text-secondary" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        {/* Name */}
        <Link to={`/producto/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-1 text-text-primary group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-heading text-lg font-semibold text-text-primary">
            ${product.price.toLocaleString('es-MX')}
          </span>
          
          {/* Stock indicator */}
          <div className={cn(
            "text-xs font-medium",
            product.stockQuantity > 5 
              ? "text-success" 
              : product.stockQuantity > 0 
                ? "text-warning" 
                : "text-error"
          )}>
            {product.stockQuantity > 5 
              ? "En stock" 
              : product.stockQuantity > 0 
                ? `¡Solo ${product.stockQuantity} disponibles!` 
                : "Agotado"}
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.occasion && (
            <span className="inline-block bg-accent dark:bg-bg-accent px-2 py-1 text-xs rounded-md text-text-primary">
              {product.occasion}
            </span>
          )}
          {product.style && (
            <span className="inline-block bg-accent dark:bg-bg-accent px-2 py-1 text-xs rounded-md text-text-primary">
              {product.style}
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="space-y-2">
          <Button 
            variant="primary"
            className="w-full"
            icon={<ShoppingCart size={16} />}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </Button>
          
          <Button 
            variant="outline"
            className="w-full"
            icon={<CreditCard size={16} />}
            disabled={!product.inStock}
            onClick={handleBuyNow}
          >
            Comprar ahora
          </Button>
        </div>
      </div>
    </div>
  );
};