import React, { useContext } from 'react'
import './Cart.css'
import { AppContext } from '../../utils/AppContext'
import { GrClose } from 'react-icons/gr'
import { BsCartX } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    const { cart, setCart, cartList } = useContext(AppContext);
    const navigate = useNavigate();
    function clickHandler() {
        setCart(false);
    }
    function navigateHandler() {
        setCart(false);
        navigate('/');
    }
    function closeCartHandler() {
        setCart(false);
    }
    return (
        <div className={`cart-panel ${cart ? 'active' : ''}`}>
            <div className='opacity-layer' onClick={closeCartHandler}></div>
            <div className='card-content'>
                <div className='cart-header'>
                    <span>Shopping Cart</span>
                    <span className='close-btn' onClick={clickHandler}>
                        <span className='close-text'>Close</span>
                        <span><GrClose /></span>
                    </span>
                </div>
                {cartList.length === 0 ?
                    (
                        <div className='empty-cart'>
                            <span><BsCartX /></span>
                            <p>No products in the cart</p>
                            <button className='return-btn' onClick={navigateHandler}>Return to Shop</button>
                        </div>
                    ) :
                    (
                        <div className='cart-filled'>
                            <div className='cart-items'>
                                {
                                    cartList.map((product, index) => <CartItem product={product} key={index} />)
                                }
                            </div>
                            <div className='cart-footer'>
                                <div className='cart-footer-heading'>
                                    <span>Sub Total:</span>
                                    <span className='amount'>
                                        &#8377;{cartList.reduce((a, e) => a + (e.attributes.price * e.count), 0)}
                                    </span>
                                </div>
                                <div>
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Cart