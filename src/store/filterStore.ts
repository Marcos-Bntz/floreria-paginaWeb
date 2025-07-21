import { create } from "zustand";
import { ProductFilters } from "../types";

interface FilterState {
  filters: ProductFilters;
  searchQuery: string;
  setFilter: (
    key: keyof ProductFilters,
    value: string | [number, number] | boolean | undefined,
  ) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filters: {
    style: undefined,
    occasion: undefined,
    color: undefined,
    category: undefined,
    priceRange: undefined,
    inStockOnly: false,
  },
  searchQuery: "",

  setFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  clearFilters: () => {
    set({
      filters: {
        style: undefined,
        occasion: undefined,
        color: undefined,
        category: undefined,
        priceRange: undefined,
        inStockOnly: false,
      },
      searchQuery: "",
    });
  },
}));
