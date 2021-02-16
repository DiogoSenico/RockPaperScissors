import { v4 as uuidv4 } from 'uuid';
import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import { DbCollections, MyCollections } from '../models';

import { RxDBAdapterCheckPlugin } from 'rxdb/plugins/adapter-check';
import { RxDBEncryptionPlugin } from 'rxdb/plugins/encryption';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
import { GameDocument } from '../models/Game/types';

export type MyDatabase = RxDatabase<DbCollections>;

export const createDb = async (): Promise<MyDatabase> => {
  addRxPlugin(RxDBAdapterCheckPlugin);
  addRxPlugin(RxDBEncryptionPlugin);
  addRxPlugin(RxDBQueryBuilderPlugin);
  addRxPlugin(RxDBValidatePlugin);
  addRxPlugin(require('pouchdb-adapter-idb'));
  /**
   * create database and collections
   */
  const myDatabase: MyDatabase = await createRxDatabase<DbCollections>({
    name: 'mydb',
    adapter: 'idb',
  });

  await myDatabase.addCollections(MyCollections);

  await initialPopulate(myDatabase);

  return myDatabase;
};

const initialPopulate = async (myDatabase: MyDatabase): Promise<void> => {
  const firstGame: GameDocument | null = await myDatabase.game
    .findOne({
      selector: {
        name: 'Player1-Cpu',
      },
    })
    .exec();
  if (firstGame) return;

  const player1 = await myDatabase.player.insert({
    id: uuidv4(),
    name: 'Player1',
  });
  const cpu = await myDatabase.player.insert({
    id: uuidv4(),
    name: 'Cpu',
  });

  myDatabase.game.insert({
    id: uuidv4(),
    name: 'Player1-Cpu',
    players: [
      {
        score: 0,
        info: player1.id,
      },
      {
        score: 0,
        info: cpu.id,
      },
    ],
    rounds: [],
  });
};
