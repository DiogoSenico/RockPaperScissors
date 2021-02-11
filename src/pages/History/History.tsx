import React, { useContext } from 'react';
import RoundCollection from '../../components/RoundCollection';

import { Container, Title } from './styles';
import { RoundsContext } from '../../contexts/Rounds';

const History: React.FC = () => {
  const [rounds] = useContext(RoundsContext);
  return (
    <Container>
      <Title>History</Title>
      <RoundCollection rounds={rounds} />
    </Container>
  );
};

export default History;
