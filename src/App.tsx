import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Menu from './pages/Menu';
import History from './pages/History';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/history" component={History} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
