import { create } from "zustand";

interface UIStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void; // New function to close the menu
}

export const useUIStore = create<UIStore>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }), // Implementation of closeMenu function
}));
