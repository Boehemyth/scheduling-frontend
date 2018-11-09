import React from "react";

const CartForm = (props) => (
  <form onSubmit={props.handleUpdateCart} id="update-cart">
    <div className="row no-bottom-margin">
      <div className="input-field col s12">
        <label className="active" htmlFor="cartName">Cart Name:</label>
        <input
          type="text"
          id="cartName"
          name="cartName"
          value={props.cartName}
          onChange={props.handleChange}
        />
      </div>
    </div>
    <div className="row no-bottom-margin">
      <div className="input-field col s12">
        <input
          type="text"
          id="owner"
          name="owner"
          value={props.owner}
          onChange={props.handleChange}
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
          value={props.email}
          onChange={props.handleChange}
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
          value={props.phone}
          onChange={props.handleChange}
        />
      </div>
    </div>
  </form>
); 

export default CartForm;