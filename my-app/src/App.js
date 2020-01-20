import React from 'react';
import './App.css';
import { Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ImagesContainer from './components/images/ImagesContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { initializeAPP } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';


class App extends React.Component {
  
  componentDidMount(){
        this.props.initializeAPP()
  }
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
   return (
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
  );
 }
}
let mapStateToProps = (state) => ({
 initialized: state.app.initialized
})
export default compose (
withRouter,
connect(mapStateToProps, {initializeAPP}))(App)

