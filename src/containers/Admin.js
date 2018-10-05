import React, { Component } from "react";
import { connect } from "react-redux";
import SuperAdminPanel from "../components/SuperAdminPanel";
import UserAdminPanel from "../components/UserAdminPanel";

import "./Admin.css";

class Admin extends Component {
  render() {
    let { user } = this.props.currentUser;
    let userAdmin = (user.userRole === "super") ? <SuperAdminPanel /> : <UserAdminPanel />;


    return (
      <div>
        <h1>Welcome, {user.name}!</h1>
        {userAdmin}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Admin);
