import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import BtnRender from './BtnRender';

const ProductList = ({product,isAdmin}) => {
const state = useContext(GlobalState);
const addCart = state.userAPI.addCart;
  
  return (
    <div className='product_card'>
      {
        isAdmin && <input type='checkbox' defaultChecked={product.checked}  />
      }
      <img src={product.images.url} alt=''/>
      <div className='product_box'>
        <h2>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product}/>
    </div>
  )
}

export default ProductList
