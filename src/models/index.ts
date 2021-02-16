//NOTE: data models are small, so all of them are grouped in this file,
//      For larger data models, one model per file is advised

import { gameCollectionMethods, gameDocMethods } from './Game/methods';
import gameSchema from './Game/schema';
import { GameCollection } from './Game/types';
import playerSchema from './Player/schema';
import { PlayerCollection } from './Player/types';

export const DECK = <const>['Rock', 'Paper', 'Scissors'];
export type Card = typeof DECK[number];

export interface PlayData {
  playerName: string;
  roundsWon: number;
  curPlay: Card;
}

export interface Round {
  id: number;
  topPlayer: PlayData;
  bottomPlayer: PlayData;
}

export interface Games {
  [gameName: string]: Round[];
}

export type DbCollections = {
  player: PlayerCollection;
  game: GameCollection;
};

export const MyCollections = {
  player: {
    schema: playerSchema,
  },
  game: {
    schema: gameSchema,
    methods: gameDocMethods,
    statics: gameCollectionMethods,
  },
};
