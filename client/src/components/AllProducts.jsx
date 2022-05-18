import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
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
      <div className='allproducts'>
        {this.props.allProducts === null && <h1>loading........</h1>}
        {this.props.allProducts &&
          this.props.allProducts.map((all) => (
            <Product key={all.id} {...all} />
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
