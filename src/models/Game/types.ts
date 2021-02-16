import { RxCollection, RxDocument } from 'rxdb';
import { CardDocType } from '../Card/types';
import { RoundDocType } from '../Round/types';

export type GameDocType = {
  id: string;
  name: string;
  players: [
    {
      score: number;
      info: string; //player ref
    },
    {
      score: number;
      info: string; //player ref
    },
  ];
  rounds: RoundDocType[];
};

export type GameDocMethods = {
  playWithCpu: (cardP2: CardDocType) => void;
};

export type GameCollectionMethods = {
  getCurrentScore: () => [number, number];
};

export type GameDocument = RxDocument<GameDocType, GameDocMethods>;
export type GameCollection = RxCollection<
  GameDocType,
  GameDocMethods,
  GameCollectionMethods
>;
