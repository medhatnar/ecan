import React from 'react';
import { Component } from 'react';
import InboxBody from '../containers/inboxbody.jsx';
import Login from '../containers/login.jsx';
import Signup from '../containers/signup.jsx';
import ComposeForm from '../containers/composeform.jsx'

class App extends Component {
  render() {
    return (
    	<div>
      <ComposeForm/>
      </div>
    );
  }
}

export default App;

