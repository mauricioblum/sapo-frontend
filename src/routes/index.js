import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '~/pages/Landing';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import RegisterItem from '~/pages/RegisterItem';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/user/main" component={Main} />
      <Route path="/user/item/new" component={RegisterItem} />
    </Switch>
  );
}
