import axios from "axios";
import decode from 'jwt-decode';

const token = localStorage.getItem('tokenAuth');

//LOGIN ACTIONS

export const LOGIN = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const setLogin = payload => ({type:LOGIN, payload});
export const failure = payload => ({type:LOGIN_FAILURE, payload});
const success = payload => ({type:LOGIN_SUCCESS, payload});

export const login = payload => {
    return dispatch => {
        
        dispatch(setLogin(true));
        axios.post("http://localhost:8080/nucleus/teacher/auth", payload)
        .then(({data}) => {
            console.log(data);
            if(data){
                localStorage.setItem('tokenAuth', data);
                dispatch(success(true));
            }
            else
                dispatch(failure(true));
            
            dispatch(setLogin(false));
        })
        .catch(({error}) => {
            dispatch(failure(true));
            dispatch(setLogin(false));
        })
    };
};

export const logout = payload => {
    return dispatch => {
        dispatch(success(payload));
    };
};

//Profile Actions
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGED_PASSWORD = "CHANGED_PASSWORD";
const changePasswordRequest = payload => ({type: CHANGE_PASSWORD_REQUEST, payload: payload});
const changedPassword = payload => ({type: CHANGED_PASSWORD, payload: payload});

export const changePassword = payload => {
    return dispatch => {
        console.log("hi111", payload);
        dispatch(changePasswordRequest(true));
        axios.put(`http://localhost:8080/nucleus/teacher/updatePassword`, payload)
        .then( ({data} )=> {
            if(data===true){
                alert("Se actualizo la contraseña exitosamente.")
                dispatch(changedPassword(data));
            }
            else
                alert("No se pudo actualizar la contraseña");
                
            dispatch(changePasswordRequest(false));
        })
        .catch( error => {
            console.log(error);
            dispatch(changePasswordRequest(false));
            alert("Algo salio mal, Intente mas tarde.");
        })
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
export const GET_STUDENTS_SCORES = "GET_STUDENTS_SCORES";
export const STUDENTS_REQUEST = "STUDENTS_REQUEST"; 

const getSpe = payload => ({type: GET_SPECIALITIES, payload:payload});
const getSub = payload => ({type:GET_SUBJECTS, payload:payload});
const getGro = payload => ({type:GET_GROUPS, payload:payload});
const getStuSco = payload => ({type:GET_STUDENTS_SCORES, payload:payload});
const studentsRequest = payload => ({type:STUDENTS_REQUEST, payload:payload}); //this action is used in Statistics component

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

export const getSubjects = () => {
    return dispatch => {
        const tokenDecoded = decode(token);
        let teacher = {
            idTeacher: tokenDecoded.idTeacher,
            teacherName: tokenDecoded.teacherName,
            teacherLastNameFather: tokenDecoded.teacherLastNameFather,
            teacherLastNameMother: tokenDecoded.teacherLastNameMother
        }
        axios.post(`http://localhost:8080/nucleus/teacher/subjects/${token}`, teacher)
        .then( ({data}) => {
            dispatch(getSub(data));
        })
        .catch(error => {
            console.log(error)
        })
    };
};

export const getGroups = () => {
    return dispatch => {
        axios.get("http://localhost:8080/nucleus/teacher/groups")
        .then( ({data}) => {
            dispatch(getGro(data));
        })
        .catch(error => {
            console.log(error)
        })
    };
};

export const getStudentsScores = payload => {
    return dispatch => {
        dispatch(studentsRequest(true));
        axios.post("http://localhost:8080/nucleus/teacher/scores", payload)
        .then( ({data}) => {
            dispatch(getStuSco(data));
            dispatch(studentsRequest(false));
        })
        .catch(error => {
            console.log(error)
            dispatch(studentsRequest(false));
        })
    }
};


//Statistics Action
export const GET_STATISTICS_DATA = "GET_STATISTICS_DATA";

const getStatistics = payload => ({type:GET_STATISTICS_DATA, payload:payload});

export const getStatisticsData = payload => {
    return dispatch => {
        dispatch(studentsRequest(true));
        axios.post('http://localhost:8080/nucleus/statistics/dataTeacher', payload)
        .then( ({data}) => {
            dispatch(getStatistics(data));
            dispatch(studentsRequest(false));
        })
        .catch( error => {
            console.log(error);
            dispatch(studentsRequest(false));
        });
    };
};


//File actions
export const GET_DATA_TO_PDF = "GET_DATA_TO_PDF";
export const GET_DATA_TO_PDF_REQUEST="GET_DATA_TO_PDF_REQUEST";
export const GET_DATA_TO_PDF_RESPOSE="GET_DATA_TO_PDF_RESPOSE";

const getDataToPDF = payload => ({type: GET_DATA_TO_PDF, payload:payload});
const getDataToPDFRequest = payload => ({type: GET_DATA_TO_PDF_REQUEST, payload:payload});

export const getDataToFile = payload => {
    return dispatch => {
        dispatch(getDataToPDFRequest(true));
        axios.post('http://localhost:8080/nucleus/teacher/dataReport', payload)
        .then( ({data}) => {
            dispatch(getDataToPDF(data));
        })
        .catch( error => {
            console.log(error);
        })
    };
};