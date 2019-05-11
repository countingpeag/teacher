import { GET_DATA_TO_PDF, GET_DATA_TO_PDF_REQUEST, GET_DATA_TO_PDF_RESPOSE } from '../actions';

export const dataToPDF = (state = {}, action) => {
    switch(action.type){
        case GET_DATA_TO_PDF:
            return action.payload;
        default:
            return state;
    }
}

export const dataToPDFRequest = (state = {}, action) => {
    switch(action.type){
        case GET_DATA_TO_PDF_REQUEST:
            return action.payload;
        default:
            return state;
    }
}

export const dataToPDFResponse = (state = {}, action) => {
    switch(action.type){
        case GET_DATA_TO_PDF_RESPOSE:
            return action.payload;
        default:
            return state;
    }
}