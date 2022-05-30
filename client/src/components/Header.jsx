import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Logo from "./icons/Logo";
import Arrow from "./icons/Arrow";
import Cart from "./icons/Cart";
import { filterProducts, getCurrency, symbolChange } from "../redux/Action";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    symbol: state.symbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { filterProducts, getCurrency, symbolChange },
    dispatch
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
    };
  }
  componentDidMount() {
    this.props.getCurrency();
  }

  render() {
    return (
      <>
        <header className='header'>
          <nav className='header_category'>
            <li onClick={() => this.props.filterProducts("all")}>ALL</li>
            <li onClick={() => this.props.filterProducts("clothes")}>
              CLOTHES
            </li>
            <li onClick={() => this.props.filterProducts("tech")}>TECH</li>
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
                  this.setState({ clicked: this.state.clicked ? false : true })
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

            <li>
              <Link to='/cart'>
                <Cart />
              </Link>
            </li>
          </nav>
        </header>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
