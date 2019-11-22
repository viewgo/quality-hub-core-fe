import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from "../../react-auth0-spa";

const PrivateRoute = ({ component: Component, path,  ...rest }) => {
  
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

// auth0 private route implentation

//   const render = props =>
//   isAuthenticated === true ? <Component {...props} /> : null;

// return <Route path={path} render={render} {...rest} />;


  return(
    <Route {...rest} 
      render = {props=> {
        if(localStorage.getItem('token')){
        
         return <Component {...rest} {...props} />;
      }
      return <Redirect to='/' />
    }} 
    />
  )
};

export default PrivateRoute;