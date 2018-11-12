import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../store/actions/carts";

class NewCartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartName: '',
      owner: '',
      email: '',
      phone: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleNewCart = e => {
    e.preventDefault();
    this.props.addCart(this.state);
    this.setState({
      cartName: '',
      owner: '',
      email: '',
      phone: ''
    });
  }

  render() {
    const { cartName, owner, email, phone } = this.state;

    // Isn't this the same as CartForm?  If so, we should use that here instead of duplicating our code.
    return (
      <form onSubmit={this.handleNewCart}>

        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label htmlFor="cartName">Cart Name:</label>
            <input
              type="text"
              id="cartName"
              name="cartName"
              value={cartName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label htmlFor="owner">Owner Name:</label>
            <input
              type="text"
              id="owner"
              name="owner"
              value={owner}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label htmlFor="email">Owner Email:</label>
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
          <div className="input-field col s12">
            <label htmlFor="phone">Owner Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button className="btn" type="submit">
          Submit <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { addCart })(NewCartForm);