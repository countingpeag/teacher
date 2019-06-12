import { CHANGE_PASSWORD_REQUEST, CHANGED_PASSWORD } from './../actions';

export const changePasswordRequest = (state = {}, action) => {
    switch(action.type){
        case CHANGE_PASSWORD_REQUEST:
            return  action.payload;
        default:
            return state;
    }
};

export const changedPassword = (state = {}, action) => {
    switch(action.type){
        case CHANGED_PASSWORD:
            return  action.payload;
        default:
            return state;
    }
};