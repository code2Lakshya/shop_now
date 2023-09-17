import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import './CartItem.css'
import { AppContext } from '../../../utils/AppContext'
import useCounter from '../../../Hooks/useCounter'
import { toast } from 'react-hot-toast'

const CartItem = ({ product }) => {
  const { cartList, setCartList } = useContext(AppContext);
  const { countHandler } = useCounter(product);
  const deleteHandler = () => {
    setCartList(prev => ([...(prev.filter(elem => elem.id !== product.id))]));
    toast.success('Removed Item');
  }
  return (
    <div className='cart-item'>
      <div className='cart-item-image'><img src={process.env.REACT_APP_BASE_URL + product?.attributes?.img.data[0].attributes.url} alt='item' /></div>
      <div className='cart-item-details'>
        <div>
          <span>{product?.attributes?.title}</span>
          <span className='close-button' onClick={deleteHandler}><AiOutlineDelete /></span>
        </div>
        <div className='cart-counter'>
          <span onClick={() => countHandler(true)}>+</span>
          <span>{cartList[cartList.findIndex(elem => elem.id === product.id)].count}</span>
          <span onClick={() => countHandler(false)}>-</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem