import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn/index';
import SingUp from '../pages/SingUp/index';

import Dashboard from '../pages/Dashboard/index';
import Profile from '../pages/Profile/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
