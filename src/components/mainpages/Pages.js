import React from 'react'
import Product from './products/Product'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import DetailProducts from '../mainpages/utils/DetailProduct/DetailProducts'
import {Routes,Route} from "react-router-dom"
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/detail/:id' element={<DetailProducts/>}/> 
      </Routes>
    </div>
  )
}

export default Pages
