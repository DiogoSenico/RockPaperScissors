import React from 'react';

import { CardWrapper, CardImg } from './styles';
import { Card as MCard } from '../../models';

interface Props {
  name: string;
  img: string;
  onClick?: (card: MCard) => void;
}

const Card: React.FC<Props> = ({ name, img, onClick }) => {
  return (
    <CardWrapper
      hasAction={!!onClick}
      onClick={() => {
        if (onClick) onClick(name as MCard);
      }}
    >
      <CardImg alt={name} src={img} />
    </CardWrapper>
  );
};

export default Card;
