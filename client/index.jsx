import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/app.jsx';
import Inbox from './containers/inboxbody.jsx';
import Login from './containers/login.jsx'
import Signup from './containers/signup.jsx';
import reducers from './reducers';

injectTapEventPlugin();

const history = createHistory();

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),applyMiddleware(middleware)

)



ReactDOM.render(
 <Router>
       <Provider store={store}>
    <MuiThemeProvider>
         <div>
           <Route exact path='/' component={App} />
           <Route path='/inbox' component={Inbox} />
           <Route path='/loginForm' component={Login} />
           <Route path='/signupForm' component={Signup} />
         </div>
      </MuiThemeProvider>
       </Provider>
     </Router>
 
  , document.querySelector('.container'));
