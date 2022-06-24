import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Logo from "./icons/Logo";
import Arrow from "./icons/Arrow";
import Uparrow from "./icons/Uparrow";
import Cart from "./icons/Cart";
import {
  getCurrency,
  symbolChange,
  getCategory,
  getSingleCategory,
  getName,
} from "../redux/Action";
import { Link } from "react-router-dom";
import AllMiniCart from "./AllMiniCart";

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    symbol: state.symbol,
    category: state.category,
    cart: state.cart,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getCurrency, symbolChange, getCategory, getSingleCategory, getName },
    dispatch
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      cartClicked: true,
    };
  }

  componentDidMount() {
    this.props.getCurrency();
    this.props.getCategory();
  }

  render() {
    const handleClick = (e) => {
      this.props.getSingleCategory(e);
      this.props.getName(e);
      console.log(window.location.href);
    };
    return (
      <>
        <header className='header'>
          <nav className='header_category '>
            {this.props.category &&
              this.props.category.map((e) => (
                <Link
                  to={`/${e.name}`}
                  style={{ textDecoration: "none" }}
                  key={e.name}>
                  <li
                    href='/#'
                    className={e.name === this.props.name ? "header_name" : ""}
                    onClick={() => handleClick(e.name)}
                    key={e.name}>
                    {e.name}
                  </li>
                </Link>
              ))}
          </nav>
          <nav className='header_logo'>
            <li>
              <Logo />
            </li>
          </nav>
          <nav className='header_cart'>
            <li
              onClick={() =>
                this.setState({
                  clicked: !this.state.clicked,
                })
              }>
              {this.props.symbol}
              <span
                style={{ marginLeft: 10 }}
                onClick={() =>
                  this.setState({
                    clicked: !this.state.clicked,
                  })
                }>
                {this.state.clicked ? <Arrow /> : <Uparrow />}
                {!this.state.clicked && (
                  <div className='header_dialog'>
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
                )}
              </span>
            </li>

            <li
              onClick={(e) =>
                this.setState({
                  cartClicked: this.state.cartClicked ? false : true,
                })
              }>
              <Cart color='black' />
              {this.props.cart.length !== 0 && (
                <div className='header_badge'>
                  {this.props.cart.reduce((e, a) => e + a.amount, 0)}
                </div>
              )}
              {!this.state.cartClicked && <AllMiniCart />}
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
