import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import App from './components/app.jsx';
import Inbox from './containers/inboxbody.jsx';
import Login from './containers/login.jsx'
import Signup from './containers/signup.jsx';
import reducers from './reducers';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
 <Router>
       <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
         <div>
           <Route exact path='/' component={Login} />
           <Route path='/inbox' component={Inbox} />
           <Route path='/signupForm' component={Signup} />
         </div>
      </MuiThemeProvider>
       </Provider>
     </Router>
 
  , document.querySelector('.container'));
