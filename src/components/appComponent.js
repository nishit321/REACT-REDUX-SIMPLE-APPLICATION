import React, { Component } from "react";
import UserList from "../containers/users-list";
import UserDetails from "../containers/users-details";

class appComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Username List:</h2>
        <UserList />
        <hr />
        <UserDetails />
      </div>
    );
  }
}

export default appComponent;
