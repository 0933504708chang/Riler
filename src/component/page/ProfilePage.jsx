import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Profile from '../others/Profile'
export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Footer />
      </div>
    )
  }
}
