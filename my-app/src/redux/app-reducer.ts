import { loginThunkCreator } from "./auth-reducer";



const INITIALIZED_SUCCESS  = 'INITIALIZED-SUCCESS';

type InitialStateActionType = {
  initialized: boolean
}

let initialState: InitialStateActionType = {
  initialized: false
}
type getTypeActionTusk = {
  type: 'INITIALIZED-SUCCESS'
}

let appReducer = (state = initialState, action: any): InitialStateActionType => {
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
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const  initializeAPP = () => (dispatch:any) => {

  let promise = dispatch(loginThunkCreator())
  promise.then( () => {
    dispatch(initializedSuccess())
  })
}

export default appReducer;