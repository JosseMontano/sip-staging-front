import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NameState {
  name: string;
  changeName: (name: string) => void;
}

export const UseNameNav = create<NameState>((set) => ({
  name: "infoshop",
  changeName: (name: string) => {
    set(() => ({
      name: name,
    }));
  },
}));
