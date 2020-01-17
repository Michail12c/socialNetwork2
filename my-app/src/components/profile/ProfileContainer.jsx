import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {userProfileThunkCreator} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 1129;
    }  
    this.props.userProfileThunkCreator(userId);
   
  }

  render(){
    return(
      <Profile {...this.props}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}
let profileRedirect = withAuthRedirect(ProfileContainer)
let ProfileContainerUrl = withRouter(profileRedirect);
export default connect(mapStateToProps, { userProfileThunkCreator})(ProfileContainerUrl);