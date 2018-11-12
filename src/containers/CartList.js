import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCarts, updateCart } from "../store/actions/carts";
import "./CartList.css";
import { Modal, Button } from "react-materialize";
//import UpdateCartForm from "./UpdateCartForm";
import CartForm from "../components/CartForm";

class CartList extends Component {
  componentDidMount() {
    this.props.fetchCarts();
  }

  // This doesn't work because it's feeding cartform from props, and not state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleUpdateCart = e => {
    e.preventDefault();
    this.props.updateCart(this.state);
  };


  render() {
    const { carts } = this.props;
    let cartList = carts.map(cart => (
      <Cart 
        key={cart._id}
        id={cart._id}
        name={cart.name}
        owner={cart.owner}
        phone={cart.phone}
        email={cart.email}
        handleChange={this.handleChange}
        handleUpdateCart={this.handleUpdateCart}
        updateCart={updateCart}
        fetchCarts={fetchCarts}
      />
    ));
    return (
      <table id="cartList">
        <thead>
          <tr>
            <th>
              Cart Name
            </th>
            <th>
              Owner Name
            </th>
            <th>
              Contact Info
            </th>
            <th>
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {cartList}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    carts: state.carts
  }
}

export default connect(mapStateToProps, { fetchCarts, updateCart })(CartList);

const Cart = props => (
  <tr className="cartList--cart">
    <td className="cartList--name">
      {props.name}
    </td>
    <td className="cartList--owner">
      {props.owner}
    </td>
    <td className="cartList--contact">
      <span>Phone: <a href={`tel:${props.phone}`}>{props.phone}</a></span>
      <span>Email: <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">{props.email}</a></span>
    </td>
    <td className="cartList--edit">
      <Modal
        trigger={<Button><i className="material-icons">edit</i></Button>}
        actions={
          <div className="modal-footer">
            <Button modal="close" className="btn" type="submit" form="update-cart">
              Update <i className="material-icons right">send</i>
            </Button>
            <Button modal="close" className="red darken-2">Cancel</Button>
          </div>
        }
        modalOptions={{
          onCloseEnd: () => props.fetchCarts()
        }}
      >
        <CartForm id={props._id} {...props} />
      </Modal>
    </td>
  </tr>
);