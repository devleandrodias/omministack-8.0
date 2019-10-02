import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn/index';
import SingUp from '../pages/SingUp/index';

import Dashboard from '../pages/Dashboard/index';
import Profile from '../pages/Profile/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/registry" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
