import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Home';
import Projects from './Projects';
import Contacts from './Contacts';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </main>
  );
};

export default Main;
