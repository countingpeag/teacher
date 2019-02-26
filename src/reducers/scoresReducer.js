import { GET_SPECIALITIES, GET_SUBJECTS, GET_GROUPS, GET_STUDENTS_SCORES } from '../actions';

export const specialities = (state = {}, action) => {
    switch(action.type){
        case GET_SPECIALITIES:
            return  action.payload;
        default:
            return state;
    }
}

export const subjects = (state = {}, action) => {
    switch(action.type){
        case GET_SUBJECTS:
            return  action.payload;
        default:
            return state;
    }
}

export const groups = (state = {}, action) => {
    switch(action.type){
        case GET_GROUPS:
            return  action.payload;
        default:
            return state;
    }
}

export const studentsScores = (state = {}, action) => {
    switch(action.type){
        case GET_STUDENTS_SCORES:
            return  action.payload;
        default:
            return state;
    }
}