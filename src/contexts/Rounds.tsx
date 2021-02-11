import React, { createContext, useEffect, useReducer } from 'react';

import { roundReducer } from '../reducers/Round';
import { Round } from '../models';
import { fetchAll } from '../api/Round';

export const RoundsContext = createContext<[Round[], any]>([[], undefined]);

export const RoundsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(roundReducer, []);

  useEffect(() => {
    fetchAll().then((rounds) => {
      dispatch({
        type: 'FETCH_ALL',
        data: rounds,
      });
    });
  }, []);

  return (
    <RoundsContext.Provider value={[state, dispatch]}>
      {children}
    </RoundsContext.Provider>
  );
};
