import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Send from "./Send"; 

let temp = {};
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: ""
      },
      isclick: false
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({
      [name]: value
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    this.state.isclick = true;
  };
 
  render() {
    const { first_name, last_name, email, gender, age } = this.state;
 
    let c = this.state.isclick;
    if (c) {
      temp = this.state;
      return (
        <Router>
          <div>
            <Switch>
              <Route>
                <Send {...this.props} />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <form>
          <h1>Add Employee </h1>
          <label for="fname">First_Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <label for="lname">Last_Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <label for="email">Email</label>
          <input
            type="email"
            email="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label for="gender">Gender</label>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={this.handleChange}
          />
          <label for="gender">Age</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      );
    }
  }
}
export default Form;
export { temp }