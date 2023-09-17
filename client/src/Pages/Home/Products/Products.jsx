import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = ({ category, products }) => {
  return (<div>
    <div className='products-container'>
      {category ? <h1 className='section-heading'>Top Products</h1> : ''}
      <div className='products'>
        {products.map((product, index) => <Product product={product} key={index}></Product>)}
      </div>
    </div>
  </div >
  )
}

export default Products