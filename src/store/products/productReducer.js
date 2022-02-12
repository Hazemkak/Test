import { ERROR_PROD, REQ_PROD, SUCCESS_PROD } from "./productTypes"

const initialState={
    products:[],
    arrProducts:[],
    error:'',
    loading:true,
    list:[],
    states:[],
    cities:[],
    currentProducts:[]
}
export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case REQ_PROD:
            return {...state,
                loading:true,
                products:state.products,
                error:state.error,
                list:[]
            }
        case SUCCESS_PROD:
            return {...state,
                loading:false,
                products:action.payload,
                error:'',
                list:action.list,
                arrProducts:action.arrProducts,
                currentProducts:action.currentProducts
            }
        case ERROR_PROD:
            return {...state,
                loading:false,
                products:[],
                error:action.payload,
                list:[]
            }
        default: return state
    }
}