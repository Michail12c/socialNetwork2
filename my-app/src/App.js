import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ImagesContainer from './components/images/ImagesContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';




const App = (props) => {
  return (
   <BrowserRouter> 
   <Provider store = {store}>
    <div className="App">
      <HeaderContainer/>
    <div className = "app-wrapper">
      <Navbar/>
      <Route path = '/Profile/:userId?' render = { () => <ProfileContainer/>}/>
      <Route path = '/Dialogs' render = {() => <DialogsContainer/>}/>
      <Route path = '/Images' render = {()=> <ImagesContainer/>}/>
      <Route path ='/Users' render = {() => <UsersContainer/>} />
      <Route path = '/Login' render = {() => <Login/> } />
    </div>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
