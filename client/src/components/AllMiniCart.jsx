import React, { Component } from "react";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    symbol: state.symbol,
  };
};

class AllMiniCart extends Component {
  render() {
    return (
      <div className='all_mini example'>
        <h1 className='all_mini_bag'>
          <strong> My Bag,</strong>
          <span style={{ fontWeight: 300 }}> 3 items</span>
        </h1>
        {this.props.cart.map((e) => (
          <MiniCart key={e.altId} {...e} />
        ))}
        <p className='all_mini_total'>
          <strong> TOTAL</strong>
          <span className='total_amt'>{this.props.symbol}300.00</span>
        </p>
        <button className='all_mini_view'>
          <Link style={{ textDecoration: "none" }} to='/cart'>
            view bag
          </Link>
        </button>
        <button className='all_mini_checkout'>Checkout</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(AllMiniCart);
