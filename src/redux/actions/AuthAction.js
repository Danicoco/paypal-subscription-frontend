import axios from 'axios';
import { returnErrors } from './ErrorAction';
import { tokenConfig } from './tokenConfig';
const baseURL = `http://localhost:5000/api/v1/users`

//Auth types
export const Auth = {
    SIGNED_IN: "SIGNED_IN",
    SIGNED_OUT: "SIGNED_OUT",
    LOAD_USER: "LOAD_USER",
}

//login admin & employee
// @function login admin
// @function login employee
export const signIn = (values) => async(dispatch) => {
    try {
        const log_allow = await axios.post(`${baseURL}/login`,values);
        dispatch({ type: Auth.SIGNED_IN, payload: log_allow.data.data });
    } catch (error) {
        if(error.response) {
            dispatch(returnErrors(error.response.data.message, 'SIGNIN_FAIL'));
        } else {
            dispatch(returnErrors("Internal Server Error", "500", 'SIGNIN_FAIL'));
        }
        
    }

}

//current user
// @function validate user
export const currentUser = () => async(dispatch, getState) => {
    try {
        const current = await axios.get(`${baseURL}`, tokenConfig(getState));
        dispatch({ type: Auth.LOAD_USER, payload: current.data.data });
    } catch (error) {
        if(error.response) {
            dispatch(returnErrors(error.response.data.msg, error.response.status, 'CURRENT_ERROR'));
            dispatch({ type: Auth.SIGNED_OUT });
        } else {
            dispatch(returnErrors("Internal Server Error", "500", 'CURRENT_ERROR'));
            dispatch({ type: Auth.SIGNED_OUT });
        }
    }
}


//log out admin & employee
// @function to log out admin and employee
export const signOut = () => dispatch => {
    dispatch({ type: Auth.SIGNED_OUT });
}