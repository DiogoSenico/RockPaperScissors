import React, { createContext, useReducer } from 'react';

import { roundReducer } from '../reducers/Round';
import { Round } from '../models';
import { fetchAll } from '../api/Round';

export const RoundsContext = createContext<[Round[], any]>([[], undefined]);

export const RoundsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(roundReducer, [], fetchAll);

  return (
    <RoundsContext.Provider value={[state, dispatch]}>
      {children}
    </RoundsContext.Provider>
  );
};
