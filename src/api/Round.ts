// import { forageStore } from './utils/store';

import { PlayData, Round, Card, DECK } from '../models';

export const playAgainstCpu = (playerName: string, curPlay: Card): Round => {
  // const gameName = `${playerName}-CPU`;
  // var rounds = forageStore.getItem(gameName);

  const round = {
    id: Math.random(),
    topPlayer: simulateCpuPlay(),
    bottomPlayer: {
      playerName,
      roundsWon: 0,
      curPlay,
    },
  };

  return round;
};

const simulateCpuPlay = (): PlayData => {
  return {
    playerName: 'CPU',
    curPlay: DECK[Math.floor(Math.random() * DECK.length)],
    roundsWon: 3,
  };
};

export const getRoundById = (id: number) => {
  return;
};

export const fetchAll = (): Round[] => {
  return [
    {
      id: 123,
      bottomPlayer: {
        curPlay: 'Paper',
        playerName: 'Player',
        roundsWon: 1,
      },
      topPlayer: {
        curPlay: 'Rock',
        playerName: 'CPU',
        roundsWon: 0,
      },
    },
  ];
};
