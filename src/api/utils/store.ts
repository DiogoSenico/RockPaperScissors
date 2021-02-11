import localforage from 'localforage';

export const GAMES_COLLECTION = 'GAMES';

export const forageStore = localforage.createInstance({
  name: 'database',
});
