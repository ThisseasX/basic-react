import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Layout, Home, Contact, About } from 'components';

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/contact'} component={Contact} />
        <Route component={Home} />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
