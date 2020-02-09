import { loginThunkCreator } from "./auth-reducer";



const INITIALIZED_SUCCESS:string  = 'INITIALIZED-SUCCESS';

let initialState = {
  initialized: false
}
type getTypeActionTusk = {
  type: 'INITIALIZED-SUCCESS'
}

let appReducer = (state = initialState, action:getTypeActionTusk) => {
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

export const  initializeAPP = () => (dispatch:Function) => {

  let promise = dispatch(loginThunkCreator())
  promise.then( () => {
    dispatch(initializedSuccess())
  })
}

export default appReducer;