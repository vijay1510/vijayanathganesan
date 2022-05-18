import React, { Component } from "react";

class Product extends Component {
  render() {
    const { id, name, gallery, prices } = this.props;

    return (
      <>
        <div style={{ marginRight: 50 }}>
          {" "}
          <img src={gallery[0]} alt={id} style={{ width: 250 }} />
          <h2>{name}</h2>
          <p>{Math.round(prices[0].amount)}</p>
        </div>
      </>
    );
  }
}

export default Product;
