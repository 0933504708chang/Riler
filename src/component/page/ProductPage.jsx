import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BrandMenu from '../product/BrandMenu'
import CategoryMenu from '../product/CategoryMenu'
import Product from '../product/Product'
import Advertising from '../product/Advertising'
export default class ProductPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <CategoryMenu />

              <BrandMenu />
              <Advertising />
            </div>
          </div>
          <Product />
        </div>
        <Footer />
      </div>
    )
  }
}
