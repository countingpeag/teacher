import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; 
import reducers from '../reducers';

const initialState = {
    login:false,
    loginSuccess: false,
    specialities: [],
    subjects: [],
    groups: [],
    studentsRequest:false,
    studentsScores: [],
    dataStatistics: {firstP: {}, secondP: {}, thirdP:{}},
    dataToPDFRequest: false
};

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhencers(applyMiddleware(thunk))
);