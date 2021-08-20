import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

// Components
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header>
        {/* <PrivateRoute exact path="/bubblepage" component={BubblePage}/> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'. DONE
//2. Render BubblePage as a PrivateRoute DONE
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.