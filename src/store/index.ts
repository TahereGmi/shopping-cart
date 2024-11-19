import { create } from "zustand";

// Define the type for a single shopping item
export type ShoppingItem = {
  id: number;
  name: string;
  checked: boolean;
};

type ShoppingListState = {
  items: ShoppingItem[];
  isLoading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
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
      const data: ShoppingItem[] = await response.json();
      set({ items: data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useStore;
