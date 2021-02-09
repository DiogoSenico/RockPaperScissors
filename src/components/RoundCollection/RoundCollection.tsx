import React from 'react';

import {
  Container,
  RoundWrapper,
  Result,
  Players,
  GlobalScore,
} from './styles';

interface PlayerData {
  name: string;
  globalScore: number;
  curPlay: string;
}

interface RoundData {
  topPlayer: PlayerData;
  bottomPlayer: PlayerData;
}

interface Props {
  rounds?: RoundData[];
}

const RoundCollection: React.FC<Props> = ({ rounds = [] }) => {
  if (!rounds.length) return <p>No history to display</p>;
  return (
    <Container>
      {rounds.map((roundData) => (
        <RoundWrapper>
          <Players>{`${roundData.topPlayer.name} - ${roundData.bottomPlayer.name}`}</Players>
          <Result>{`${roundData.topPlayer.curPlay} - ${roundData.bottomPlayer.curPlay}`}</Result>
          <GlobalScore>{`${roundData.topPlayer.globalScore} - ${roundData.bottomPlayer.globalScore}`}</GlobalScore>
        </RoundWrapper>
      ))}
    </Container>
  );
};

export default RoundCollection;
