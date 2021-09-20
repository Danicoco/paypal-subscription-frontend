import { Error } from '../actions/ErrorAction';

const initialState = {
    msg: null,
    id: null
}

const ErrorReducer = (state = initialState, action) => {
    switch(action.type) {
        case Error.GET_ERROR:
            return {
                ...state,
                msg: action.payload,
                id: action.id
            }
        case Error.CLEAR_ERROR:
            return {
                ...state,
                msg: null,
                id: null
            }
        default:
            return state;
    }
}

export default ErrorReducer;