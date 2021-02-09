import React from 'react';

import { Container, Label, Result } from './styles';

interface Props {
  playTop: string;
  playBottom: string;
}

const LastRoundResult: React.FC<Props> = ({ playTop, playBottom }) => {
  return (
    <Container>
      <Label>Last Result</Label>
      <Result>{`${playTop} - ${playBottom}`}</Result>
    </Container>
  );
};

export default LastRoundResult;
