import React from 'react';

import { Container, PlayerName } from './styles';
import Card from './Card';

import { CardDocType } from '../../models/Card/types';
import { PLAYERS_DECK } from '../../models/Card/types';

interface Props {
  playerName: string;
  onPlay?: (card: CardDocType) => void;
}

const PlayersDeck: React.FC<Props> = ({ onPlay, playerName }) => {
  return (
    <Container>
      <PlayerName>{playerName}</PlayerName>

      {PLAYERS_DECK.map((card) => (
        <Card key={`${card.name}-${card.value}`} card={card} onClick={onPlay} />
      ))}
    </Container>
  );
};

export default PlayersDeck;
