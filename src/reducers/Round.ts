import { Round } from '../models';

type Actions =
  | {
      type: 'PLAY_WITH_CPU';
      data: Round;
    }
  | {
      type: 'FETCH_ALL';
      data: Round[];
    };

type State = Round[];

export const roundReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'PLAY_WITH_CPU':
      return [...state, action.data];
    case 'FETCH_ALL':
      return action.data;
  }
};
