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