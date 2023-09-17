import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const imgSrc = process.env.REACT_APP_BASE_URL + product.attributes.img.data[0].attributes.url;
  const heading = product.attributes.title;
  const price = product.attributes.price;
  return (
    <div className='product-card'>
            <Link to={`/product/${product.id}`}>
        <div className='product-img'>
          <img src={imgSrc} alt='product' />
        </div>
        </Link>
      <p>{heading}</p>
      <p>&#8377;{price}</p>
    </div>
  )
}

export default Product