import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductByBrand from '../product/ProductByBrand'
import CategoryMenu from '../product/CategoryMenu'
import BrandMenu from '../product/BrandMenu'
import Advertising from '../product/Advertising'
export default class ProductByBrandPage extends Component {
  render() {
    return (
      <>
        <Header />

        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <CategoryMenu />

              <BrandMenu />
              <Advertising />
            </div>
          </div>
          <ProductByBrand />
        </div>
        <Footer />
      </>
    )
  }
}
