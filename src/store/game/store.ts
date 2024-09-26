import { create } from 'zustand';

export interface GameState {
  players: {
    attack: Player[],
    defence: Player[],
  }
}

export interface Player {
  character: Character;
  name: string;
  kills: number;
  deaths: number;
  assists: number;
  abilities: {
    c: number;
    q: number;
    e: number;
  }
  ult: number;
  shield: Shield;
  weapon: Weapon;
  credits: number;
}

export type Character = 'gekko' | 'breach';
export type Shield = 'none' | 'light' | 'heavy';
export type Weapon = 'vandal';

const useGameStore = create<GameState>(() => ({
    players: {
      attack: [
        {
          character: 'gekko',
          name: 'nanners',
          kills: 3,
          deaths: 17,
          assists: 12,
          abilities: {
            c: 0,
            q: 1,
            e: 1,
          },
          ult: 3,
          shield: 'none',
          weapon: 'vandal',
          credits: 3500,
        },
        {
          character: 'breach',
          name: 'xornst',
          kills: 12,
          deaths: 8,
          assists: 6,
          abilities: {
            c: 1,
            q: 2,
            e: 1,
          },
          ult: 9,
          shield: 'light',
          weapon: 'vandal',
          credits: 3500,
        }
      ],
      defence: [
        {
          character: 'gekko',
          name: 'mqxf',
          kills: 19,
          deaths: 7,
          assists: 8,
          abilities: {
            c: 1,
            q: 0,
            e: 1,
          },
          ult: 7,
          shield: 'none',
          weapon: 'vandal',
          credits: 1000,
        },
        {
          character: 'breach',
          name: '5oup',
          kills: 2,
          deaths: 9,
          assists: 4,
          abilities: {
            c: 0,
            q: 1,
            e: 1,
          },
          ult: 5,
          shield: 'heavy',
          weapon: 'vandal',
          credits: 1200,
        }
      ],
    }
  })
);

export default useGameStore;
