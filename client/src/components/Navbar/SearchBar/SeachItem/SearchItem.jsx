import React from 'react'
import './SearchItem.css'
import { useNavigate } from 'react-router-dom'

const SearchItem = ({ item ,search }) => {
    const navigate=useNavigate();

    function clickHandler(){
        search(false);
        navigate(`/product/${item.id}`);
    }
    return (
        <div className='search-result-item' onClick={clickHandler}>
            <div className='search-item-image'>
                <img src={process.env.REACT_APP_BASE_URL + item.attributes.img.data[0].attributes.url} alt='item' />
            </div>
            <div className='search-item-details'>
                <p>{item.attributes.title}</p>
                <p>{item.attributes.desc}</p>
            </div>
        </div>
    )
}

export default SearchItem