import React from 'react';

import { CardWrapper, CardImg } from './styles';

interface Props {
  alt: string;
  img: string;
  hasAction?: boolean;
}

const Card: React.FC<Props> = ({ alt, img, hasAction }) => {
  return (
    <CardWrapper hasAction={hasAction}>
      <CardImg alt={alt} src={img} />
    </CardWrapper>
  );
};

export default Card;
