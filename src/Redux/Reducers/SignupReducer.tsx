import { SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_MASSAGE } from "../Constants/Constant";

const initialState = {
    error: null,
    loading: false,
}


const signupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, error: action.payload, loading: false };
        case SIGNUP_FAILURE:
            return { ...state, error: action.payload, loading: false };
            case CLEAR_MASSAGE:
                return {...state, error: null}
        default:
            return state;
    }
}

export default signupReducer;