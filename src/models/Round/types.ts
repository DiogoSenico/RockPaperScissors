import { RxDocument } from 'rxdb';
import { CardDocType } from '../Card/types';

export type RoundDocType = {
  cardP1: CardDocType;
  cardP2: CardDocType;
};

export type RoundDocMethods = {
  verifyRoundWinner: (cardP1: CardDocType, cardP2: CardDocType) => -1 | 0 | 1;
};

export type RoundDocument = RxDocument<RoundDocType, RoundDocMethods>;
