import React, { Component } from "react";
import Attributes from "./Attributes";

export default class Cart extends Component {
  render() {
    const { id, name, gallery, prices, inStock, brand, attributes } =
      this.props;
    return (
      <>
        <hr />
        <div className='cart'>
          <div>
            <h1>{brand}</h1>
            <h3>{name}</h3>

            <p>PRICE:</p>
            <p>
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
            <button>-</button>
            <img
              src={gallery[0]}
              alt={id}
              style={{ height: 200, width: 200 }}
            />
          </div>
        </div>
      </>
    );
  }
}
