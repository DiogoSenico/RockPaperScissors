import React, { useContext } from 'react';

import { Container, Title } from './styles';
import PlayersDeck from '../../components/PlayersDeck';
import LastRoundResult from '../../components/LastRoundResult';
import Score from '../../components/Score';
import { Card } from '../../models';
import { RoundsContext } from '../../contexts/Rounds';
import { playWithCpu } from '../../api/Round';

const Game: React.FC = () => {
  // TODO: context should only retrieve needed data (Only the rounds for this game)
  const [rounds, dispatchRound] = useContext(RoundsContext);

  // TODO: for multiplayer games, requests players names
  const playerName = 'Player1';
  const cpuName = 'CPU';
  const gameName = `${playerName}-${cpuName}`;

  const onPlay = (card: Card) => {
    playWithCpu(gameName, playerName, card).then((round) => {
      dispatchRound({
        type: 'PLAY_WITH_CPU',
        data: round,
      });
    });
  };

  return (
    <Container>
      <Title>Game</Title>
      <PlayersDeck playerName={cpuName} />

      <Score
        scoreTop={rounds[rounds.length - 1]?.topPlayer.roundsWon || 0}
        scoreBottom={rounds[rounds.length - 1]?.bottomPlayer.roundsWon || 0}
      />
      <LastRoundResult
        playTop={rounds[rounds.length - 1]?.topPlayer.curPlay || '---'}
        playBottom={rounds[rounds.length - 1]?.bottomPlayer.curPlay || '---'}
      />

      <PlayersDeck playerName={playerName} onPlay={onPlay} />
    </Container>
  );
};

export default Game;
