import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import SignIn from "./components/UserSign/SignIn";
import Register from "./components/UserSign/Register";
// import Admin from "./components/adminlogin/admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Body />
          </Route>
          <Route path='/signin' exact>
            {SignIn}
          </Route>
          <Route path='/signup' exact>
            {Register}
          </Route>
          {/* <Route path='/adminlogin' exact>
            {Admin}
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
