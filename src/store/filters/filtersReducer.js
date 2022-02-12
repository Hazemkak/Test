import { FILTER_CITY, FILTER_PROD, FILTER_STATE, UPDATE_FILTER } from "./filtersTypes";

const initialState={
    product:[],
    state:[],
    city:[]
}

export const filterReducer=(state=initialState,action)=>{
    switch(action.type){
        case FILTER_PROD:
            return {...state,
                product:action.payload
            }
        case FILTER_STATE:
            return{...state,
                state:action.payload
            }
        case FILTER_CITY:
            return{...state,
                city:action.payload
            }
        case UPDATE_FILTER:
            return{
                product:action.product,
                state:action.state,
                city:action.city
            }
        default: return state;
    }
}