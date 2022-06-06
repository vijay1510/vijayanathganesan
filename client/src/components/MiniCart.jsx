import React, { Component } from "react";
import Attributes from "./Attributes";

class MiniCart extends Component {
  render() {
    const { id, name, gallery, prices, inStock, brand, attributes } =
      this.props;
    return (
      <>
        <div className='mini_cart'>
          <div>
            <h1 className='mini_name'>
              {brand} {name}
            </h1>

            <p className='mini_price'>
              <span style={{ marginRight: 2 }}>
                {prices[0].currency.symbol}
              </span>
              {Math.round(prices[0].amount).toFixed(2)}
            </p>
            {attributes &&
              attributes.map((e) => <Attributes key={e.id} {...e} />)}
          </div>
          <div>
            <button>+</button>
            <p>1</p>
            <img className='mini_img' src={gallery[0]} alt={id} />
            <button>-</button>
          </div>
        </div>
      </>
    );
  }
}

export default MiniCart;
