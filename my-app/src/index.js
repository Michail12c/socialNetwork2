import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



  ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
serviceWorker.unregister();
