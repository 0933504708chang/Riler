import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Register from '../others/Register'
export default class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    )
  }
}
