import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App/Loadable';
import * as serviceWorker from './serviceWorker';
import rootStore from './stores';

/*
 * By default only the rootStore is added. You can add more stores where outside of
 * rootstore to split
 */

const stores = {
  rootStore
};

const history = createBrowserHistory();

const rootMount = (
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
    rootMount
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
