import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import imagesReducer from './images-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  imagesPage: imagesReducer
})



let store = createStore(reducers);

window.store = store;
export default store;