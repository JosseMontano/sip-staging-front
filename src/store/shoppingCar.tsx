import { ShoppingCarType } from "@/interfaces/global/shoppingCar";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CarStore = {
  items: ShoppingCarType[];
  addItem: (item: ShoppingCarType) => void;
  removeItem: (id: number) => void;
  clearCar: () => void;
  updateCar: (id: number, amount: number) => void;
  numberCompany: string;
  changeNumberCompany: (number: string) => void;
};

export const useShoppingCar = create(
  persist<CarStore>(
    (set) => ({
      items: [],
      addItem: (item: ShoppingCarType) => {
        set((state: CarStore) => ({
          items: [...state.items, item],
        }));
      },
      removeItem: (id: number) => {
        set((state: CarStore) => ({
          items: state.items.filter((v) => v.id !== id),
        }));
      },
      clearCar: () => {
        set((state: CarStore) => ({
          items: [],
        }));
      },
      updateCar: (id: number, amount: number) => {
        set((state: CarStore) => ({
          items: state.items.map((v) => (v.id === id ? { ...v, amount } : v)),
        }));
      },
      numberCompany: "0",
      changeNumberCompany: (number: string) => {
        set(() => ({
          numberCompany: number,
        }));
      },
    }),
    {
      name: "shopping-car",
    }
  )
);
