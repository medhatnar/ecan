import React from 'react';
import { Component } from 'react';
import Nav from './nav.jsx';
import AppBar from './navbar.jsx';
import CurrentEvent from '../containers/currentEvent.jsx';
import RecentResponses from '../containers/recentResponses.jsx'
import Inbox from '../containers/inbox.jsx'
import InboxBody from '../containers/inboxbody.jsx'

class App extends Component {
  render() {
    return (
    	<div>
      <div>
     	<AppBar />	
      </div>
      <InboxBody />
      </div>
    );
  }
}

export default App;

