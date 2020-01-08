import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onUpdateChange} from './components/redux/state';

let rerenderAllThree = (state) => {
  ReactDOM.render(<App state = {store.getstate()} dispatch = {store.dispatch.bind(store)}/>, document.getElementById('root'));
}
rerenderAllThree(store.getstate());
store.subscribe(rerenderAllThree);

export default rerenderAllThree;

serviceWorker.unregister();
