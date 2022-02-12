import React from 'react';
import BrandContainer from './BrandContainer';
import '../styles/Product.css';
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import {AiOutlineFilter} from 'react-icons/ai';

function ProductContainer(props) {
  const selector = useSelector((state) => state.product);
  
  return <div className='titlesProductContainer'>
    <span className='spanFilter'><IconButton onClick={()=>props.setOpen(true)} aria-label="delete">
        <AiOutlineFilter style={{ color:'white' }} />
      </IconButton></span>
      <h1 className='mainProductTitle'>Edvora</h1>
      <h2 className='subProductTitle'>Products</h2>

      {selector.list.filter(i=>(i===props.prod || props.prod==='')).map(key => {
        return  <BrandContainer st={props.st} city={props.city} key={key} items={selector.products[key]} productName={key}/>
      })}
      
  </div>;
}

export default ProductContainer;
