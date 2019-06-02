import axios, { AxiosResponse, AxiosError } from 'axios';
import { AuthActions } from '../models/Actions.model';


export const selectCard = ( cardId: number ) => {
    return {
        type: 'select_card',
        payload: cardId
    };
};

export const emailChanged = ( text: string ) => {
    return {
        type: AuthActions.EMAIL_CHANGED,
        payload: text
    };
};


export const passwordChanged = ( text: string ) => {
    return {
        type: AuthActions.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ( email: string, password: string ) => {
    return (dispatch) => {
        axios.post('http://10.100.102.10:3000/api/login', { email, password })
            .then((response: AxiosResponse) => {
                dispatch({type: AuthActions.LOGIN_USER_SUCCESS, payload: response.data.profile});
            })
            .catch((err: AxiosError) => {
                let message = 'An error as accord. Please try again later.';
                if(err.code === "401")
                    message = 'Wrong username or password';
                dispatch({type: AuthActions.LOGIN_USER_FAIL, payload: message});
            });

        // //TODO : take server url out to configuration file and change it to your ip address 
        // fetch('http://192.168.86.190:3000/api/login', {
        // method: 'POST',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({ email: email, password: password })
        // })
        // .then((response) => {
        //     debugger;
        //     if(response.ok)
        //         dispatch({type: AuthActions.LOGIN_USER_SUCCESS, payload: response.json()})
        // })
        // .catch((err: Error) => dispatch({type: AuthActions.LOGIN_USER_FAIL, payload: err.message}));
    };
};