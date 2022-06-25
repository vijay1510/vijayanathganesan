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
import { NavLink } from "react-router-dom";
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
    {
      getCurrency,
      symbolChange,
      getCategory,
      getSingleCategory,
      getName,
    },
    dispatch
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      clicked: true,
      cartClicked: true,
    };
  }

  componentDidMount() {
    this.props.getCurrency();
    this.props.getCategory();
    this.props.getSingleCategory("all");

    document.addEventListener("mousedown", (event) => {
      if (!this.myRef.current?.contains(event.target)) {
        this.setState({ clicked: true });
      }
    });
  }

  render() {
    const handleClick = (e) => {
      this.props.getSingleCategory(e);
      this.props.getName(e);
    };

    return (
      <>
        <header className='header'>
          <nav className='header_category '>
            {this.props.category &&
              this.props.category.map((e) => (
                <NavLink
                  className='header_name'
                  activeClassName='active'
                  to={`/${e.name}`}
                  onClick={() => handleClick(e.name)}
                  key={e.name}>
                  {e.name}
                </NavLink>
              ))}
          </nav>
          <nav className='header_logo'>
            <li>
              <Logo />
            </li>
          </nav>
          <nav className='header_cart' ref={this.myRef}>
            <li
              onClick={() =>
                this.setState({
                  clicked: !this.state.clicked,
                })
              }>
              {this.props.symbol}
              <span
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
        {!this.state.cartClicked && (
          <div
            onClick={() =>
              this.setState({ cartClicked: !this.state.cartClicked })
            }
            className='header_blur'></div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
