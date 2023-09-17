import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = ({ categories }) => {
    return (
        <div className='shop-by-category'>
            <div className='categories'>
                {categories.map((category, index) => {
                    return (<div className='category' key={index} >
                        <Link to={`category/${category.id}`}>
                            <img
                                src={process.env.REACT_APP_BASE_URL + category.attributes.img.data.attributes.url}
                                alt='category1'
                            />
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category