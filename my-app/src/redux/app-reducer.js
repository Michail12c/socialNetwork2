import { loginThunkCreator } from "./auth-reducer";
import { authAPI } from "../components/api/api";



const INITIALIZED_SUCCESS  = 'INITIALIZED-SUCCESS';

let initialState = {
  initialized: false
}

let appReducer = (state = initialState, action) => {
    switch(action.type){
      case INITIALIZED_SUCCESS: {
        return {
          ...state,
          initialized: true
        }
      }
      default:
        return state; 
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const  initializeAPP = () => (dispatch) => {

  let promise = dispatch(loginThunkCreator())
  promise.then( () => {
    dispatch(initializedSuccess())
  })
}

export default appReducer;