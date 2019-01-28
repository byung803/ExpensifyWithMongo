import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Login from "./components/auth/Login";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
