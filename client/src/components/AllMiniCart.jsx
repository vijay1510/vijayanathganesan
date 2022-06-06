import React, { Component } from "react";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

class AllMiniCart extends Component {
  render() {
    return (
      <div className='all_mini example'>
        <h1 className='all_mini_bag'>My BaG, 3 ITEMS</h1>
        {this.props.cart.map((e) => (
          <MiniCart key={e.id} {...e} />
        ))}
        <p className='all_mini_total'>TOTAL $300</p>
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
