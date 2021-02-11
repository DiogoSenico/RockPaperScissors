import { Round, Games } from '../models';
import { forageStore, GAMES_COLLECTION } from './utils/store';

export const getGameScore = async (
  gameName: string,
): Promise<{ topPlayer: number; bottomPlayer: number }> => {
  const rounds = await getGameByName(gameName);

  return {
    topPlayer: rounds[rounds.length - 1]?.topPlayer?.roundsWon || 0,
    bottomPlayer: rounds[rounds.length - 1]?.bottomPlayer?.roundsWon || 0,
  };
};

export const addRoundToGame = async (gameName: string, round: Round) => {
  const games = await getGames();
  games[gameName].push(round);
  await forageStore.setItem(GAMES_COLLECTION, games);
};

const getGameByName = async (gameName: string): Promise<Round[]> => {
  var games = await getGames();
  if (!games) {
    await forageStore.setItem(GAMES_COLLECTION, { [gameName]: [] });
    return [];
  }
  return games[gameName];
};

const getGames = async (): Promise<Games> => {
  return (await forageStore.getItem(GAMES_COLLECTION)) as Games;
};
