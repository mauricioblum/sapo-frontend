import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '~/pages/Landing';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import RegisterItem from '~/pages/RegisterItem';
import Search from '~/pages/Search';
import AdminLogin from '~/pages/AdminLogin';
import AdminDashboard from '~/pages/AdminDashboard';
import Item from '~/pages/AdminDashboard/Item';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route isPrivate path="/user/main" component={Main} />
      <Route isPrivate path="/user/item/new" component={RegisterItem} />
      <Route isPrivate path="/user/item/search" component={Search} />
      <Route exact isPrivate path="/admin" component={AdminLogin} />
      <Route
        exact
        isPrivate
        path="/admin/dashboard"
        component={AdminDashboard}
      />
      <Route exact isPrivate path="/admin/item/:id" component={Item} />
    </Switch>
  );
}
