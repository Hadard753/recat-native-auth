import axios, { AxiosResponse, AxiosError } from 'axios';
import { AuthActions } from '../models/Actions.model';

export const selectCard = (cardId: number) => {
  return {
    type: 'select_card',
    payload: cardId
  };
};

export const emailChanged = (text: string) => {
  return {
    type: AuthActions.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text: string) => {
  return {
    type: AuthActions.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (email: string, password: string) => {
  return dispatch => {
    dispatch({ type: AuthActions.LOGIN_USER_START });
    //TODO : take server url out to configuration file and change it to your ip address
    axios
      .post('http://10.100.102.10:3000/api/login', { email, password })
      .then((response: AxiosResponse) => {
        dispatch({ type: AuthActions.LOGIN_USER_SUCCESS, payload: response.data.profile });
      })
      .catch((err) => {
        let message = 'An error as accord. Please try again later.';
        dispatch({ type: AuthActions.LOGIN_USER_FAIL, payload: err.response.data.error || message });
      });
  };
};
