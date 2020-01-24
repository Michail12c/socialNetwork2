import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
/* import ImagesContainer from './components/images/ImagesContainer'; */
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { initializeAPP } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import SettingsContainer from './components/settings/SettingsContainer';

const ImagesContainer = React.lazy( () => import('./components/images/ImagesContainer'));

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
      <Switch>
      <Route exact path = '/'  render = {() => <Redirect to = {'Profile'}/> }/>
      <Route path = '/Profile/:userId?' render = { () => <ProfileContainer/>}/>
      <Route path = '/Dialogs' render = {() => <DialogsContainer/>}/>
      <Route path = '/Images' render = {() => {
        return <Suspense fallback={<div>Загрузка...</div>}> 
        <ImagesContainer/>
        </Suspense> 
        }}/>
      <Route path ='/Users' render = {() => <UsersContainer/>} />
      <Route path = '/Settings' render = {() => <SettingsContainer/>} />
      <Route path = '/Login' render = {() => <Login/> } />
      <Route path = '*' render = {() => <div className
      = 'notFound'>404 not found</div>}/>
      </Switch>
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

