import React from "react";
import { Route, Redirect } from "react-router-dom";

// Protected Route - if a user is logged in session storage, then render the Component, else redirect to login
const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={(props) => {
        if(isAuth) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/login", state: {from: props.location } }} />
        }
      }} 
    />
  );
}

  export default ProtectedRoute;