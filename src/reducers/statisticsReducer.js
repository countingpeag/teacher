import { GET_STATISTICS_DATA } from '../actions';

export const dataStatistics = (state = {}, action) => {
    switch(action.type){
        case GET_STATISTICS_DATA:
            return  action.payload;
        default:
            return state;
    }
};