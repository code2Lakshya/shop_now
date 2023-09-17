import React, { useContext, useEffect, useState } from 'react'
import './RelatedProducts.css'
import { AppContext } from '../../../utils/AppContext';
import { toast } from 'react-hot-toast';
import Products from '../../Home/Products/Products';
import Loader from '../../../components/Loader/Loader';


const RelatedProducts = ({ productId, categoryId }) => {
  const [loader, setLoader] = useState(true);
  const { fetchDataFromApi, setRelatedProducts ,relatedProducts} = useContext(AppContext);
  useEffect(() => {
    setLoader(true);
    fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}
    &pagination[start]=0&pagination[limit]=4`)
      .then(res => {
        setRelatedProducts(res.data);
        setLoader(false);
      })
      .catch((err) => toast.error('Network Error : Related products'))
  },[])
  return (
    <div className='related-products'>
    <div>
        <h2>Related Products</h2>
        <div className='underline'></div>
      </div>
      {loader?
      (
      <Loader/>
      ):
      (
      <div>
      {relatedProducts.length>0?
      (
        <Products category={false} products={relatedProducts}/>
        ):(
          <p>No Data Found...</p>
        )}
      </div>
      )}
    </div>
  )
}

export default RelatedProducts