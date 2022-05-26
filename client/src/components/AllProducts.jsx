import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    first: state.first,
    filtered: state.filtered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};

class AllProducts extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <>
        <h1>CATEGORY NAME</h1>
        {this.props.filtered && (
          <div className='allproducts'>
            {this.props.filtered[0].products.map((all) => (
              <Product key={all.id} {...all} />
            ))}
          </div>
        )}
        <div className='allproducts'>
          {this.props.first &&
            this.props.filtered === null &&
            this.props.first[0].products.map((all) => (
              <Product key={all.id} {...all} />
            ))}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
