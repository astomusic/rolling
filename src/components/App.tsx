import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/global';

import Rolling from './rolling';

const App = () => {
  console.log(`Rolling Board`);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Rolling} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
