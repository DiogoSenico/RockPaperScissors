import React from 'react';

import { Container, Label, GameScore } from './styles';

interface Props {
  scoreTop: number;
  scoreBottom: number;
}

const Score: React.FC<Props> = ({ scoreTop = 0, scoreBottom = 0 }) => {
  return (
    <Container>
      <Label>Overhaul Result</Label>
      <GameScore>{`☝ ${scoreTop}-${scoreBottom} 👇`}</GameScore>
    </Container>
  );
};

export default Score;
