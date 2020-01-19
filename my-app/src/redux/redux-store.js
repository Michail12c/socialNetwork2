import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import imagesReducer from './images-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  imagesPage: imagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;