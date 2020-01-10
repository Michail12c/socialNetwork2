import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderAllThree = (state) => {
  ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
}
rerenderAllThree(store.getState());
store.subscribe(rerenderAllThree);

export default rerenderAllThree;

serviceWorker.unregister();
