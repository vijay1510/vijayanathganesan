import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./icons/Cart";

const mapStateToProps = (state) => {
  return {
    symbol: state.symbol,
  };
};

class Product extends Component {
  render() {
    const { id, name, gallery, prices, inStock } = this.props;

    const price = prices.filter((e) => e.currency.symbol === this.props.symbol);

    return (
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none" }}
        className='product'>
        <div style={{ opacity: !inStock ? 0.4 : 1 }}>
          <div className='product_cart' onClick={() => alert("hello")}>
            <p className='product_icon'>
              <Cart />
            </p>
          </div>
          <img src={gallery[0]} alt={id} className='product_img ' />

          <h2 className='product_name'>{name}</h2>
          <p className='product_price'>
            <span style={{ marginRight: 2 }}>{price[0].currency.symbol}</span>
            {Math.round(price[0].amount).toFixed(2)}
          </p>
          {!inStock && <p className='product_stock'>OUT OF STOCK</p>}
        </div>
      </Link>
    );
  }
}

export default connect(mapStateToProps, null)(Product);
