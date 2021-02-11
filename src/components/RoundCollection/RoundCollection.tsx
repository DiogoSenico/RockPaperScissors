import React from 'react';

import { Round } from '../../models';

import {
  Container,
  RoundWrapper,
  Result,
  Players,
  GlobalScore,
} from './styles';

interface Props {
  rounds?: Round[];
}

const RoundCollection: React.FC<Props> = ({ rounds = [] }) => {
  if (!rounds.length) return <p>No history to display</p>;
  return (
    <Container>
      {rounds.map((roundData) => (
        <RoundWrapper key={roundData.id}>
          <Players>{`${roundData.topPlayer.playerName} - ${roundData.bottomPlayer.playerName}`}</Players>
          <Result>{`${roundData.topPlayer.curPlay} - ${roundData.bottomPlayer.curPlay}`}</Result>
          <GlobalScore>{`${roundData.topPlayer.roundsWon} - ${roundData.bottomPlayer.roundsWon}`}</GlobalScore>
        </RoundWrapper>
      ))}
    </Container>
  );
};

export default RoundCollection;
