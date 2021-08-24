import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";

const User = () => {
  return (
    <div className="box-user">
      <img
        src="https://images.unsplash.com/photo-1618767017511-68fafe16098f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        alt=""
      />
      <Switch>
        <Route path="/user/login" exact>
          {localStorage.getItem("account") ? (
            <Redirect to="/home" />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/user/register" component={Register} exact />
        <Route path="/user" exact={true}>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
};

export default User;
