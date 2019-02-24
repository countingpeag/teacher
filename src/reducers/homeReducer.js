import { GET_NEWS } from '../actions';

export const getNews = (state = {}, action) => {
    switch(action.type){
        case GET_NEWS:
            return action.payload;
        default:
            return state;
    }
}