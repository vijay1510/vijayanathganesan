import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "./icons/Logo";
import Arrow from "./icons/Arrow";
import Cart from "./icons/Cart";
import { filterProducts } from "../redux/Action";

const mapDispatchToProps = (dispatch) => {
  return {
    clothes: () => dispatch(filterProducts("clothes")),
    tech: () => dispatch(filterProducts("tech")),
    all: () => dispatch(filterProducts("all")),
  };
};

class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <nav className='header_category'>
            <li onClick={this.props.all}>ALL</li>
            <li onClick={this.props.clothes}>CLOTHES</li>
            <li onClick={this.props.tech}>TECH</li>
          </nav>
          <nav className='header_logo'>
            <li>
              <Logo />
            </li>
          </nav>
          <nav className='header_cart'>
            <li>
              $
              <span style={{ marginLeft: 10 }} onClick={() => alert("heloo")}>
                <Arrow />
              </span>
            </li>

            <li>
              <Cart />
            </li>
          </nav>
        </header>
      </>
    );
  }
}

export default connect(mapDispatchToProps)(Header);
