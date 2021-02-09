import React from 'react';

import { Container, Title } from './styles';
import PlayersDeck from '../../components/PlayersDeck';
import LastRoundResult from '../../components/LastRoundResult';
import Score from '../../components/Score';

const Game: React.FC = () => {
  return (
    <Container>
      <Title>Game</Title>
      <PlayersDeck playerName="CPU" isCPU />

      <Score scoreTop={0} scoreBottom={0} />
      <LastRoundResult playTop={'Rock'} playBottom={'Paper'} />

      <PlayersDeck playerName="Player" />
    </Container>
  );
};

export default Game;
