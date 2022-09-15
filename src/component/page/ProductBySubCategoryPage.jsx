import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductBySubCategory from '../product/ProductBySubCategory'
import CategoryMenu from '../product/CategoryMenu'
import BrandMenu from '../product/BrandMenu'
import Advertising from '../product/Advertising'
import { useParams } from 'react-router-dom'
const ProductBySubCategoryPage = () => {
  const { subCategory } = useParams()
  
  console.log(subCategory)
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
        <ProductBySubCategory subCategory= {subCategory}/>
      </div>
      <Footer />
    </>
  )
}


export default ProductBySubCategoryPage