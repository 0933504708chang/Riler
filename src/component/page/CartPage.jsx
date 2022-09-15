import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Cart from '../cart/Cart';
export default class CartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    )
  }
}
