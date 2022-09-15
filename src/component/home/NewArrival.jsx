import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NewArrival extends Component {
  render() {
    return (
      <div>
        <div className="features_items">
          <h2 className="title text-center">New Items</h2>
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                    alt="" />
                  <h2>65000ss</h2>
                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                  <Link to='/productDetail'>
                    <div className='"btn btn-default add-to-cart"'>
                      <i className="fa fa-shopping-cart">
                      </i>Add to
                      cart</div>
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to='/productDetail'>
                      <a >
                        <img
                          src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                          alt="" />
                        <h2>65000</h2>
                        <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                    alt="" />
                  <h2>65000</h2>
                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                  <Link to='/productDetail'>
                    <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to
                      cart</a>
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to='/productDetail'>
                      <a>
                        <img
                          src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                          alt="" />
                        <h2>65000</h2>
                        <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                    alt="" />
                  <h2>65000</h2>
                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                  <Link to='/productDetail'>
                    <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to
                      cart</a>
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to='/productDetail'>
                      <a>
                        <img
                          src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                          alt="" />
                        <h2>65000</h2>
                        <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                    alt="" />
                  <h2>65000</h2>
                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                  <Link to='/productDetail'>
                    <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to
                      cart</a>
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to='/productDetail'>
                      <a >
                        <img
                          src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp"
                          alt="" />
                        <h2>65000</h2>
                        <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default NewArrival