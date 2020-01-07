import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';



const App = () => {
  return (
    <div className="App">
      <Header/>
    <div className = "app-wrapper">
      <Navbar/>
       {/* <Profile/> */}
       <Dialogs/>
    </div>
    </div>
  );
}

export default App;
