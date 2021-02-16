import { RxJsonSchema } from 'rxdb';
import { PlayerDocType } from './types';

const playerSchema: RxJsonSchema<PlayerDocType> = {
  title: 'Games',
  description: 'Games data Collection',
  version: 0,
  keyCompression: true,
  type: 'object',
  properties: {
    id: { type: 'string', primary: true },
    name: { type: 'string' },
    isCpu: { type: 'boolean', default: false },
  },
  required: ['name'],
};

export default playerSchema;
