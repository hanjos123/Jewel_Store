import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Blog from '../pages/Blog.jsx'
import Collection from '../pages/Collection.jsx'
import Shoppoint from '../pages/Shop-point.jsx'
import Shop from '../pages/Shop.jsx'
import Contact from '../pages/Contact.jsx'
import ProductCategory from '../pages/ProductCategory.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
import PaymentLayout from '../pages/Payment.jsx'

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop-point' element={<Shoppoint />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/category/:id' element={<ProductCategory />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/payment' element={<PaymentLayout />} />
        <Route path='/blog/all' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
}

export default Routers