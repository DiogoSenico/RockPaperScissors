import React, { createContext, useEffect, useReducer } from 'react';

import { databaseReducer } from '../reducers/Database';
import { MyDatabase, createDb } from '../database';

export const DatabaseContext = createContext<MyDatabase | null>(null);

export const DatabaseContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(databaseReducer, null);

  useEffect(() => {
    createDb().then((db) => {
      dispatch({
        type: 'CREATE_DB',
        data: db,
      });
    });
  }, []);

  return (
    <DatabaseContext.Provider value={state}>
      {children}
    </DatabaseContext.Provider>
  );
};
