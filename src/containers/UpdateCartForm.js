import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../store/actions/carts";

class UpdateCartForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.id,
      cartName: this.props.name,
      owner: this.props.owner,
      email: this.props.email,
      phone: this.props.phone
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleUpdateCart = e => {
    e.preventDefault();
    this.props.updateCart(this.state);
  }

  render() {
    const { cartName, owner, email, phone } = this.state;
    
    return ( //button for submit is  on CartList under Cart modal
      <form onSubmit={this.handleUpdateCart} id="update-cart">
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label className="active" htmlFor="cartName">Cart Name:</label>
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
            <input
              type="text"
              id="owner"
              name="owner"
              value={owner}
              onChange={this.handleChange}
            />
            <label className="active" htmlFor="owner">Owner Name:</label>
          </div>
        </div>
        <div className="row no-bottom-margin">
          <div className="input-field col s12">
            <label className="active" htmlFor="email">Owner Email:</label>
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
            <label className="active" htmlFor="phone">Owner Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { updateCart })(UpdateCartForm);