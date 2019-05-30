import { AuthState } from '../models/AuthState.model';
import { AuthActions } from '../models/Actions.model';

const INITIAL_STATE: AuthState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: undefined
};

export default (state: AuthState, action: {type: AuthActions, payload?: any}) => {
    switch(action.type) {
        case AuthActions.EMAIL_CHANGED:
            return { ...state, email: action.payload};
        case AuthActions.PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        default:
            return state;
    }
};