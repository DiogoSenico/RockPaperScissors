import React from 'react';
import RoundCollection from '../../components/RoundCollection';

import { Container, Title } from './styles';

const History: React.FC = () => {
  return (
    <Container>
      <Title>History</Title>
      <RoundCollection />
    </Container>
  );
};

export default History;
