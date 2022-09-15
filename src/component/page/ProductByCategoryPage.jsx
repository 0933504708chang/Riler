import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductByCategory from '../product/ProductByCategory'
import CategoryMenu from '../product/CategoryMenu'
import BrandMenu from '../product/BrandMenu'
import Advertising from '../product/Advertising'
class ProductByCategoryPage extends Component {
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
          <ProductByCategory />
        </div>
        <Footer />
      </>
    )
  }
}

export default ProductByCategoryPage