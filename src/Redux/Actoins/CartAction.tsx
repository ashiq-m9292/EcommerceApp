import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants/Constant";

export const addToCart = (item: any) => {
    return {
        type: ADD_TO_CART, payload: item
    };
};


export const removeToCart = ( id:any) => {
    return {
        type: REMOVE_TO_CART, payload: id
    };
};