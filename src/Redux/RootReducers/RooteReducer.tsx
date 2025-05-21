import { combineReducers } from "redux";
import loginReducer from "../Reducers/LoginReducer";
import signupReducer from "../Reducers/SignupReducer";
import cartReducer from "../Reducers/CartReducer";

const rootReducer = combineReducers({
    authLogin: loginReducer,
    authSignup: signupReducer,
    cart: cartReducer,
});

export default rootReducer;
