import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Todo from "./components/Todo"
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import UserProfile from "./components/UserProfile";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:3000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content"> Checking Authentication... </div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
              <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <small> (Access without token only) </small>
            <NavLink activeClassName="active" to="/dashboard">
              Dashboard
            </NavLink>
             <small> (Access with token only) </small>
          </div>
          <div className="content">
      <Switch>
          <PublicRoute exact path ="/login" components={Login} />
           <Route exact path ="/" components={Home} />
           <Route exact path ="/todo" components={Todo} />
           <PrivateRoute exact path ="/" components={Dashboard} />
           <Route exact path ="/userprofile" components={UserProfile} />
       </Switch>
       </div>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
