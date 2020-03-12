import React from "react";
import ViewBtnreact from "./View_Btn_react";
import AddBtnreact from "./Add_Btn_react";
// import UserInfo from "./MOCK_DATA.json";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclick: true
    };
  }

  getUser_Info() {
    return this.state.UserInfo;
  }

  OnAdd(id, first_name, last_name, email, gender, ip_address, age) {
    const UserInfo = this.getUser_Info();
    UserInfo.push({
      id,
      first_name,
      last_name,
      email,
      gender,
      ip_address,
      age
    });
    this.setState({ UserInfo });
  }

  render() {
    var f = this.state.isclick;
    if (f) {
      return (
        <div>
          <button onClick={() => this.setState({ isclick: false })}>
            Add Records
          </button>
          <ViewBtnreact />
        </div>
      );
    } else {
      return (
        <div>
          <AddBtnreact />
        </div>
      );
    }
  }
}
export default Show;
