import React, { Component } from "react";
var data = require("./MOCK_DATA.json");

class Display extends Component {
  statereq = { users: data };

  onDelete(first_name) {
    const UserInfo = this.getUser_Info();

    const filteredUser_Info = UserInfo.filter(UserInfo => {
      return UserInfo.first_name !== first_name;
    });

    this.setState({ UserInfo: filteredUser_Info });
  }
  render() {
    return (
      <div className="container">
        <div className="card-header">
          <center>
            {" "}
            <h1>ABC India Pvt Ltd</h1>
          </center>
        </div>

        <center>
          <h5>Employee Records</h5>
        </center>
        <br />
        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th>Id</th>
              <th>First_name</th>
              <th>Last_name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Age</th>
            </tr>
          </thead>
          {this.statereq.users.map(user => (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address}</td>
                <td>{user.age}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={this.onDelete}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div class="card-footer text-muted">
          <center>
            <p>Copyrights @2020 Pune,India All right reserved</p>
          </center>{" "}
        </div>
      </div>
    );
  }
}

export default Display;
