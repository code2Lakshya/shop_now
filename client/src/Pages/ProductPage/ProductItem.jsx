import React, { useContext } from 'react'
import {
  FaCartPlus,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest
} from 'react-icons/fa'
import './ProductItem.css'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { AppContext } from '../../utils/AppContext'
import Loader from '../../components/Loader/Loader'
import toast from 'react-hot-toast'
import useCounter from '../../Hooks/useCounter'

const ProductItem = () => {
  const { product, loader, cartList, setCartList } = useContext(AppContext);
  const { countHandler, checkItem } = useCounter(product);
  function addToCartHandler() {
    if (checkItem(product) !== -1) {
      setCartList(cartList.filter(elem => elem.id !== product.id));
      toast.success('Removed Item');
    }
    else {
      setCartList(prev => ([...prev, { ...product, count: 1 }]));
      toast.success('Added Item');
    }
  }
  return (<div className='single-product-main-content'>
    {loader ?
      (<Loader />) :
      (product ?
        (<div className='layout'>
          <div className='single-product-page'>
            <div className='left-product'>
              <img src={process.env.REACT_APP_BASE_URL + product?.attributes.img.data[0].attributes.url} alt='product' />
            </div>
            <div className='right-product'>
              <span className='name'>{product?.attributes.title}</span>
              <span className='price'>&#8377;{product?.attributes.price}</span>
              <span className='description'>{product?.attributes.desc}</span>
              <div className='cart-buttons'>
                <div className='quantity-buttons'>
                  <p onClick={() => countHandler(true)}><span>+</span></p>
                  <p> <span>{cartList.findIndex(elem => elem.id === product.id) === -1 ? '0' :
                    (cartList[cartList.findIndex((elem => elem.id === product.id))].count)}</span></p>
                  <p onClick={() => countHandler(false)}><span>-</span></p>
                </div>
                <button onClick={addToCartHandler}><span><FaCartPlus /></span>
                  {cartList.findIndex(elem => elem.id === product.id) !== -1 ? 'Remove from Cart' : 'Add to Cart'}</button>
              </div>
              <span className='divider' />
              <div className='info-item'>
                <span className='text-bold'>
                  Category:
                  <span>{product?.attributes.categories.data[0].attributes.title}</span>
                </span>
                <span className='text-bold'>
                  Share:
                  <span className='social-icons'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaPinterest />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <RelatedProducts productId={product?.id} categoryId={product?.attributes.categories.data[0].id} />
        </div>
        ) :
        (
          <p>No Data Found...</p>
        ))}
  </div>
  )
}

export default ProductItem