import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { HashRouter as Router, Route } from 'react-router-dom';


import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/app.jsx';
import Inbox from './containers/inboxbody.jsx';
import Login from './containers/login.jsx'
import ComposeForm from './containers/composeform.jsx'
import Signup from './containers/signup.jsx';
import reducers from './reducers';

// set up React to support a few HTML attributes useful for legacy clients

// <Route exact path='/' component={Login} />
  //         <Route path='/inbox' component={Inbox} />
    //       <Route path='/composeForm' component={ComposeForm} />
      //     <Route path='/signupForm' component={Signup} />
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
 <Router>
       <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
         <div>
          <App />
         </div>
      </MuiThemeProvider>
       </Provider>
     </Router>
 
  , document.querySelector('.container'));
