import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_TO_CART } from "../constants/actionType";

export const addToCart=(data)=>{
    return{
        type:ADD_TO_CART,
        payload:data
    }
}
export const removeToCart=(data)=>{
    return{
        type:REMOVE_TO_CART,
        payload:data
    }
}
export const deleteFromCart=(data)=>{
    return{
        type:DELETE_FROM_CART,
        payload:data
    }
}