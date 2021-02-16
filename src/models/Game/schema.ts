import { RxJsonSchema } from 'rxdb';

import { GameDocType } from './types';

const gameSchema: RxJsonSchema<GameDocType> = {
  title: 'Games',
  description: 'Games data Collection',
  version: 0,
  keyCompression: true,
  type: 'object',
  properties: {
    id: { type: 'string', primary: true },
    name: { type: 'string' },
    players: {
      type: 'array',
      maxLength: 2,
      uniqueItems: true,
      items: {
        ref: 'player',
        type: 'string',
      },
    },
    rounds: {
      type: 'array',
      default: [],
      items: {
        type: 'object',
        properties: {
          value: { type: 'integer' },
          name: { type: 'string' },
        },
      },
    },
  },
  required: ['name', 'players'],
};

export default gameSchema;
