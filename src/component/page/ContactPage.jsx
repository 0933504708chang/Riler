import React, { Component } from 'react'
import Contact from '../others/Contact';
import Header from '../common/Header';
import Footer from '../common/Footer';
export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    )
  }
}
