import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {userProfileThunkCreator, setUserProfileThunk, updateProfileThunk} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 1129;
    }  
    this.props.userProfileThunkCreator(userId);
    this.props.setUserProfileThunk(userId);
   
  }

  render(){
    return(
      <Profile {...this.props} 
      profile = {this.props.profile} 
      status = {this.props.status}
      updateProfileThunk = {this.props.updateProfileThunk}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, { userProfileThunkCreator, setUserProfileThunk, updateProfileThunk}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)