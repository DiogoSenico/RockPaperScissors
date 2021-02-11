import React, { useContext, useEffect } from 'react';

import { Container, Title } from './styles';
import PlayersDeck from '../../components/PlayersDeck';
import LastRoundResult from '../../components/LastRoundResult';
import Score from '../../components/Score';
import { Card } from '../../models';
import { RoundsContext } from '../../contexts/Rounds';

const Game: React.FC = () => {
  const [rounds, dispatchRound] = useContext(RoundsContext);

  const onPlay = (playerName: string, card: Card) => {
    // console.log(playerName, card);
    dispatchRound({
      type: 'playAgainstCpu',
      data: { curPlay: card, playerName },
    });
    // console.log(rounds);
  };

  useEffect(() => {
    console.log(rounds);
  }, [rounds]);

  return (
    <Container>
      <Title>Game</Title>
      <PlayersDeck playerName="CPU" />

      <Score scoreTop={0} scoreBottom={0} />
      <LastRoundResult playTop={'Rock'} playBottom={'Paper'} />

      <PlayersDeck playerName="Player" onPlay={onPlay} />
    </Container>
  );
};

export default Game;
