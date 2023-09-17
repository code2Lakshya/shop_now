import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import { FaLocationArrow } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import './Footer.css'
import footerImg from '../../assets/payments.png'

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className='contact-section'>
        <div className='about'>
          <h2>About</h2>
          <p>Welcome to our world of sound perfection! At Music Now, we're passionate about delivering an unparalleled audio experience. Explore our curated selection of top-notch headphones, designed to immerse you in music like never before. Whether you're an audiophile or just seeking premium quality, you'll find your perfect pair here.</p>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <div >
            <div><FaLocationArrow /> <span>Gorakhpur , Uttar Pradesh , 273001</span></div>
            <div><FiSmartphone /><span>Phone: 0471 272 0261</span></div>
            <div><AiOutlineMail /><span>Email: store@gmail.com</span></div>
          </div>
        </div>
        <div className='footer-categories'>
          <h2>Categories</h2>
          <ul>
            <li>Headphones</li>
            <li>Smart Watches</li>
            <li>Bluetooth Speakers</li>
            <li>Wireless Earbuds</li>
            <li>Home Theatre</li>
            <li>Projectors</li>
          </ul>
        </div>
        <div className='pages'>
          <h2>Pages</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Returns</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='bottom-wrapper'>
        <div className='bottom-section'>
          <p>MusicStore 2023 Created By Lakshya premium e commerce websites</p>
          <img src={footerImg} height='18' alt='payements' />
        </div>
      </div>
    </div>
  )
}

export default Footer