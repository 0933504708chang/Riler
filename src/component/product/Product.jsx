import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
//http://ecomlaravel.test/api/productsByCategory/Thời trang nữ
export default class Product extends Component{
   constructor() {
      super()
      this.state = {
        product: []
      }
    }
    getData() {
      axios.get(`http://ecomlaravel.test/api/productsByCategory/Thời trang nữ`).then((response) => {
        var data = response.data;
        this.setState({
         product: data
        })
      }).catch((error) => {
  
      })
   }
   componentDidMount() {
      this.getData();
    }
   render(){
      var productArray = this.state.product;
    var myview = productArray.map((product, i) => {
      return (
                  <div className="col-sm-3" key={i}>
                     <div className="product-image-wrapper">
                        <div className="single-products">
                           <div className="productinfo text-center">
                              <img src={product.image} alt="" />
                              <h2>{product.price}</h2>
                              <p>{product.name}</p>
                              <Link to={`/productDetail/${product.id}`} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                           </div>
                           <div className="product-overlay">
                              <div className="overlay-content">
                                 <Link to={`/productDetail/${product.id}`}>
                                    <img src={product.image} alt="" />
                                    <h2>{product.price}</h2>
                                    <p>{product.name}</p>
                                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
      )
    })
      return (
         <div>
            <div className="col-sm-9 padding-right">
               <div className="features_items">
                  <h2 className="title text-center">New Items</h2>
                  
                  {myview}
   
               </div>
               <div className="features_items">
                  <h2 className="title text-center">Features Items</h2>
                  <div className="col-sm-3">
                     <div className="product-image-wrapper">
                        <div className="single-products">
                           <div className="productinfo text-center">
                              <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                              <h2>65000</h2>
                              <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                           </div>
                           <div className="product-overlay">
                              <div className="overlay-content">
                                 <a href="#st">
                                    <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                                    <h2>65000</h2>
                                    <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="product-image-wrapper">
                        <div className="single-products">
                           <div className="productinfo text-center">
                              <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                              <h2>65000</h2>
                              <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                           </div>
                           <div className="product-overlay">
                              <div className="overlay-content">
                                 <a href="#st">
                                    <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                                    <h2>65000</h2>
                                    <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="product-image-wrapper">
                        <div className="single-products">
                           <div className="productinfo text-center">
                              <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                              <h2>65000</h2>
                              <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                           </div>
                           <div className="product-overlay">
                              <div className="overlay-content">
                                 <a href="#st">
                                    <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                                    <h2>65000</h2>
                                    <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="product-image-wrapper">
                        <div className="single-products">
                           <div className="productinfo text-center">
                              <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                              <h2>65000</h2>
                              <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                           </div>
                           <div className="product-overlay">
                              <div className="overlay-content">
                                 <a href="#st">
                                    <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
                                    <h2>65000</h2>
                                    <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                                 </a>
                              </div>
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
