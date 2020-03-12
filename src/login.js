import React from "react";
import "./login.css";
import './Display';
// import {withRouter} from 'react-router-dom';
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute

 
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: { username: "admin", password: "admin" },
      errors: {}
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
 
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
 
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (
      this.state.fields["username"] === "admin" &&
      this.state.fields["password"] === "admin"
    ) {
      alert("Form submitted");
     
    }
    else{
        alert("Username and Password is Not valid");
        return false;
    }
  }
 
  render() {
    return (
      <div id="main-registration-container" className="login-form">
        <div id="register">
          <center><h3>Login</h3></center>
          <form
            method="post"
            username="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>username</label>
            <input
              type="text"
              username="username"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.username}</div>
 
            <label>Password</label>
            <input
              type="password"
              username="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Register" />
          </form>
        </div>

      </div>
      
    ) ;
    
  }
}


 
export default RegisterForm;