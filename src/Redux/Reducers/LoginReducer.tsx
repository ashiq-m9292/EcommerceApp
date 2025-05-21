
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, CLEAR_MASSAGE } from "../Constants/Constant";

const initialState = {
    loading: false,
    error: null,
    token: null,
    isAuthenticated: false,
};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true, error: null, token: action.payload.token };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload, isAuthenticated: false, token: null };
        case LOGOUT:
            return { ...state, isAuthenticated: false, token: null };
        case CLEAR_MASSAGE:
            return { ...state, error: null, }
        default:
            return state;
    }
}

export default loginReducer;