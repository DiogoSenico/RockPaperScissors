import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Container, Title } from './styles';
import PlayersDeck from '../../components/PlayersDeck';
import LastRoundResult from '../../components/LastRoundResult';
import Score from '../../components/Score';
import { DatabaseContext } from '../../contexts/Database';
import { GameDocument } from '../../models/Game/types';
import { MyDatabase } from '../../database';
import { CardDocType } from '../../models/Card/types';

const Game: React.FC = () => {
  const db: MyDatabase | null = useContext(DatabaseContext);
  var [game, setGame] = useState<GameDocument | null>();

  useEffect(() => {
    if (db) {
      db.game
        .findOne({
          selector: {
            name: 'Player1-CPU',
          },
        })
        .exec()
        .then((gameDoc) => {
          setGame(gameDoc);
        });
      console.log(db);
    }
  }, [db]);

  const onPlay = useCallback((card: CardDocType) => {
    game?.playWithCpu(card);
  }, []);

  if (!game) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Title>Game</Title>
      <PlayersDeck playerName={game.players[0].info.name} />

      <Score
        scoreTop={game.players[0].score || 0}
        scoreBottom={game.players[1].score || 0}
      />
      <LastRoundResult
        playTop={game.rounds[game.rounds.length - 1].cardP1.name || '---'}
        playBottom={game.rounds[game.rounds.length - 1].cardP2.name || '---'}
      />

      <PlayersDeck playerName={game.players[1].info.name} onPlay={onPlay} />
    </Container>
  );
};

export default Game;
