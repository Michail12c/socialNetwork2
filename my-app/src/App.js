import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ImagesContainer from './components/images/ImagesContainer';




const App = (props) => {
  return (
   <BrowserRouter> 
    <div className="App">
      <Header/>
    <div className = "app-wrapper">
      <Navbar/>
      <Route path = '/Profile' render = { () => <Profile store = {props.store}/>}/>
      <Route path = '/Dialogs' render = {() => <DialogsContainer store = {props.store} />}/>
      <Route path = '/Images' render = {()=> <ImagesContainer  store = {props.store} />}/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
