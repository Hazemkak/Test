import React from 'react';
import '../styles/Dropdown.css';
import arrowSvg from '../assets/arrow.svg';

function Dropdown(props) {
  const {items,type,handle}=props;

  return <>
      <select onClick={(e)=>handle(e.target.value)} style={{ backgroundImage:arrowSvg }} className='dropdownContainer' name="cars" id="cars">
      <option value="" selected disabled hidden>{type}</option>
        {items.map((item,i)=>{
          return <option key={item+i} value={item}>{item}</option>
        })}
      </select>
  </>;
}

export default Dropdown;
