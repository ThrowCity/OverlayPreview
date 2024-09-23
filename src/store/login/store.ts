import { create } from 'zustand';

export interface UserState {
  email: string;
  coins: number;
  updateEmail: (email: string) => void;
  updateCoins: (coins: number) => void;
}

const useUserStore = create<UserState>((set) => ({
    email: '',
    coins: 0,
    updateEmail: (email: string) => set({ email }),
    updateCoins: (coins: number) => set({ coins }),
  })
);

export default useUserStore;
