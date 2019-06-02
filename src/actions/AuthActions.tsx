import axios, { AxiosResponse, AxiosError } from 'axios';
import { Actions } from 'react-native-router-flux';

import { AuthActionsTypes } from '../models/Actions.model';
import { Dispatch } from 'redux';

export const fieldChanged = (field: string, value: string) => {
  return {
    type: AuthActionsTypes.FIELD_CHANGED,
    payload: { field, value }
  };
};

export const loginUser = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: AuthActionsTypes.LOGIN_USER_START });
    //TODO : take server url out to configuration file and change it to your ip address
    axios
      .post('http://10.100.102.10:3000/api/login', { email, password })
      .then((response: AxiosResponse) => {
        dispatch({ type: AuthActionsTypes.LOGIN_USER_SUCCESS, payload: response.data.profile });
        Actions.main();
      })
      .catch(err => {
        let message = 'An error as accord. Please try again later.';
        dispatch({ type: AuthActionsTypes.LOGIN_USER_FAIL, payload: err.response.data.error || message });
      });
  };
};

export const logout = () => {
  Actions.auth();
  return {
    type: AuthActionsTypes.LOGOUT
  };
};