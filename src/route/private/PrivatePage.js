import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivatePage = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("account") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivatePage;
