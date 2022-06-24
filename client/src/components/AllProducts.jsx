import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Product from "./Product";
import { getName } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    first: state.first,
    filtered: state.filtered,
    single: state.single,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getName }, dispatch);
};

class AllProducts extends Component {
  render() {
    return (
      <>
        <h1 className='allproducts_name'>{this.props.single?.category.name}</h1>

        {this.props.single && (
          <div className='allproducts'>
            {this.props.single.category.products.map((all) => (
              <Product key={all.id} {...all} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
