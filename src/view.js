import React from "react";
import "./App.css";

let EMPLOYEES = [
  {
    id: 1,
    first_name: "Sheena",
    last_name: "Bernardt",
    email: "sbernardt0@google.com.au",
    gender: "Female",
    ip_address: "Accounting",
    age: 54
  },
  {
    id: 2,
    first_name: "Jude",
    last_name: "Downing",
    email: "jdowning1@techcrunch.com",
    gender: "Male",
    ip_address: "Sales",
    age: 47
  },
  {
    id: 3,
    first_name: "Cody",
    last_name: "Beers",
    email: "cbeers2@irs.gov",
    gender: "Male",
    ip_address: "Research and Development",
    age: 31
  },
  {
    id: 4,
    first_name: "Bertie",
    last_name: "Beaten",
    email: "bbeaten3@cmu.edu",
    gender: "Male",
    ip_address: "Business Development",
    age: 31
  },
  {
    id: 5,
    first_name: "Allan",
    last_name: "Aron",
    email: "aaron4@wikipedia.org",
    gender: "Male",
    ip_address: "Research and Development",
    age: 29
  },
  {
    id: 6,
    first_name: "Shara",
    last_name: "Hune",
    email: "shune5@cam.ac.uk",
    gender: "Female",
    ip_address: "Product Management",
    age: 26
  },
  {
    id: 7,
    first_name: "Nester",
    last_name: "Denning",
    email: "ndenning6@wsj.com",
    gender: "Male",
    ip_address: "Support",
    age: 55
  },
  {
    id: 8,
    first_name: "Preston",
    last_name: "Domone",
    email: "pdomone7@weebly.com",
    gender: "Male",
    ip_address: "Product Management",
    age: 38
  },
  {
    id: 9,
    first_name: "Bobbette",
    last_name: "Coppenhall",
    email: "bcoppenhall8@yahoo.com",
    gender: "Female",
    ip_address: "Support",
    age: 30
  },
  {
    id: 10,
    first_name: "Erminia",
    last_name: "Annesley",
    email: "eannesley9@upenn.edu",
    gender: "Female",
    ip_address: "Human Resources",
    age: 36
  },
  {
    id: 11,
    first_name: "Peyter",
    last_name: "Bowbrick",
    email: "pbowbricka@rediff.com",
    gender: "Male",
    ip_address: "Legal",
    age: 60
  },
  {
    id: 12,
    first_name: "Doyle",
    last_name: "Lanfer",
    email: "dlanferb@ezinearticles.com",
    gender: "Male",
    ip_address: "Marketing",
    age: 34
  }
];

let LoginView = props => {
  return (
    <div>
      Login View
      <div>
        <button onClick={() => props.goto("MANAGEEMPLOYEE")}>
          Go to Manage Employee
        </button>
      </div>
    </div>
  );
};

let ManageEmployeesView = props => {
  return (
    <div>
     <center><b> Manage Employees View</b></center>
      <div>
        <button onClick={() => props.goto("EDITEMPLOYEE")}>
          Add Employee
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Dept</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(item => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.ip_address}</td>
              <td>{item.age}</td>
              <td>
                <button className="btn btn-dabger btn-sm" onClick={() => props.select(item)}>View</button>{" "}
              </td>
              <td>
                <button className="btn btn-dabger btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



let EditEmployeView = props => {
  console.log(props);
  return (
    <div className="container">
      <center><b>View Employee Data</b></center>
      <div>
        <button className="btn btn-dabger btn-sm" onClick={() => props.goto("MANAGEEMPLOYEE")}>
          Home
        </button>
      </div>
      <div>
        <div>
          <label>First Name :-</label>&nbsp;
          <span>{props.currentEmployee.first_name}</span>
        </div><br></br>
        <div>
          <label>Last Name:-</label>&nbsp;
          <span>{props.currentEmployee.last_name}</span>
        </div><br></br>
        <div>
          <label>Email:-</label>&nbsp;<span>{props.currentEmployee.email}</span>
        </div><br></br>
        <div>
          <label>Gender</label>&nbsp;
          <span>{props.currentEmployee.gender}</span>
        </div><br></br>
        <div>
          <label>Dept</label>&nbsp;
          <span>{props.currentEmployee.ip_address}</span>
        </div><br></br>
        <div>
          <label>Age</label>&nbsp;
          <span>{props.currentEmployee.age}</span>
        </div>
      </div>
    </div>
  );
};

let Page = props => {
  if (props.page === "LOGIN") {
    return <LoginView {...props} />;
  }
  if (props.page === "MANAGEEMPLOYEE") {
    return <ManageEmployeesView {...props} />;
  }
  if (props.page === "EDITEMPLOYEE") {
    return <EditEmployeView {...props} />;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "LOGIN",
      employees: EMPLOYEES,
      currentEmployee: null
    };
  }

  changeView = page => {
    let state = this.state;
    this.setState({ ...state, page: page });
  };

  select = employee => {
    let state = this.state;
    this.setState({
      ...state,
      currentEmployee: employee,
      page: "EDITEMPLOYEE"
    });
  };
  render() {
    return (
      <div className="App">
        <span>{this.state.page}</span>
        <Page
          page={this.state.page}
          goto={this.changeView}
          employees={this.state.employees}
          currentEmployee={this.state.currentEmployee}
          select={this.select}
        />
      </div>
    );
  }
}

export default App;
