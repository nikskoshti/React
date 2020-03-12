import React, { Component } from "react";
var data = require("./MOCK_DATA.json");

class Display extends Component {
  statereq = { users: data };
  render() {
    return (
      <div className="container">
        <center>
          <h1>Users</h1>
        </center>
        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th>id</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>gender</th>
              <th>ip_address</th>
              <th>age</th>
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
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Display;
