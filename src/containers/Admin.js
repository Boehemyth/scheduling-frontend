import React, { Component } from "react";
import { connect } from "react-redux";
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'account'
    }
  }

  render() {
    let { user } = this.props.currentUser;
    
    return (
      <div id="admin-wrapper">
        <h1>Welcome, {user.ownerName}!</h1>
        <div id="admin-panel--wrapper">
          <div id="admin-panel--navbar">
            <a className="admin-navbar active" id="admin-account">Account</a>
            <a className="admin-navbar" id="admin-cart">Cart Info</a>
            <a className="admin-navbar" id="admin-schedule">Cart Schedule</a>
          </div>
          <div id="admin-panel">
            
          </div>
        </div>
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