import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SelectUser } from "../actions/index";

class UserList extends Component {
  createListItem() {
    console.log(this.props);
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.createListItem()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispactToProps(dispatch) {
  console.log("Dispatch Method Called");
  return bindActionCreators({ selectUser: SelectUser }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispactToProps
)(UserList);
