import React, { Component } from "react";

import "./App.css";
import Display from "./Btn_react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isclick: false
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <Display />
      </div>
    );
  }
}

export default App;
