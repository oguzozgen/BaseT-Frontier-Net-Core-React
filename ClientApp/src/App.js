import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider, oidcLog } from "@axa-fr/react-oidc-context";
import Layouttheme from "./components/Layouttheme/Layouttheme";
import Routes from "./Router/Routes";
import oidcConfiguration from "./configuration";
export default class App extends Component {
  static displayName = App.name;
   
  render () {
    return (
      <div>
      <Router>
        <AuthenticationProvider
          configuration={oidcConfiguration}
          loggerLevel={oidcLog.DEBUG}
        >
          <Layouttheme />
          <Routes />
        </AuthenticationProvider>
      </Router>
    
    </div>
    )
  }
}
