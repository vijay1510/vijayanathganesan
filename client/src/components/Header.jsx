import React, { Component } from "react";
import Logo from "./icons/Logo";
import Arrow from "./icons/Arrow";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <nav className='header_category'>
            <li>ALL</li>
            <li>CLOTHES</li>
            <li>TECH</li>
          </nav>
          <nav className='header_logo'>
            <li>
              <Logo />
            </li>
          </nav>
          <nav className='header_cart'>
            <li>$</li>
            <li>
              <Arrow />
            </li>
            <li>cart</li>
          </nav>
        </header>
      </>
    );
  }
}
