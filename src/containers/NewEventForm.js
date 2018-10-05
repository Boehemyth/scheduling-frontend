import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../store/actions/events";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class NewEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      contactName: '',
      organization: '',
      email: '',
      phone: '',
      date: moment(),
      startDate: moment(),
      timeStart: '',
      timeEnd: '',
      location: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleDateChange = date => {
    let val = date.format();
    this.setState({
      date: val,
      startDate: date,
    })
  };

  handleNewEvent = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addEvent(this.state);
    this.setState({
      title: '',
      contactName: '',
      organization: '',
      email: '',
      phone: '',
      date: '',
      timeStart: '',
      timeEnd: '',
      location: ''
    });
  };

  render() {
    const { 
      title, 
      contactName,
      organization,
      phone,
      email,
      timeStart, 
      timeEnd, 
      location
    } = this.state;

    return(
      <form onSubmit={this.handleNewEvent}>
        {this.props.errors.message && 
          <div className="cart red">
            <div className="cart-content white-text error">
              {this.props.errors.message}
            </div>
          </div>
        }
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label htmlFor="title">Event Title:</label>
            <input 
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label htmlFor="location">Location:</label>
            <input 
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12 l6"> 
            <label htmlFor="contactName">Contact Name:</label>
            <input 
              type="text"
              id="contactName"
              name="contactName"
              value={contactName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field col s12 l6"> 
            <label htmlFor="organization">Organization:</label>
            <input 
              type="text"
              id="organization"
              name="organization"
              value={organization}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12 l6"> 
            <label htmlFor="phone">Phone:</label>
            <input 
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field col s12 l6">
            <label htmlFor="email">Email:</label>
            <input 
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div> 
        </div>
        <div className="row no-bottom-margin">
          <div className="col s12 l4">
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </div>
          <div className="col s12 l4">
            <label htmlFor="timeStart">Start:</label>
            <input 
              type="text"
              id="timeStart"
              name="timeStart"
              value={timeStart}
              onChange={this.handleChange}
            />
          </div>
          <div className="col s12 l4">
            <label htmlFor="timeEnd">End:</label>
            <input 
              type="text"
              id="timeEnd"
              name="timeEnd"
              value={timeEnd}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button className="btn" type="submit">
          Submit <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, {addEvent})(NewEventForm);