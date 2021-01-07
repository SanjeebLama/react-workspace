import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Index";
import Header from "./components/Header";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
