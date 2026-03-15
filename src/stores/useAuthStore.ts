import { create } from "zustand";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AuthState = {
  auth: any | null;
  setAuth: (auth: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (value) => {
    console.log("setAuth", value);
    set({ auth: value });
  },
  logout: () => set({ auth: null }),
}));
