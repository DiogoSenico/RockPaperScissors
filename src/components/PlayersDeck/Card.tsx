import React from 'react';

import { CardWrapper, CardImg } from './styles';
import { CardDocType } from '../../models/Card/types';

interface Props {
  card: CardDocType;
  onClick?: (card: CardDocType) => void;
}

const Card: React.FC<Props> = ({ card, onClick }) => {
  return (
    <CardWrapper
      hasAction={!!onClick}
      onClick={() => {
        if (onClick) onClick(card);
      }}
    >
      <CardImg alt={card.name} src={!onClick ? card.back : card.face} />
    </CardWrapper>
  );
};

export default Card;
