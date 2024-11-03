import { create } from "zustand";

type TUserStore = {
  isLogin: boolean;
  setLogin: () => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  isLogin: false,
  setLogin: () => set((state) => ({ isLogin: !state.isLogin })),
}));
