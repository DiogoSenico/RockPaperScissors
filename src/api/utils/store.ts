import localforage from 'localforage';

export const forageStore = localforage.createInstance({
  name: 'database',
});
