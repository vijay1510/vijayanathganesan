import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    symbol: state.symbol,
  };
};

class AllCart extends Component {
  render() {
    return (
      <>
        <h1 className='all_cart'>CART</h1>
        {this.props.cart.map((e) => (
          <Cart key={e.altId} {...e} />
        ))}
        <hr className='cart_hr' />
        <p className='all_cart_tax' style={{ marginTop: 20 }}>
          Tax 21%:{" "}
          <span style={{ fontWeight: 700, marginLeft: 10 }}>
            {this.props.symbol}250
          </span>
        </p>
        <p className='all_cart_tax'>
          Quantity: <span style={{ fontWeight: 700 }}>3</span>
        </p>
        <p className='all_cart_tax'>
          Total:
          <span style={{ fontWeight: 700, marginLeft: 40 }}>
            {this.props.symbol}2400
          </span>
        </p>
        <button className='all_cart_order'>order</button>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(AllCart);
