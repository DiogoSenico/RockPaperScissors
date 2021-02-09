import React from 'react';

import { Container, PlayerName } from './styles';
import Card from './Card';

import ImgRock from '../../assets/imgs/rock.png';
import ImgPaper from '../../assets/imgs/paper.png';
import ImgScissor from '../../assets/imgs/scissor.png';
import ImgBackCard from '../../assets/imgs/backcard.png';

const PLAYER_CARDS = [
  { alt: 'Rock', img: ImgRock },
  { alt: 'Paper', img: ImgPaper },
  { alt: 'Scissor', img: ImgScissor },
];
const CPU_CARDS = [
  { alt: 'Card', img: ImgBackCard },
  { alt: 'Card', img: ImgBackCard },
  { alt: 'Card', img: ImgBackCard },
];

interface Props {
  playerName: string;
  isCPU?: boolean;
}

const PlayersDeck: React.FC<Props> = ({ isCPU, playerName }) => {
  var cards = isCPU ? CPU_CARDS : PLAYER_CARDS;
  return (
    <Container>
      <PlayerName>{playerName}</PlayerName>

      {cards.map((card) => (
        <Card alt={card.alt} img={card.img} hasAction={!isCPU} />
      ))}
    </Container>
  );
};

export default PlayersDeck;
