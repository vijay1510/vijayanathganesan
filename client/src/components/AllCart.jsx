import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

class AllCart extends Component {
  render() {
    return (
      <>
        <h1>CART</h1>
        {this.props.cart.map((e) => (
          <Cart key={e.id} {...e} />
        ))}
        <hr />
        <p>Tax 21% $250</p>
        <p>Quantity 3</p>
        <p>Total $2400</p>
        <button>order</button>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(AllCart);
