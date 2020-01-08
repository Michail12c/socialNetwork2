import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './components/redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onUpdateChange} from './components/redux/state';

let rerenderAllThree = (state) => {
  ReactDOM.render(<App state = {state} addPost = {addPost} onUpdateChange = {onUpdateChange}/>, document.getElementById('root'));
}
rerenderAllThree(state);
subscribe (rerenderAllThree);

export default rerenderAllThree;



serviceWorker.unregister();
