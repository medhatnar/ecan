import React from 'react';
import map from 'lodash.map';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { log } from '../actions/log.js';
import { withRouter } from 'react-router';
import { getMail } from '../actions/getMail.js';
import { getUser } from '../actions/getUser.js';
import { getAuth } from '../actions/getAuth.js';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class InboxBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: true
   }
    this.getAuth = this.getAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  getAuth() {
    console.log("get auth")
  this.props.getAuth();

  }

  handleLogout() {
    console.log("LOGGING OUT LOGGING OUT")
    localStorage.removeItem('token');
    localStorage.removeItem('gauth');
    localStorage.setItem('gauth', null);
    localStorage.clear();
    console.log(localStorage)
    this.props.log(false);
    this.setState({isAuth: this.props.logging});
    console.log("HERRRRRRRRRRRRRRRRRRO AUTH: ", this.state.isAuth)
    location.reload();
    console.log("reload")
  }

  componentWillMount() {
    if(!localStorage.token) {
      this.props.history.push('/')
    } 

     if(!localStorage.gauth) {
      
      this.getAuth(localStorage.username)
      
    } else {

      console.log("HELLOOOO")
      this.props.getMail(localStorage.gauth);
    }
}

  componentDidMount() {
    this.props.getUser(localStorage.username);
  }

  renderInbox() {

     console.log(this.props.mail[0])

  return (
   map( this.props.mail[0], (info, i) => {
      console.log("INFO: ", i, info['From'])
      //  if(info['Message-ID']) {let id = data ? data[i]['Message-ID'] : i;}
        //if(info['Date'])  {let date = data[i]['Date'];}
        // if(data[i]['From']) { let sender = data[i]['From'];}
        // if(data[i]['To'])  {let receiver = data[i]['To'];}
        // if(data[i]['Subject']) {let subject = data[i]['Subject'] ? data[i]['Subject'] : 'No Subject'; }
                return (
                  <tr className="unread">
                        <td className="inbox-small-cells">
                          <input type="checkbox" className="mail-checkbox" />
                        </td>
                        <td className="inbox-small-cells"><i className="fa fa-star" /></td>
                        <td className="view-message  dont-show">{info['From']}</td>
                        <td className="view-message ">{info['Subject'] ? info['Subject'] : "No Subject"}</td>
                        <td className="view-message  inbox-small-cells">

                         <Delete />

                        </td>
                        <td className="view-message  text-right">{info['Date']}</td>
                      </tr>
                    )       

          })
      )
  }

  render() {

    if (!this.state.isAuth) {
      return (
        <Redirect to={'/'}/>
      )
    }

    return (

      <div className="container" id="mainContainer">
        <link rel="stylesheet prefetch" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
        <div className="mail-box">
          <aside className="sm-side">
            <div className="user-head">
              <a className="inbox-avatar" href="javascript:;">
                <img width={64} height={60} src="../assets/logo.png" />
              </a>
              <div className="user-name">
                <h5><a href="#">Narmin Shahin</a></h5>
                <span><a href="#">narmin.shahin@hackreactor.com</a></span>
              </div>

              
       <DropDownMenu value={2}>
          <MenuItem onTouchTap={this.handleLogout} primaryText="Logout"/>
        </DropDownMenu>
        <br />

            </div>
            <div className="inbox-body">
              <a href="#myModal" data-toggle="modal" title="Compose" className="btn btn-compose">
                Compose
              </a>
              {/* Modal */}
              <div aria-hidden="false" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade" style={{display: 'none'}}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                      <h4 className="modal-title">Compose</h4>
                    </div>
                    <div className="modal-body">
                      <form role="form" className="form-horizontal">
                        <div className="form-group">
                          <label className="col-lg-2 control-label">To</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder id="inputEmail1" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Cc / Bcc</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder id="cc" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Subject</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder id="inputPassword1" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Message</label>
                          <div className="col-lg-10">
                            <textarea rows={10} cols={30} className="form-control" id name defaultValue={""} />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-lg-offset-2 col-lg-10">
                            <span className="btn green fileinput-button">
                              <i className="fa fa-plus fa fa-white" />
                              <span>Attachment</span>
                              <input type="file" name="files[]" multiple />
                            </span>
                            <button className="btn btn-send" type="submit">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>{/* /.modal-content */}
                </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
            </div>
            <ul className="inbox-nav inbox-divider">
              <li className="active">
                <a href="#"><i className="fa fa-inbox" /> Inbox <span className="label label-danger pull-right">2</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-envelope-o" /> Sent Mail</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-bookmark-o" /> Important</a>
              </li>
              <li>
                <a href="#"><i className=" fa fa-external-link" /> Drafts <span className="label label-info pull-right">30</span></a>
              </li>
              <li>
                <a href="#"><i className=" fa fa-trash-o" /> Trash</a>
              </li>
            </ul>
          
            <div className="inbox-body text-center">
              <div className="btn-group">
                <a className="btn mini btn-primary" href="javascript:;">
                  <i className="fa fa-plus" />
                </a>
              </div>
              <div className="btn-group">
                <a className="btn mini btn-success" href="javascript:;">
                  <i className="fa fa-phone" />
                </a>
              </div>
              <div className="btn-group">
                <a className="btn mini btn-info" href="javascript:;">
                  <i className="fa fa-cog" />
                </a>
              </div>
            </div>
          </aside>
          <aside className="lg-side">
            <div className="inbox-head">
              <h3>Hack Reactor Outreach</h3>
              <form action="#" className="pull-right position">
                <div className="input-append">
                  <input type="text" className="sr-input" placeholder="Search Mail" />
                  <button className="btn sr-btn" type="button"><i className="fa fa-search" /></button>
                </div>
              </form>
            </div>
            <div className="inbox-body">
              <div className="mail-option">
                <div className="chk-all">
                  <input type="checkbox" className="mail-checkbox mail-group-checkbox" />
                  <div className="btn-group">
                    <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                      All
                      <i className="fa fa-angle-down " />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#"> None</a></li>
                      <li><a href="#"> Read</a></li>
                      <li><a href="#"> Unread</a></li>
                    </ul>
                  </div>
                </div>
                <div className="btn-group">
                  <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
                    <i className=" fa fa-refresh" />
                  </a>
                </div>
                <div className="btn-group hidden-phone">
                  <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                    More
                    <i className="fa fa-angle-down " />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil" /> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban" /> Spam</a></li>
                    <li className="divider" />
                    <li><a href="#"><i className="fa fa-trash-o" /> Delete</a></li>
                  </ul>
                </div>
                <div className="btn-group">
                  <a data-toggle="dropdown" href="#" className="btn mini blue">
                    Move to
                    <i className="fa fa-angle-down " />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil" /> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban" /> Spam</a></li>
                    <li className="divider" />
                    <li><a href="#"><i className="fa fa-trash-o" /> Delete</a></li>
                  </ul>
                </div>
                <ul className="unstyled inbox-pagination">
                  <li><span>1-50 of 234</span></li>
                  <li>
                    <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left" /></a>
                  </li>
                  <li>
                    <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right" /></a>
                  </li>
                </ul>
              </div>
              <table className="table table-inbox table-hover">
                <tbody>
                  {this.renderInbox()}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ getUser, getAuth, getMail, log}, dispatch);
}

function mapStateToProps(state) {
  return {
    logging: state.logging, mail: state.mail
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(InboxBody));

      
                    
                      