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
        //TODO : take server url out to configuration file and change it to your ip address 
        fetch('http://192.168.86.190:3000/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
        })
        .then((response: Response) => {
            debugger;
            dispatch({type: AuthActions.LOGIN_USER_SUCCESS, payload: response.json()})
        })
        .catch((err: Error) => dispatch({type: AuthActions.LOGIN_USER_FAIL, payload: err.message}));
    };
};