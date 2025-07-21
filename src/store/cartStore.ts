import { create } from "zustand";
import { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,

  addItem: (product: Product, quantity: number) => {
    const { items } = get();
    const existingItem = items.find((item) => item.product.id === product.id);

    if (existingItem) {
      const newQuantity = Math.min(
        existingItem.quantity + quantity,
        product.stockQuantity,
      );
      get().updateQuantity(product.id, newQuantity);
      return;
    }

    const newItems = [
      ...items,
      { product, quantity: Math.min(quantity, product.stockQuantity) },
    ];
    set({ items: newItems });
    get().calculateTotals();
  },

  removeItem: (productId: string) => {
    const { items } = get();
    const newItems = items.filter((item) => item.product.id !== productId);
    set({ items: newItems });
    get().calculateTotals();
  },

  updateQuantity: (productId: string, quantity: number) => {
    const { items } = get();
    const newItems = items.map((item) => {
      if (item.product.id === productId) {
        const validQuantity = Math.max(
          1,
          Math.min(quantity, item.product.stockQuantity),
        );
        return { ...item, quantity: validQuantity };
      }
      return item;
    });

    set({ items: newItems });
    get().calculateTotals();
  },

  clearCart: () => {
    set({ items: [] });
    get().calculateTotals();
  },

  calculateTotals: () => {
    const { items } = get();
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    // Envío gratuito por encima de 1500 pesos
    const shipping = subtotal > 1500 ? 0 : 150;

    set({
      subtotal,
      shipping,
      total: subtotal + shipping,
    });
  },
}));
