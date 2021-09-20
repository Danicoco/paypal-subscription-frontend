import { combineReducers } from 'redux';

//All reducers
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
    auth: AuthReducer,
    error: ErrorReducer
})