import React from 'react'
import HomePage from '../page/HomePage';
import ContactPage from '../page/ContactPage';
import ProductDetailPage from '../page/ProductDetailPage';
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';
import InfoPage from '../page/InfoPage';
import ProductByCategoryPage from '../page/ProductByCategoryPage';
import ProductPage from '../page/ProductPage'
import ProductByBrandPage from '../page/ProductByBrandPage'
import ProfilePage from '../page/ProfilePage'
import ForgetPasswordPage from '../page/ForgetPasswordPage'
import CartPage from '../page/CartPage'
import OrderListPage from '../page/OrderListPage'
import ProductBySubCategoryPage from '../page/ProductBySubCategoryPage'
const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/productBySubCategory/:subCategory" element={<ProductBySubCategoryPage />} />
                <Route path="/productDetail/:id" element={<ProductDetailPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path='/productbycategory' element={<ProductByCategoryPage />} />
                <Route path='/product' element={<ProductPage />} ></Route>
                <Route path='/productbybrand' element={<ProductByBrandPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/forgetpassword' element={<ForgetPasswordPage />} />
                <Route path='/about' element={<InfoPage slug="about" title="Về chúng tôi" />} />
                <Route path='/policy' element={<InfoPage slug="policy" title="Chính sách bán hàng" />} />
                <Route path='/warranty' element={<InfoPage slug="warranty" title="Chính sách bảo hành" />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/orderlist' element={<OrderListPage />} />

            </Routes>
        </div>
    )
}

export default AppRoute