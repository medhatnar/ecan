import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/app.jsx'
import reducers from './reducers';

injectTapEventPlugin();

const history = createHistory();

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, ReduxThunk)
)



ReactDOM.render(
 
  <Provider store={store}>

    <ConnectedRouter history={history}>
    <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
 
  , document.querySelector('.container'));
