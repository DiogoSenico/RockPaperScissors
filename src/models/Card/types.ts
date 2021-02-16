import { RxDocument } from 'rxdb';

import ImgRock from '../../assets/imgs/rock.png';
import ImgPaper from '../../assets/imgs/paper.png';
import ImgScissor from '../../assets/imgs/scissor.png';
import ImgBackCard from '../../assets/imgs/backcard.png';

export const CARD_NAMES = <const>['Rock', 'Paper', 'Scissor'];

export type CardDocType = {
  value: number;
  name: typeof CARD_NAMES[number];
  face: string;
  back: string;
};

export type CardDocument = RxDocument<CardDocType>;

export const PLAYERS_DECK: CardDocType[] = [
  {
    value: 1,
    name: 'Rock',
    face: ImgRock,
    back: ImgBackCard,
  },
  {
    value: 2,
    name: 'Paper',
    face: ImgPaper,
    back: ImgBackCard,
  },
  {
    value: 3,
    name: 'Scissor',
    face: ImgScissor,
    back: ImgBackCard,
  },
];
