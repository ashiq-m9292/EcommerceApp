
import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants/Constant";

const initialState: any = {
    cartItems: [],
}

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case REMOVE_TO_CART:
const result = state.cartItems.filter((item:any) => item.id !== action.payload)

        default:
            return state;
    };
};



export default cartReducer;

