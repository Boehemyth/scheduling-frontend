import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    return (
      <header>
        <Link to="/" className="navbar-brand" id="page-title">Let's Eat Out</Link>
        {this.props.currentUser.isAuthenticated ? (
          <ul className="nav-items">
            <li>
              <a onClick={this.logout}>Log Out</a>
            </li>
          </ul>
            ) : (
            <ul className="nav-items">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
            )
          }
      </header>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);