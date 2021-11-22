import * as actionTypes from './actionTypes'
import axios from 'axios'



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId

    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const signIn = (email) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
         
            
        };
        let url='Mysite.com/login ';
        
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.localId));
              
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};
export const submit = (number) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            number:number,
         
            returnSecureToken: true
        };
        let url='Mysite.com/email ';
        
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken,response.data.localId));
              
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};