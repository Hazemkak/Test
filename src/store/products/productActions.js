import { ERROR_PROD, REQ_PROD, SUCCESS_PROD } from "./productTypes"
import Axios from 'axios';
import { getFilterCities, getFilterProducts, getFilterStates } from "../filters/filtersActions";

export const loadingProduct=()=>{
    return{
        type:REQ_PROD
    }
}

export const successProduct=(data)=>{
    let mapProducts=new Map();
    let allProducts=[];

    data.forEach(element => {
        if(!allProducts.includes(element.product_name)){//first time
            allProducts.push(element.product_name);
            mapProducts[element.product_name]=[element]
        }else{
            mapProducts[element.product_name]=[...mapProducts[element.product_name],element];
        }
    });

    return{
        type:SUCCESS_PROD,
        payload:mapProducts,
        list:allProducts,
        arrProducts:data
    }
}

export const errorProduct=(msg)=>{
    return{
        type:ERROR_PROD,
        payload:msg
    }
}

export const fetchProduct=()=>{
    return (dispatch)=>{
        dispatch(loadingProduct());
        Axios({
            method:'GET',
            url:'http://assessment-edvora.herokuapp.com/',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then((res)=>{
            dispatch(successProduct(res.data));
            dispatch(getFilterProducts(res.data));
            dispatch(getFilterStates(res.data,''));
            dispatch(getFilterCities(res.data,'',''));
        })
        .catch((err)=>{
            dispatch(errorProduct(err.message));
        });
    }
}