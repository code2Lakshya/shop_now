import React, { useContext } from 'react'
import Hero from './Hero/Hero'
import Category from './Category/Category'
import Products from './Products/Products'
import { AppContext } from '../../utils/AppContext'
import Loader from '../../components/Loader/Loader'


const Home = () => {
  const { categories, products ,loader} = useContext(AppContext);
  return (
    <div>
      <Hero />
    {loader?(<Loader />):
    (<div>
      <Category categories={categories} />
    <Products category='false' products={products} />
    </div>)}
    </div>
  )
}

export default Home