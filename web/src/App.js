import React from "react";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Dashboard from "./Pages/Dashboard";
import IndexPage from "./Pages/IndexPage";
import Todolist from "./Pages/Todolist"
import UserProfile from "./Pages/UserProfile"

import makeToast from "./Toaster";

function App() {
  const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/user" component={UserProfile} exact />
        <Route path="/todolist" component={Todolist} exact />
        <Route
          path="/login"
          render={() => <LoginPage />}
          exact
        />
        <Route path="/register" render={() => <RegisterPage />} exact />
        <Route
          path="/dashboard"
          render={() => <Dashboard />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;