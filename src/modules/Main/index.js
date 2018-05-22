import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Home';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
