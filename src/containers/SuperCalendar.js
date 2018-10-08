import React, { Component } from "react";
import { connect } from "react-redux";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { fetchEvents } from "../store/actions/events";
import AgendaEvent from "../components/AgendaEvent";

class SuperCalendar extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);

    return (
      <div>
        <BigCalendar 
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'agenda']}
          onSelectEvent={(event) => alert(JSON.stringify(event))}
          components={{agenda: {event:AgendaEvent}}}
          length={90}
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, {fetchEvents})(SuperCalendar);