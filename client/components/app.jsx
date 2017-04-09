import React from 'react';
import { Component } from 'react';
import Nav from './nav.jsx';
import AppBar from './navbar.jsx';
import InboxBody from '../containers/inboxbody.jsx'

class App extends Component {
  render() {
    return (
    	<div>
      <InboxBody />
      </div>
    );
  }
}

export default App;

