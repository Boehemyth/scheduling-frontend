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
      <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo" id="page-title">Let's Eat Out</Link>
        {this.props.currentUser.isAuthenticated ? (
          <ul className="right" id="nav-mobile">
            <li>
              <span id="log-out" onClick={this.logout}>Log Out</span>
            </li>
          </ul>
            ) : (
            <ul className="right hide-on-med-and-down" id="nav-mobile">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
            )
          }
        </div>
      </nav>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);