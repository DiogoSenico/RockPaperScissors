import { PlayData, Round, Card, DECK, Games } from '../models';
import { forageStore, GAMES_COLLECTION } from './utils/store';
import { getGameScore, addRoundToGame } from './Games';

export const playWithCpu = async (
  gameName: string,
  playerName: string,
  curPlay: Card,
): Promise<Round> => {
  const currentScore = await getGameScore(gameName);

  const topPlayer = {
    playerName: 'CPU',
    curPlay: DECK[Math.floor(Math.random() * DECK.length)],
    roundsWon: currentScore.topPlayer,
  };
  const bottomPlayer = {
    playerName,
    curPlay,
    roundsWon: currentScore.bottomPlayer,
  };

  const round = generateRound(topPlayer, bottomPlayer);

  await addRoundToGame(gameName, round);

  return round;
};

export const fetchAll = async (): Promise<Round[]> => {
  const rounds: Round[] = [];
  const games = (await forageStore.getItem(GAMES_COLLECTION)) as Games;

  for (var gameName in games) {
    rounds.push(...games[gameName]);
  }

  return rounds;
};

const generateRound = (topPlayer: PlayData, bottomPlayer: PlayData): Round => {
  const roundResult = processMove(topPlayer.curPlay, bottomPlayer.curPlay);

  return {
    id: Date.now(),
    topPlayer: {
      ...topPlayer,
      roundsWon: topPlayer.roundsWon + (roundResult < 0 ? 1 : 0),
    },
    bottomPlayer: {
      ...bottomPlayer,
      roundsWon: bottomPlayer.roundsWon + (roundResult > 0 ? 1 : 0),
    },
  };
};

const processMove = (a: Card, b: Card): -1 | 0 | 1 => {
  if (a === b) return 0;
  if (a === 'Rock' && b === 'Paper') return 1;
  if (a === 'Rock' && b === 'Scissors') return -1;
  if (a === 'Paper' && b === 'Scissors') return 1;
  if (a === 'Paper' && b === 'Rock') return -1;
  if (a === 'Scissors' && b === 'Rock') return 1;
  if (a === 'Scissors' && b === 'Paper') return -1;
  return 0;
};
