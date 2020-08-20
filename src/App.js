import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss"

import Home from "./pages/index";
import TestCase from "./pages/testCase";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tests-cases" component={TestCase} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
