import React from "react";
//import Info from './Info';
//import "./LoginLayout.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Send from "./Send";

class LoginLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: { username: "", password: "" },
      errors: {},
      isadmin: false
    };
  }

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    if (
      this.state.fields["username"] === "admin@abc.com" &&
      this.state.fields["password"] === "admin@123"
    ) {
      this.setState({ isadmin: true });
    } else {
      alert("Re-enter username and password");
    }
  };

  render() {
    var f = this.state.isadmin;
    if (f) {
      return (
        <Router>
          <div>
            <Route>
              <Send />
            </Route>
          </div>
        </Router>
      );
    } else {
      return (
        <div id="main-registration-container">
          <div id="register">
            <h3>Login admin</h3>
            <form method="post" onSubmit={this.submituserRegistrationForm}>
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.username}</div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
              <input type="submit" className="button" value="Login" />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default LoginLayout;
