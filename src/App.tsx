import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Menu from './pages/Menu';
import History from './pages/History';
import GlobalStyles from './GlobalStyles';
// import { roundReducer } from './reducers/Round';
import { RoundsContextProvider } from './contexts/Rounds';

const App: React.FC = () => {
  // const [rounds, dispatchRounds] = useReducer(roundReducer, []);
  // useEffect(() => {
  //   dispatchRounds({ type: 'initialFetch' });
  // }, []);

  return (
    <>
      <GlobalStyles />
      <RoundsContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/history" component={History} />
          </Switch>
        </BrowserRouter>
      </RoundsContextProvider>
    </>
  );
};

export default App;
