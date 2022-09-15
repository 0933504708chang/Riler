import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import OrderList from '../cart/OrderList'
export default class OrderListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <OrderList />
          <Footer />
        </div>
      </div>
    )
  }
}
