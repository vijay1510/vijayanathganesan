import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Logo from "./icons/Logo";
import Arrow from "./icons/Arrow";
import Cart from "./icons/Cart";
import {
  filterProducts,
  getCurrency,
  symbolChange,
  getCategory,
} from "../redux/Action";
import { Link } from "react-router-dom";
import AllMiniCart from "./AllMiniCart";

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    symbol: state.symbol,
    category: state.category,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { filterProducts, getCurrency, symbolChange, getCategory },
    dispatch
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      cartClicked: true,
      categoryName: "tech",
    };
  }
  componentDidMount() {
    this.props.getCurrency();
    this.props.getCategory();
  }

  render() {
    return (
      <>
        <header className='header'>
          <nav className='header_category '>
            {this.props.category &&
              this.props.category.map((e) => (
                <Link to='/' style={{ textDecoration: "none" }}>
                  <li
                    onClick={() => this.props.filterProducts(e.name)}
                    key={e.name}>
                    {e.name}
                  </li>
                </Link>
              ))}
          </nav>
          <nav className='header_logo'>
            <li>
              <Link to='/'>
                <Logo />
              </Link>
            </li>
          </nav>
          <nav className='header_cart'>
            <li>
              {this.props.symbol}
              <span
                style={{ marginLeft: 10 }}
                onClick={() =>
                  this.setState({
                    clicked: this.state.clicked ? false : true,
                    winHeight: window.screen.availHeight,
                  })
                }>
                <Arrow />
                <div
                  style={{ display: !this.state.clicked ? "block" : "none" }}
                  className='header_dialog'>
                  {this.props.currency &&
                    this.props.currency.map((e) => (
                      <p
                        key={e.label}
                        className='header_currency'
                        onClick={() => this.props.symbolChange(e.symbol)}>
                        {e.symbol} {e.label}
                      </p>
                    ))}
                </div>
              </span>
            </li>

            <li
              onClick={(e) =>
                this.setState({
                  cartClicked: this.state.cartClicked ? false : true,
                  winHeight: window.screen.availHeight,
                })
              }>
              <Cart />
              {this.props.cart.length !== 0 && (
                <div className='header_badge'>{this.props.cart.length}</div>
              )}

              <div
                style={{ display: !this.state.cartClicked ? "block" : "none" }}>
                <AllMiniCart />
              </div>
            </li>
          </nav>
        </header>
        <div
          onClick={() =>
            this.setState({ cartClicked: !this.state.cartClicked })
          }
          className='header_blur'
          style={{ display: !this.state.cartClicked ? "block" : "none" }}></div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
