import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Link } from "react-router-dom";
import Cart from "./icons/Cart";
import { addToCart } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    symbol: state.symbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addToCart }, dispatch);
};
class Product extends Component {
  render() {
    const { id, name, gallery, prices, inStock, addToCart, attributes, brand } =
      this.props;

    const price = prices.filter((e) => e.currency.symbol === this.props.symbol);
    const selectedAttribute = attributes.map((e) => {
      let id = e.id;
      let item = e.items[0];
      return { id, item };
    });
    const newId = selectedAttribute.map((e) => e.item.displayValue);
    const altId = id + newId.join("");

    const handleClick = (event) => {
      event.stopPropagation();
      !inStock
        ? alert("Sorry, This Is Product Is Out Of Stock")
        : addToCart({
            ...this.props,
            amount: 1,
            selectedAttributes: selectedAttribute,
            altId: altId,
          });
    };

    return (
      <div className={`product ${!inStock ? "product_blur" : ""}`}>
        <div className='product_cart'>
          <p className='product_icon' onClick={(e) => handleClick(e)}>
            <Cart color='white' />
          </p>
        </div>
        <Link to={`/product/${id}`} className='link'>
          <img src={gallery[0]} alt={id} className='product_img ' />
        </Link>

        <h2 className='product_name'>{`${brand} ${name}`}</h2>
        <p className='product_price'>
          <span>{price[0].currency.symbol}</span>
          {Math.round(price[0].amount).toFixed(2)}
        </p>
        {!inStock && <p className='product_stock'>OUT OF STOCK</p>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
