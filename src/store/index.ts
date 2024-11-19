import { create } from "zustand";
import { Product } from "../types/types";

type ShoppingListState = {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
  toggleItem: (id: string) => void;
};

const useStore = create<ShoppingListState>((set) => ({
  items: [],
  isLoading: false,
  error: null,

  fetchItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://interview-assignment-shopping-list.vercel.app/products.json"
      );
      const data = await response.json();
      const items: Product[] = data.products;
      set({ items, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  toggleItem: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  },
}));

export default useStore;
