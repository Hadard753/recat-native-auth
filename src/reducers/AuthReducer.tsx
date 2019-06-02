import { AuthState } from '../models/AuthState.model';
import { AuthActionsTypes } from '../models/Actions.model';

const INITIAL_STATE: AuthState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: undefined
};

export default (state: AuthState = INITIAL_STATE, action: {type: AuthActionsTypes, payload?: any}): AuthState => {
    switch(action.type) {
        case AuthActionsTypes.FIELD_CHANGED:
            return { ...state, [action.payload.field]: action.payload.value};
        case AuthActionsTypes.LOGIN_USER_START: 
            return { ...state, loading: true, error: '' };
        case AuthActionsTypes.LOGIN_USER_SUCCESS:
            return { ...INITIAL_STATE, user: action.payload};
        case AuthActionsTypes.LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};