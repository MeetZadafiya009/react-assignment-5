import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_TO_CART } from "../constants/actionType"

export const cartItemsReducer=(state={cartData:[],total:0,quantity:0},{type,payload})=>{
    switch(type){
        case ADD_TO_CART:
            if(state.cartData.find((item)=>item.id==payload.id)){
                payload.quantity+=1;
                return {
                    cartData:[...state.cartData],
                    total:state.total+payload.price,
                    quantity:state.quantity+1
                }
            }else{
                payload.quantity=1;
                return{
                    cartData:[...state.cartData,payload],
                    total:state.total+payload.price,
                    quantity:state.quantity+1
                }
            }
            break;
        case REMOVE_TO_CART:
            state.cartData.filter((item)=>item.id==payload.id).forEach((item)=>(
                item.quantity-=1
            ))
            return {
                cartData: [
                    ...state.cartData.filter((item)=>item.quantity!=0)
                ],
                total:state.total-payload.price,
                quantity:state.quantity-1
            }
        case DELETE_FROM_CART:
            return{
                cartData: [
                    ...state.cartData.filter((item)=>item.id!=payload.id)
                ],
                total:state.total-(payload.price*payload.quantity),
                quantity:state.quantity-(payload.quantity)
            }
        default:
            return state;
    }
    
}