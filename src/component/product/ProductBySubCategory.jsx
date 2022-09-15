import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import ProductService from '../../services/productService'
import { Link } from 'react-router-dom'
export default class ProductBySubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: props.subCategory,
      products: []
    }
    this.productService = new ProductService()
  }
  componentDidMount() {
    this.productService.productBySubCategory(this.state.subCategory).then((response) => {
      this.setState({
        products: response
      })
    })
  }
  render() {
    var myview = this.state.products.map((product, index) => {
      return (
        <div className="col-sm-3">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img
                  src={product.image}
                  alt="" />
                <h2>{product.price}</h2>
                <p>{product.name}</p>
                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to
                  cart</a>
              </div>
              <div className="product-overlay">
                <div className="overlay-content">
                  <a href="#st">
                    <img
                      src={product.image}
                      alt="" />
                    <h2>{product.price}</h2>
                    <p>{product.name}</p>
                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to
                      cart</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (

      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="title text-center">Thời trang nữ -Áo nữ</h2>
          {myview}
        </div>
      </div>
    )
  }
}
