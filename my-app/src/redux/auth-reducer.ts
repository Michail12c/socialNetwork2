/* import { getCaptchaURLSuccess } from './auth-reducer'; */
import { authAPI, securityAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = "SET-USER-DATA"
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'

let initialState = {
  id:null as number | null,
  email: null as string | null, 
  login: null as string | null, 
  isAuth: false,
  captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserDataTypePayload = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type SetUserDataType = {
  type: typeof SET_USER_DATA,
  payload: SetUserDataTypePayload
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
  return {type:SET_USER_DATA, payload: {id, email, login, isAuth}}
}

type GetCaptchaURLSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl: string}
}
export const getCaptchaURLSuccess = (captchaUrl: string): GetCaptchaURLSuccessType => {
  return {type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export const loginThunkCreator = () => async (dispatch: any) => {
  let response = await authAPI.me() 
      if(response.data.resultCode === 0){
        let {id, email, login} =  response.data.data
        dispatch(setUserData(id, email, login, true))
      }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) =>  { 
  let response = await authAPI.login(email, password, rememberMe, captcha) 
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
}

export const logout = () => async (dispatch: any) => {
   let response = await authAPI.logout() 
      if(response.data.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
      }
}

export const getCaptchaURL = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url; 
  dispatch(getCaptchaURLSuccess(captchaUrl));
 
}

export default authReducer;