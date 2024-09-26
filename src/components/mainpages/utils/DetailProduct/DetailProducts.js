import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';
import { Link } from 'react-router-dom';

const DetailProducts = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productAPI.products;
  const [detailProduct,setDetalProduct] = useState([]);

  useEffect(() => {
   if(params){
    products.forEach(product => {
      if(product._id === params.id) setDetalProduct(product)
    });
   }
  },[params, products])

 if(detailProduct.length === 0) return null; 
  
  return (
    <div className='detail'>
      <img src={detailProduct.images.url} alt=''/>
      <div className='box-detail'>
        <div className='row'>
          <h2>{detailProduct.title}</h2>
          <h6>{detailProduct.product_id}</h6>
        </div>
        <span>${detailProduct.price}</span>
        <p>{detailProduct.description}</p>
        <p>{detailProduct.content}</p>
        <p>{detailProduct.sold}</p>
        <Link to='/cart' className="cart">Buy Now</Link>
      </div>
    </div>
  )
}

export default DetailProducts
