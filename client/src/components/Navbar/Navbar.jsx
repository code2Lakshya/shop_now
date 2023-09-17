import React, { useContext, useEffect, useState } from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css';
import { AppContext } from '../../utils/AppContext';
import Search from './SearchBar/Search';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [nav, setNav] = useState(false);
  const { setCart, cartList } = useContext(AppContext);
  const navigate=useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll > 200)
        setNav(true);
      else
        setNav(false);
    });
  }, [])
  function clickHandler() {
    setCart(true);
  }
  return (<nav className={nav ? 'sticky' : ''}>
    <div className='navbar'>
      <ul className='left'>
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
      </ul>
      <h1 className='center' onClick={()=>navigate('/')}>Music Now<FaHeadphonesAlt /></h1>
      <ul className='right'>
        <li onClick={() => setSearchBar(true)}><FiSearch /></li>
        <li><AiOutlineHeart /></li>
        <li onClick={clickHandler}>
         { cartList.length > 0 ?<span>{cartList.reduce((acc, element) => acc + element?.count ?? 1, 0)}</span>:''}
          <AiOutlineShoppingCart />
        </li>
      </ul>
    </div>
    {searchBar && <Search setSearchBar={setSearchBar} searchBar={searchBar} />}
  </nav>
  )
}

export default Navbar