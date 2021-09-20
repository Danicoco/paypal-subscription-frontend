import { Auth } from '../actions/AuthAction';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: null,
    loading: true
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case Auth.LOAD_USER:
            return {
                ...state,
                admin: action.payload,
                loading: false
            }
        case Auth.SIGNED_IN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
                loading: false
            }
        case Auth.SIGNED_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                admin: null,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default AuthReducer;