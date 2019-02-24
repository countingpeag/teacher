import { combineReducers } from 'redux';
import { login, loginFailure, loginSuccess } from './loginReducer';
import { getNews } from './homeReducer';
import { specialities } from './scoresReducer';

export default combineReducers({
    login,
    loginFailure,
    loginSuccess,
    getNews,
    specialities
}); 