import { combineReducers } from "redux";
import { cartItemsReducer } from "./cartItemsReducer";
import { productReducer } from "./productReducer";

const reducer=combineReducers({
    products:productReducer,
    cart:cartItemsReducer
})
export default reducer;