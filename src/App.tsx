import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Menu from './pages/Menu';
import History from './pages/History';
import GlobalStyles from './GlobalStyles';
import { RoundsContextProvider } from './contexts/Rounds';

const App: React.FC = () => {
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
