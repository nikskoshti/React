import React from "react";

class Add_Btn_react extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: ""
    };
  }

  handelInputChange = e => {
    console.log("back to root");
    this.setState({ [e.target.name]: e.target.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    console.log("save form");
    this.props.onAdd(
      this.state.id,
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.gender,
      this.state.ip_address,
      this.state.age
    );
    console.log("inserrted data sucessfully");
    // this.state.id = "";
    // this.state.first_name = "";
    // this.state.last_name = "";
    // this.state.email = "";
    // this.state.gender = "";
    // this.state.ip_address = "";
    // this.state.age = "";
  };
  render() {
    return (
      <div className="container">
        <div className="card-header">
          <center>
            {" "}
            <h1>ABC India Pvt Ltd</h1>
          </center>
        </div>
        <br />
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label>Id :-</label>
            <input
              class="form-control"
              type="text"
              name="id"
              placeholder="Emp_ID"
              required={true}
              value={this.state.id}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>First Name :-</label>
            <input
              class="form-control"
              type="text"
              name="first_name"
              required={true}
              placeholder="Employee First Name"
              value={this.state.first_name}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>Last Name :-</label>
            <input
              class="form-control"
              type="text"
              name="last_name"
              required={true}
              placeholder="Employee Last Name"
              value={this.state.last_name}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>Email :-</label>
            <input
              class="form-control"
              type="email"
              name="email"
              required={true}
              placeholder="Employee Offical Email Id"
              value={this.state.email}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>Gender :-</label>
            <input
              class="form-control"
              type="text"
              name="gender"
              required={true}
              placeholder="Employee Gender"
              value={this.state.gender}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>IP Address :-</label>
            <input
              class="form-control"
              type="text"
              name="ip_address"
              required={true}
              placeholder="IP Address of Your Computer/Laptop"
              value={this.state.ip_address}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <div>
            <label>Age :-</label>
            <input
              class="form-control"
              type="text"
              name="age"
              required={true}
              placeholder="Employee Current Age"
              value={this.state.age}
              onChange={this.handelInputChange}
            ></input>
          </div>
          <br />
          <input className="btn btn-primary" type="button" value="save" />
        </form>
        <br />
        <div class="card-footer text-muted">
          <center>
            <p>Copyrights @2020 Pune,India All right reserved</p>
          </center>{" "}
        </div>
      </div>
    );
  }
}

export default Add_Btn_react;
