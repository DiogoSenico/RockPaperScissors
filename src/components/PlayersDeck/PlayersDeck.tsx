import React from 'react';

import { Container, PlayerName } from './styles';
import Card from './Card';
import { Card as MCard } from '../../models';

import ImgRock from '../../assets/imgs/rock.png';
import ImgPaper from '../../assets/imgs/paper.png';
import ImgScissor from '../../assets/imgs/scissor.png';
import ImgBackCard from '../../assets/imgs/backcard.png';

// TODO: PLAYER_CARD.name should only accept the allowed card names
const PLAYER_CARDS = [
  { name: 'Rock', img: ImgRock },
  { name: 'Paper', img: ImgPaper },
  { name: 'Scissors', img: ImgScissor },
];
const CPU_CARDS = [
  { name: 'Card', img: ImgBackCard },
  { name: 'Card', img: ImgBackCard },
  { name: 'Card', img: ImgBackCard },
];

interface Props {
  playerName: string;
  onPlay?: (card: MCard) => void;
}

const PlayersDeck: React.FC<Props> = ({ onPlay, playerName }) => {
  var cards = !onPlay ? CPU_CARDS : PLAYER_CARDS;

  return (
    <Container>
      <PlayerName>{playerName}</PlayerName>

      {cards.map((card, i) => (
        <Card
          key={`${card}-${i}`}
          name={card.name}
          img={card.img}
          onClick={onPlay}
        />
      ))}
    </Container>
  );
};

export default PlayersDeck;
