import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Constants/Constant";



// login user
export const loginUser = (email: string, password: string) => async (dispatch: any) => {
    try {
        const url = "http://10.0.2.2:8080/api/v1/user/login";
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        let data = await response.json();

       if(response.ok) {
        if(data.token) {
            await AsyncStorage.setItem('token', data.token);
            dispatch({type: LOGIN_SUCCESS, payload: data})
            
        } else {
            throw new Error(data.massage)
        }
       }

    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error instanceof Error ? error.message : 'login failed' })
    }
}



// logout user
export const logoutUser = () => async (dispatch: any) => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({ type: LOGOUT, payload: null });
    } catch (error) {
        console.log('logout error', error)
    }
}

// get token user
export const getUser = () => async (dispatch: any) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({ type: LOGIN_SUCCESS, payload: { token } })
        }
    } catch (error) {
        console.warn('authenticated getUser error', error)
    }
}



