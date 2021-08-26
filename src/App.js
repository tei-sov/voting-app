import React, { Component } from "react";
import Login from "./login";
import Signing from "./Signup";
import Homepage from "./homepage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Signing />
            </Route>

            <Route path="/Signup">
              <Login />
            </Route>

            <Route path="/homepage">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
