import React from 'react';
import { Switch, Route as DomRoute } from 'react-router-dom';
import Route from './Route';

import Landing from '~/pages/Landing';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import RegisterItem from '~/pages/RegisterItem';
import Search from '~/pages/Search';
import AdminLogin from '~/pages/AdminLogin';
import AdminDashboard from '~/pages/AdminDashboard';
import Item from '~/pages/AdminDashboard/Item';
import UserItems from '~/pages/UserItems';
import Resolved from '~/pages/AdminDashboard/Resolved';
import Options from '~/pages/Options';
import Logout from '~/services/logout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route isPrivate path="/user/main" component={Main} />
      <Route isPrivate path="/user/item/new" component={RegisterItem} />
      <Route isPrivate path="/user/item/search" component={Search} />
      <Route isPrivate path="/user/item/view" component={UserItems} />
      <Route isPrivate path="/user/logout" component={Logout} />
      <DomRoute exact path="/admin" component={AdminLogin} />
      <Route exact isAdmin path="/admin/dashboard" component={AdminDashboard} />
      <Route exact isAdmin path="/admin/item/:id" component={Item} />
      <Route exact isAdmin path="/admin/resolved" component={Resolved} />
      <Route exact isAdmin path="/admin/options" component={Options} />
    </Switch>
  );
}
