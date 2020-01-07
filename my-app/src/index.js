import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
  posts: [
    {id:1, message: "Hello React", likeCount:5 },
    {id:2, message: "It is my first post", likeCount:2},
  ],
  dialogs: [
    {id: 1, name: "Misha"},
    {id: 2, name: "Vladimir"},
    {id: 3, name: "lena"},
    {id: 4, name: "Roma"},
    {id: 5, name: "Inga"},
    {id: 6, name: "Ira"},
    {id: 7, name: "Anton"}
  ],
  messages: [
    {id:1, message: "Hello, it is my reacts' project"},
    {id:2, message:"Today, I writing code"},
    {id:3, message:"So. What is React? Library or framework?"},
    {id:4, message:"I think that framework"}
  ]
}
ReactDOM.render(<App state = {state}/>, document.getElementById('root'));


serviceWorker.unregister();
