import { productActons } from "../constants/actionType"

const initialstate={
    product:[],
    single:{}
}
export const productReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case productActons.SET_PRODUCT:
            return {
                single:{},
                ...state,
                product:payload
            }
            break;
        case productActons.SELECT_PRODUCT:
            return {
                product:state.product,
                single:payload
            }
            break;
            case productActons.REMOVE_SELECTED_PRODUCT:
                return {
                    product:state.product,
                    single:{}
                }    
            default:
                return state;
    }
}