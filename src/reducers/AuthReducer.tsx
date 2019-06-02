import { AuthState } from '../models/AuthState.model';
import { AuthActions } from '../models/Actions.model';

const INITIAL_STATE: AuthState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: undefined
};

export default (state: AuthState = INITIAL_STATE, action: {type: AuthActions, payload?: any}) => {
    console.log(action);
    
    switch(action.type) {
        case AuthActions.EMAIL_CHANGED:
            return { ...state, email: action.payload};
        case AuthActions.PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        case AuthActions.LOGIN_USER_SUCCESS:
            return { ...INITIAL_STATE, user: action.payload};
        case AuthActions.LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};