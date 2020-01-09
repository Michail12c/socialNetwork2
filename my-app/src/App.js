import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';



const App = (props) => {
  return (
   <BrowserRouter> 
    <div className="App">
      <Header/>
    <div className = "app-wrapper">
      <Navbar/>
      <Route path = '/Profile' render = { () => <Profile 
      posts = {props.state.profilePage}
      dispatch = {props.dispatch}
      />}/>
      <Route path = '/Dialogs' render = {() => <Dialogs 
      message = {props.state.dialogsPage} 
      dispatch = {props.dispatch} />}/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
