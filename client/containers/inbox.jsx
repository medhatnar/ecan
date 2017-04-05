import React from 'react';
import { Component } from 'react';


class Inbox extends Component {
  render() {
    return (
    <div>
    	 <div class="inbox-body text-center">
              <div class="btn-group">
                  <a class="btn mini btn-primary" href="javascript:;">
                      <i class="fa fa-plus"></i>
                  </a>
              </div>
              <div class="btn-group">
                  <a class="btn mini btn-success" href="javascript:;">
                      <i class="fa fa-phone"></i>
                  </a>
              </div>
              <div class="btn-group">
                  <a class="btn mini btn-info" href="javascript:;">
                      <i class="fa fa-cog"></i>
                  </a>
              </div>
        </div>
    	
    	 <div className="inbox-head">
    	 	<h3> Inbox </h3>
    	 	
    	 	<div className="input-append">
    	 		<form action="#" className="pull-right position">
    	 		<input type="text" className="sir-input" placeholder="Search Inbox"></input>
    	 		<button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
    	 	</form> 
            </div>   
         </div>
    </div>                          
    );
  }
}

export default Inbox;