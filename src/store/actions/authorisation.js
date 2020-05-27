import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (idToken, localId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: localId,
  };
};
const authError = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: error,
  };
};
export const logout = () => {
  localStorage.removeItem("burgerToken");
  localStorage.removeItem("burgerExpDate");
  localStorage.removeItem("burgerUserId");
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
        const burgerExpDate =
          new Date().getTime() + response.data.expiresIn * 1000;
        localStorage.setItem("burgerToken", response.data.idToken);
        localStorage.setItem("burgerUserId", response.data.localId);
        localStorage.setItem("burgerExpDate", burgerExpDate);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authError(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("burgerToken");
    if (!token) {
      return;
    }
    const expDate = new Date(+localStorage.getItem("burgerExpDate"));
    if (expDate <= new Date()) {
      dispatch(logout());
      return;
    }
    const userId = localStorage.getItem("burgerUserId");
    dispatch(
      checkAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000)
    );
    dispatch(authSuccess(token, userId));
  };
};
