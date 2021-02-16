import { CardDocType } from '../Card/types';
import {
  GameCollectionMethods,
  GameCollection,
  GameDocMethods,
  GameDocument,
} from './types';

export const gameDocMethods: GameDocMethods = {
  playWithCpu: function (this: GameDocument, cardP2: CardDocType) {
    console.log(cardP2.name);

    // const topPlayer = {
    //   playerName: 'CPU',
    //   curPlay: DECK[Math.floor(Math.random() * DECK.length)],
    //   roundsWon: currentScore.topPlayer,
    // };
    // const bottomPlayer = {
    //   playerName,
    //   curPlay,
    //   roundsWon: currentScore.bottomPlayer,
    // };

    // const round = generateRound(topPlayer, bottomPlayer);

    // await addRoundToGame(gameName, round);

    // return round;
  },
};

export const gameCollectionMethods: GameCollectionMethods = {
  getCurrentScore: function (this: GameCollection) {
    return [0, 0];
  },
};
