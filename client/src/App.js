import React, { Component } from "react";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <AllProducts />
          </Route>
          <Route exact path='/product/:details'>
            <ProductDetails />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </>
    );
  }
}
