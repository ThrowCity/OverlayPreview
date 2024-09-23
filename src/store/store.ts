import { create } from 'zustand';

export interface GlobalState {
  randomNumber: number;
  updateRandomNumber: (newNumber: number) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
    randomNumber: 0,
    updateRandomNumber: (newNumber: number) => set({ randomNumber: newNumber }),
  })
);

export default useGlobalStore;
