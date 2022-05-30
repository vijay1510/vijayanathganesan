import React, { Component } from "react";
import Attributes from "./Attributes";
import { getDetails } from "../redux/Action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router";

//const { id } = this.props.params;
//const id = this.props.match.params;

const mapStateToProps = (state) => {
  return {
    details: state.details,
    symbol: state.symbol,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDetails: getDetails }, dispatch);
};

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }
  componentDidMount() {
    const { details } = this.props.match.params;

    this.props.getDetails(details);
  }
  render() {
    if (this.props.details === null) return <h1>loading.......</h1>;
    const { id, name, description, gallery, attributes, brand, prices } =
      this.props.details;
    const price = prices.filter((e) => e.currency.symbol === this.props.symbol);

    return (
      <>
        <div className='details'>
          <div className='details_gallery'>
            {gallery.map((e) => (
              <img
                src={e}
                alt={id}
                className='details_gallery_items'
                onClick={() => this.setState({ image: e })}
              />
            ))}
          </div>
          <div className='details_big_img'>
            <img
              src={this.state.image === null ? gallery[0] : this.state.image}
              alt={id}
            />
          </div>
          <div className='details_content'>
            <h1 className='details_brand'>{brand}</h1>
            <h2 className='details_name'>{name}</h2>
            {attributes &&
              attributes.map((e) => <Attributes key={e.id} {...e} />)}
            <p className='details_price'>PRICE:</p>
            <p className='details_price_value'>
              <span style={{ marginRight: 2 }}>{price[0].currency.symbol}</span>
              {Math.round(price[0].amount).toFixed(2)}
            </p>
            <button
              className='details_btn'
              onClick={() => console.log(this.props.details)}>
              ADD TO CART
            </button>
            <div
              className='details_description'
              dangerouslySetInnerHTML={{
                __html: description,
              }}></div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
