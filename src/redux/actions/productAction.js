import { productActons } from "../constants/actionType"

export const setProduct=(data)=>{
    return {
        type:productActons.SET_PRODUCT,
        payload:data
    } 
}
export const selectProduct=(data)=>{
    return {
        type:productActons.SELECT_PRODUCT,
        payload:data
    }
}
export const removeSelectedProduct=()=>{
    return {
        type:productActons.REMOVE_SELECTED_PRODUCT
    }
}