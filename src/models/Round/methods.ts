import { CardDocType } from '../Card/types';
import { RoundDocMethods, RoundDocument } from './types';

export const roundDocMethods: RoundDocMethods = {
  verifyRoundWinner: function (
    this: RoundDocument,
    cardP1: CardDocType,
    cardP2: CardDocType,
  ) {
    return 0;
  },
};
