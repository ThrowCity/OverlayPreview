import { create } from 'zustand';

export interface GlobalState {
  score: number;
  updateScore: (score: number) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
    score: 0,
    updateScore: (score: number) => set({ score }),
  })
);

export default useGlobalStore;
