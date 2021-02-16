import { MyDatabase } from '../database';

type Actions = {
  type: 'CREATE_DB';
  data: MyDatabase | null;
};

type State = MyDatabase | null;

export const databaseReducer = (state: State = null, action: Actions) => {
  switch (action.type) {
    case 'CREATE_DB':
      return action.data;
  }
};
