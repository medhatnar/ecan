import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'


import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers';

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
      <div>
     
      </div>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('.container'));
