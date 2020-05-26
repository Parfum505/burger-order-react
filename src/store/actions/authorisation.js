import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: data.idToken,
    userId: data.localId,
  };
};
const authError = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: error,
  };
};
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
export const authorisation = (email, password, isSingUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgJZ-Y9stbJo0GasmJfTb6MMqvyI2R630";
    if (!isSingUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgJZ-Y9stbJo0GasmJfTb6MMqvyI2R630";
    }
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authError(error.response.data.error));
      });
  };
};
