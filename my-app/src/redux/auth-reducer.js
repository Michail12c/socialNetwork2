import { authAPI, securityAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';


let initialState = {
  id:null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type){
  case  GET_CAPTCHA_URL_SUCCESS:  
  case SET_USER_DATA:{
    return {
      ...state,
      ...action.payload,
    }
  }
  default:
    return state;
  }
}

export const setUserData = (id, email, login, isAuth) => {
  return {type:SET_USER_DATA, payload: {id, email, login, isAuth}}
}
export const getCaptchaURLSuccess = (captchaUrl) => {
  return {type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export const loginThunkCreator = () => {
  return (dispatch) => {
  return   authAPI.me() 
    .then( response => {
      if(response.data.resultCode === 0){
        let {id, email, login} =  response.data.data
        dispatch(setUserData(id, email, login, true))
      }
      
    }) 
  }
}

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha) 
    .then( response => {
      if(response.data.resultCode === 0){
        dispatch(loginThunkCreator())
      }
      else {
        if(response.data.resultCode === 10){
          dispatch(getCaptchaURL());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Somme error'; 
        dispatch( stopSubmit('login', {_error: message}))
      }
    }) 
  }
}
export const logout = () => {
  return (dispatch) => {
    authAPI.logout() 
    .then( response => {
      if(response.data.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
      }
    }) 
  }
}

export const getCaptchaURL = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url; 
  dispatch(getCaptchaURLSuccess(captchaUrl));
 
}

export default authReducer;