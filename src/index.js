import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//Auth0 imports 
import { Auth0Provider } from "./react-auth0-spa";
import history from '../src/utils/history';
import config from "./auth_config.json";
require('dotenv').config();


// const checkLogin = () => {
//   if(localStorage.getItem('token')) {
//     return true
//   } else {
//     return false
//   }
// }


const getToken = () => {
  let token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};
const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: 'https://quality-hub-gateway-staging.herokuapp.com/',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: getToken(),
      },
    });
  },
   cache,
   resolvers: {},
//  cache: cache,
//  clientState: {
//    isLoggedIn: !!localStorage.getItem("token")
//  }
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});



// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};


//auth0 is wrapped around the entire app
// apollo Client is wrapped in the app and acts as an Contect API the retrieve data
ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  </Auth0Provider>,
  document.getElementById('root'),
);
