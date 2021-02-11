import { playAgainstCpu } from '../api/Round';
import { Round, Card } from '../models';

type Actions = {
  type: 'playAgainstCpu';
  data: {
    playerName: string;
    curPlay: Card;
  };
};

type State = Round[];

export const roundReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'playAgainstCpu':
      return [
        ...state,
        playAgainstCpu(action.data.playerName, action.data.curPlay),
      ];
  }
};
