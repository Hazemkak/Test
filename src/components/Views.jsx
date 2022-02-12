import React, { useEffect, useState } from 'react';
import '../styles/Views.css';
import Filter from './Filter';
import ProductContainer from './ProductContainer';
import {useDispatch} from 'react-redux';
import { fetchProduct } from '../store';
import FilterMob from './FilterMob';

function View() {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(fetchProduct());
    },[]);


    const [prod,setProd]=useState('');
    const [st,setSt]=useState('');
    const [city,setCity]=useState('');
    const [open,setOpen]=useState(false);
    const handleClear=()=>{
      setProd('');
      setSt('');
      setCity('');
    }


  return <div className='mainView'>
    <FilterMob handleClear={handleClear} st={st} prod={prod} city={city} setProd={setProd} setSt={setSt} setCity={setCity} handleClose={()=>setOpen(false)} open={open}/>
      <div className='filterGrid'>
        <Filter handleClear={handleClear} st={st} prod={prod} city={city} setProd={setProd} setSt={setSt} setCity={setCity}/>
        </div>
        <div className='productGrid'>
        <ProductContainer setOpen={setOpen} prod={prod} st={st} city={city}/>
        </div>
  </div>;
}

export default View;
