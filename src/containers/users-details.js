import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    if (!this.props.users) {
      return <div>Select a users to get started.</div>;
    }
    return (
      <div>
        <h1>User Details</h1>
        <div>First Name - {this.props.users.first}</div>
        <div>Last Name - {this.props.users.last}</div>
        <div>Age - {this.props.users.age}</div>
        <div>Hobbie - {this.props.users.hobbie}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.activeUser
  };
}
export default connect(mapStateToProps)(UserDetails);
