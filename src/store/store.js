import { combineReducers, createStore,applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from "./products/productReducer";
import { filterReducer } from "./filters/filtersReducer";

const rootReducer=combineReducers({
    product:productReducer,
    filter:filterReducer
})

const store=createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;