//NOTE: data models are small, so all of them are grouped in this file,
//      For larger data models, one model per file is advised

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
