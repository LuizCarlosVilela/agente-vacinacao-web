import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route component={() => <h1>Erro 404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
