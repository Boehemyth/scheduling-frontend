import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../store/actions/events";

class SingleEvent extends Component {
  componentDidMount() {
    this.props.fetchSingleEvent();
  }

  render() {
    return (
      <div>
        This is an Event!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { fetchSingleEvent })(SingleEvent);