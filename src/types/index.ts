export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  style: string;
  occasion: string;
  colors: string[];
  inStock: boolean;
  stockQuantity: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type FilterOptions = {
  styles: string[];
  occasions: string[];
  colors: string[];
  categories: string[];
};

export type ProductFilters = {
  style?: string;
  occasion?: string;
  color?: string;
  category?: string;
  priceRange?: [number, number];
  inStockOnly?: boolean;
};
