import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Info from '../common/Info';
export default class InfoPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info slug = {this.props.slug} title = {this.props.title}/>
        <Footer />
      </div>
    )
  }
}
