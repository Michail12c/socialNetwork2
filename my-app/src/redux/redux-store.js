import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import imagesReducer from './images-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  imagesPage: imagesReducer,
  usersPage: usersReducer,
  auth: authReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;