import React from 'react';
import { Component } from 'react';

class InboxBody extends Component {
  render() {
    return (
      <div>
       <table className="table table-inbox table-hover">
             <tbody>
              <tr className="unread"></tr>
                <input type="checkbox" className="mail-checkbox"></input> 
                    
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message  dont-show">PHPclassName</td>
                    <td className="view-message ">Added a new className: Login className Fast Site</td>
                    <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message  text-right">9:27 AM</td>
                
            
             </tbody>
        </table>
      </div>
    );
  }
}

export default InboxBody;

      
                    
                      