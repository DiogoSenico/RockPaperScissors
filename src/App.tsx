import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Menu from './pages/Menu';
import History from './pages/History';
import GlobalStyles from './GlobalStyles';
import { DatabaseContextProvider } from './contexts/Database';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <DatabaseContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/history" component={History} />
          </Switch>
        </BrowserRouter>
      </DatabaseContextProvider>
    </>
  );
};

export default App;
