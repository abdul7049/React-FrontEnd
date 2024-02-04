import React from 'react'
import './Products.css'

import ProductsCart from '../ProductsCart/ProductsCart'
const Products = () => {
  return (
    <>
      <div className='cart_icon'>
        <input type='text' placeholder='Search'/>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div className='products_main_cart '>
<h1>Products Shop</h1>

        <div className='product__card pool_card'>
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        <ProductsCart />
        </div>


      </div>
    </>
  )
}

export default Products
