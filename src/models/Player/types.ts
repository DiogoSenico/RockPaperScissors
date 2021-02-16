import { RxCollection, RxDocument } from 'rxdb';

export type PlayerDocType = {
  id: string;
  name: string;
  isCpu?: boolean;
};

export type PlayerDocument = RxDocument<PlayerDocType>;
export type PlayerCollection = RxCollection<PlayerDocType>;
