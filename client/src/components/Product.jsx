import React, { Component } from "react";

class Product extends Component {
  render() {
    const { id, name, gallery, prices, inStock } = this.props;

    return (
      <>
        <div className='product' style={{ opacity: !inStock ? 0.4 : 1 }}>
          <img src={gallery[0]} alt={id} className='product_img ' />

          <h2 className='product_name'>{name}</h2>
          <p className='product_price'>${Math.round(prices[0].amount)}</p>
          {!inStock && <p className='product_stock'>OUT OF STOCK</p>}
        </div>
      </>
    );
  }
}

export default Product;
