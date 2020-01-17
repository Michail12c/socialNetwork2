import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
import { Redirect } from 'react-router-dom';



const Profile = (props) =>{
  if(!props.isAuth) return <Redirect to = '/Login' />
  return (
    <div className = {styles.profile}>
        <ProfileInfo {...props} profile = {props.profile} />
        <MyPostsContainer/> 
    </div>
  )
}
export default Profile;