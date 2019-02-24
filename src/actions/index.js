import axios from "axios";
import decode from 'jwt-decode';

export const LOGIN = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


//LOGIN ACTIONS
const setLogin = payload => ({type:LOGIN, payload});
const failure = payload => ({type:LOGIN_FAILURE, payload});
const success = payload => ({type:LOGIN_SUCCESS, payload});

export const login = payload => {
    return dispatch => {
        
        dispatch(setLogin(true));
        axios.post("http://localhost:8080/nucleus/teacher/auth", payload)
        .then(({data}) => {
            if(data){
                localStorage.setItem('tokenAuth', data);
                dispatch(success(true));
            }
            dispatch(setLogin(false));
        })
        .catch(({error}) => {
            dispatch(failure(error));
            dispatch(setLogin(false));
        })
    };
};

export const logout = payload => {
    return dispatch => {
        dispatch(success(payload));
    };
};



//News/Home Actions
export const GET_NEWS = "GET_NEWS";

const get = payload => ({type: GET_NEWS, payload:payload});

export const getN = payload =>{
    return dispatch => {
        axios.get(`http://localhost:8080/nucleus/news/getAllNews/${localStorage.getItem('tokenAuth')}`)
        .then( ({data}) =>{
            dispatch(get(data));
        })
        .catch(error =>{
            console.log(error)
        })
    };
};



//Scores Actions
export const GET_SPECIALITIES = "GET_SPECIALITIES";
export const GET_SUBJECTS = "GET_SUBJECTS";
export const GET_GROUPS = "GET_GROUPS";

const getSpe = payload => ({type: GET_SPECIALITIES, payload:payload});
const getSub = payload => ({type:GET_SUBJECTS, payload:payload});
const getGro = payload => ({type:GET_GROUPS, payload:payload});

export const getSpecialities = () => {
    return dispatch => {
        const token = decode(localStorage.getItem('tokenAuth'));
        let teacher = {
            idTeacher: token.idTeacher,
            teacherName: token.teacherName,
            teacherLastName: token.teacherLastName
        }
        axios.post("http://localhost:8080/nucleus/teacher/specialities", teacher)
        .then( ({data}) => {
            dispatch(getSpe(data));
        })
        .catch(error => {
            console.log(error)
        })
    };
};