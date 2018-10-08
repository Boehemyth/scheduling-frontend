import React, { Component } from "react";
import { connect } from "react-redux";


class SingleEvent extends Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(SingleEvent);