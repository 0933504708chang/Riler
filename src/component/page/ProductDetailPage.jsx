import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProductDetail from '../product/ProductDetail'
import { useParams } from 'react-router-dom'
 const ProductDetailPage =()=> {
const {id} =useParams();
console.log(useParams.id)
console.log(id)
    return (
      <div>
        <Header />
        <ProductDetail id = {id}/>

        <Footer />
      </div>
    )
  
}
export default ProductDetailPage
