
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../Constants/Constant";


// signup user
export const signupUser = (name: string, email: string, password: string, navigation: any) => async (dispatch: any) => {
    try {
        const url = "http://10.0.2.2:8080/api/v1/user/register";
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        let data = await response.json();
        if (response.ok) {
            dispatch({ type: SIGNUP_SUCCESS, payload: data })
            if (data.massage === 'create successfully') {
                navigation.navigate("Login")
            }
            console.warn(data)
        } else {
            throw new Error(data.massage)
        }

    } catch (error) {
        dispatch({ type: SIGNUP_FAILURE, payload: error instanceof Error ? error.message : 'Signup failed' })
    }
}