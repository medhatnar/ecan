import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getUser } from '../actions/getUser.js';
import { log } from '../actions/log.js';
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message:'',
      isAuth: false
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.onUserChange = this.onUserChange.bind(this);
  this.onPasswordChange = this.onPasswordChange.bind(this);
  
  }


componentWillMount() {

  if(localStorage.token) {
    
    this.setState({isAuth: true})

  }
}

componentDidMount() {
  this.setState({isAuth: this.props.logging})
}

onUserChange(event) {
  
  this.setState({
    username: event.target.value
   });  
}

onPasswordChange(event) {
  
  this.setState({
    password: event.target.value
   });  
}


handleSubmit (event) {
  event.preventDefault();
  let username = this.state.username;
  let password = this.state.password;

  axios.post('/auth/login',{username, password})
  .then(res => {

    let token = res.data.token;
    let message = res.data.message;

    if(!token) {
      this.setState({message: message})
      console.log(this.state.message);

    } else {
    
    this.setState({isAuth: true})
    location.reload();
            localStorage.setItem('token', token);
            localStorage.setItem('username', this.state.username);
    }     

  })

}

  render() {
    
    if (this.state.isAuth) {
      return (
        <Redirect to={'/inbox'}/>
      )
    }

    return (

      <div id="main_contain">
        <div className="row vertical-offset-100">
          <div className="col-md-6 col-md-offset-5">
            <div className="panel panel-default">
              <div className="panel-heading">                                
                <div className="row-fluid user-row">
                  <img src="http://s11.postimg.org/7kzgji28v/logo_sm_2_mr_1.png" className="img-responsive" alt="Conxole Admin" />
                </div>
              </div>

              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form" className="form-signin" onSubmit={this.handleSubmit}>
                  <fieldset>
                    <label className="panel-login">
                      <div className="login_result" />
                    </label>
                    <input className="form-control" placeholder="Username" id="username" type="text" name="username" onChange={this.onUserChange}/>
                    <input className="form-control" placeholder="Password" id="password" type="password" name="password" onChange={this.onPasswordChange}/>
                    <br />
                    <p class="animated infinite fadeIn" id="login_fail">{this.state.message}</p>
                    <br />
                    <input className="btn btn-lg btn-success btn-block" type="submit" id="login" defaultValue="Login »" />
                  </fieldset>
                </form>
              </div>
              <p className="sign_up_text"> New to HR Outreach? <Link to="/signupform">Sign up here!</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ getUser, log }, dispatch);
}

function mapStateToProps(state) {
  return {
    logging: state.logging
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);