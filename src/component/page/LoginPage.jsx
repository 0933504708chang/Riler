import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Login from '../others/Login';
export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }
}
