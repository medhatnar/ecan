import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email:'',
      message:'',
      isAuth: false
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.onUserChange = this.onUserChange.bind(this);
  this.onPasswordChange = this.onPasswordChange.bind(this);
  this.onEmailChange = this.onEmailChange.bind(this);
  }


componentWillMount() {
 
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

onEmailChange(event) {

  this.setState({
    email: event.target.value
   });  
}


handleSubmit (event) {
  event.preventDefault();
  let username = this.state.username;
  let password = this.state.password;
  let email = this.state.email;
 
  axios.post('/auth/signup', {username, password, email})
  	   .then(res => {
  	   		let token = res.data.token;
  	   		let user = res.data.username;
  	   		let message = res.data.message;

  	   		if(!token) {
  	   			this.setState({ message })
  	   		} else {
  	   			localStorage.clear();
  	   			localStorage.setItem('token', token);
  	   			localStorage.setItem('username', user);
            this.setState({isAuth: true})
            location.reload();
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
                  <img src="../assets/core.png" className="img-responsive" alt="Conxole Admin" />
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
                    <input className="form-control" placeholder="Hack Reactor E-mail" id="password" type="email" name="email" onChange={this.onEmailChange}/>
                    <br />
                    <p class="animated infinite fadeIn" id="login_fail">{this.state.message}</p>
                    <br />
                    <input className="btn btn-lg btn-success btn-block" type="submit" id="login" defaultValue="Signup »" />
                  </fieldset>
                </form>
              </div>
              <p className="sign_up_text"> Already have an account? <Link to="/">Login here!</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Signup;