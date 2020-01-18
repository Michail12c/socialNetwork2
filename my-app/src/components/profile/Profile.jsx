import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';



const Profile = (props) =>{
  return (
    <div className = {styles.profile}>
        <ProfileInfo {...props} 
        profile = {props.profile} 
        status = {props.status}
        updateProfileThunk = {props.updateProfileThunk}
        />
        <MyPostsContainer/> 
    </div>
  )
}
export default Profile;