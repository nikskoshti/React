import React from "react";
import Btnreact from "./Btn_react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Display from "./Display";

class login1 extends React.Component {
  constructor() {
    super();
    this.state = {
      field: { username: "", password: "" },
      errors: {},
      isadmin: false
    };

    this.handelChange = this.handelChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handelChange(e) {
    let field = this.state.field;
    field[e.target.name] = e.target.value;
    this.setState({
      field
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (
      this.state.field["username"] === "abc" &&
      this.state.field["password"] === "abc"
    ) {
      this.setState({ isadmin: true });
    } else {
      alert("Re-Enter Your Password and User-Name");
    }
  }

  render() {
    var f = this.state.isadmin;
    if (f) {
      return (
        <Router>
          <div>
            <Switch>
              <Route>
                <Btnreact />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div id="main-registration-container">
          <div id="register">
            <h3>
              <b>Login Admin</b>
            </h3>
            <form
              method="post"
              name="userregisterationform"
              onSubmit={this.submituserRegistrationForm}
            >
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={this.state.field.username}
                onChange={this.handelChange}
              ></input>
              <div className="errorMsg">{this.state.errors.username}</div>

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.field.password}
                onChange={this.handelChange}
              ></input>
              <div className="errorMsg">{this.state.errors.password}</div>

              <input type="submit" className="button" value="login"></input>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default login1;
