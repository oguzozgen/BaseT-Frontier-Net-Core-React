import React from "react";
import { Switch, Route } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Admin from "../pages/Admin/Admin";
import Profile from "../BaseT-React-PagesCustom/Profile/Profile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={withOidcSecure(Dashboard)} />
    <Route path="/admin" component={Admin} />
    <Route path="/profile" component={Profile}/>
  </Switch>
);

export default Routes;