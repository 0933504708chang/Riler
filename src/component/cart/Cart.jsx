import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cart extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ display: "block" }}>
          <div className="section-title text-center mt-55 mb-55">
            <h2>Product Cart List</h2>
          </div>
          <div className="row">
            <div className="p-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6"><img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" style={{ width: "120px", height: "120px", margin: "5px" }} alt="" /></div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                      <h5 className="product-name">Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</h5>
                      <p>Size: XS | Color: blue</p>
                      <h6> Quantity = 6</h6>
                      <h6>65000 x 6 = 390000$</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6"><input placeholder="6" className="form-control text-center" type="number" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6"><button type="button" className="btn site-btn"><i className="fa fa-plus"></i> </button><button type="button" className="btn site-btn"><i className="fa fa-minus"></i> </button><button type="button" className="btn site-btn"><i className="fa fa-trash"></i> Remove </button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6"><img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" style={{ width: "120px", height: "120px", margin: "5px" }} alt="" /></div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                      <h5 className="product-name">Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</h5>
                      <p>Size: XS | Color: red</p>
                      <h6> Quantity = 1</h6>
                      <h6>65000 x 1 = 65000$</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6"><input placeholder="1" className="form-control text-center" type="number" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6"><button type="button" className="btn site-btn"><i className="fa fa-plus"></i> </button><button type="button" className="btn site-btn"><i className="fa fa-minus"></i> </button><button type="button" className="btn site-btn"><i className="fa fa-trash"></i> Remove </button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-6 "></div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 ">
              <h5> Total Item = 7 </h5>
              <h5>Total Price = 455000$</h5>
            </div>
          </div>
        </div>
        <div className="row mt-3 " >
          <h2 className="mt-3"> ORDER INFORMATION</h2>
          <div className="col-lg-8 col-md-8 col-sm-6 col-6">
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Your Name</label><input className="form-control" type="text" placeholder="" /></div>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Phone Number</label><input className="form-control" type="text" placeholder="" /></div>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Delivery Address</label><textarea rows="2" className="form-control" type="text" placeholder=""></textarea></div>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><button type="button" className="btn btn-block w-100 mt-3  site-btn btn btn-primary">Confirm Order </button></div>
          </div>
        </div>
        <div >
          <h2> Thank you for your Ordermation.</h2>
          <Link to="/orderlist"><button className="btn btn-primary"> See All Your Orders</button></Link>
        </div>

      </div>
    )
  }
}
