import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ImagesContainer from './components/images/ImagesContainer';




const App = (props) => {
  return (
   <BrowserRouter> 
   <Provider store = {store}>
    <div className="App">
      <Header/>
    <div className = "app-wrapper">
      <Navbar/>
      <Route path = '/Profile' render = { () => <Profile/>}/>
      <Route path = '/Dialogs' render = {() => <DialogsContainer/>}/>
      <Route path = '/Images' render = {()=> <ImagesContainer/>}/>
    </div>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
