import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing/Landing";
import Default from "./components/Default";
import Restaurants from './components/Restaurants'
export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/restaurants" component={Restaurants} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}
