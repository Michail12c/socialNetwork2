import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {userProfileThunkCreator, setUserProfileThunk, updateProfileThunk, savePhoto} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.autorizedUserId;
      if(!userId){
        this.props.history.push('/login')
       }
    }  
    this.props.userProfileThunkCreator(userId);
    this.props.setUserProfileThunk(userId);
  }
  
  componentDidMount(){
    this.refreshProfile()   
  }
  componentDidUpdate(prevProps, prevState, snapShot){ 
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile()
    }
  }

  render(){
    return(
      <Profile {...this.props} 
      isOwner = {!this.props.match.params.userId}
      profile = {this.props.profile} 
      status = {this.props.status}
      updateProfileThunk = {this.props.updateProfileThunk}
      savePhoto = {this.props.savePhoto}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, { userProfileThunkCreator, setUserProfileThunk, updateProfileThunk, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)