import React, { Component } from "react";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Category name</h1>
        <AllProducts />
      </>
    );
  }
}
