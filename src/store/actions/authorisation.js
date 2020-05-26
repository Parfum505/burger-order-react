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
    authData: data,
  };
};
const authError = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: error,
  };
};
export const authorisation = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgJZ-Y9stbJo0GasmJfTb6MMqvyI2R630",
        authData
      )
      .then((resp) => {
        console.log(resp);
        dispatch(authSuccess(resp.data));
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};
