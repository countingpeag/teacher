import { GET_SPECIALITIES } from '../actions';

export const specialities = (state = {}, action) => {
    switch(action.type){
        case GET_SPECIALITIES:
            return  action.payload;
        default:
            return state;
    }
}