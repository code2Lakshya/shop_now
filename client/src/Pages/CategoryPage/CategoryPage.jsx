import React, { useContext } from 'react'
import Products from '../../Pages/Home/Products/Products'
import './CategoryPage.css'
import { AppContext } from '../../utils/AppContext'
import Loader from '../../components/Loader/Loader'


const CategoryPage = () => {
  const { products, loader } = useContext(AppContext);
  const category = products[0].attributes.categories.data[0].attributes.title;
  return (
    <div className='category-main-content'>
      {loader ?
        (<Loader />) :
        (products.length>0?
          (<div className='layout'>
            <div className='category-title'>
              {category}
            </div>
            <Products category={false} products={products} />
          </div>):
          (<p>No data Found</p>)
        )}
    </div>
  );
}

export default CategoryPage