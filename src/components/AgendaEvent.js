import React, { Component } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import "./AgendaEvent.css";


class AgendaEvent extends Component {
  render() {
    let { _id, title, location, contactName, organization, phone, email, carts } = this.props.event;

    let assignedCarts = carts.length > 0 ? formatCartsList(carts) : "No assigned carts";

    return (
      <Collapsible>
        <CollapsibleItem header={`${title} at ${location}`} icon='fastfood'>
          <div className="event-contact">
            <span className="contact-info--name"><b>Contact:</b> {contactName}</span>
            <span className="contact-info--org">{organization}</span>
            <span className="contact-info--email">
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
            </span>
            <span className="contact-info--phone">
              <a href={`tel:${phone}`}>{phone}</a>
            </span>
          </div>
          <div className="event-carts">
            <b>Carts:</b> {assignedCarts}
          </div>
          <div className="event-update">
            <a href={`/api/admin/events/${_id}`}>
              <i className="material-icons" id="event-edit-icon">edit</i> Edit event
            </a>
          </div>
        </CollapsibleItem>
      </Collapsible>
    );
  }
}


export default AgendaEvent;

function formatCartsList (carts) {
  let formatted = '';
  carts.forEach(function (currentValue, index, array){
    if (index !== array.length -1) {
      formatted += currentValue + ', ';
    } else {
      formatted += currentValue
    };
  })
  return formatted;
}
