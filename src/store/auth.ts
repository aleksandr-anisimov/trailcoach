import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      // единая точка входа
      login: (user) => set({ user, isAuthenticated: true }),

      logout: () => set({ user: null, isAuthenticated: false }),

      // для случаев, когда надо просто проставить юзера
      setUser: (user) => set({ user, isAuthenticated: true }),
    }),
    {
      name: "auth",               // ключ в localStorage
      partialize: (state) => ({   // что сохраняем
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);